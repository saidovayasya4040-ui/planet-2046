import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { generateSmartEcoReply } from './src/services/ecoKnowledgeBase';

dotenv.config();

function ecoApiPlugin(): Plugin {
  return {
    name: 'eco-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
          let data: any = {};
          try {
            data = JSON.parse(body || '{}');
          } catch (e) {
            data = {};
          }

          const message = data.message || '';
          const context = data.context || {};
          const history = data.history || [];
          const apiKey = process.env.GEMINI_API_KEY;

          if (!apiKey) {
            const reply = generateSmartEcoReply(message, context);
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ reply }));
            return;
          }

          try {
            const ai = new GoogleGenAI({ apiKey });
            const systemPrompt = `Твое имя — Эко-Друг. Всегда представляйся именно этим именем в начале общения или когда тебя спрашивают, кто ты.

ТВОЯ ГЛАВНАЯ МИССИЯ:
Ты — дружелюбный, всезнающий, поддерживающий и вдохновляющий эко-помощник интерактивной платформы «Планета через 20 лет» (Планета 2046).
ТЫ ОБЯЗАН И С РАДОСТЬЮ ОТВЕЧАЕШЬ НА АБСОЛЮТНО ВСЕ ВОПРОСЫ, СВЯЗАННЫЕ С ЭКОЛОГИЕЙ, ОКРУЖАЮЩЕЙ СРЕДОЙ, ПРИРОДОЙ, КЛИМАТОМ И УСТОЙЧИВЫМ ОБРАЗОМ ЖИЗНИ.

ТВОЯ ЭКСПЕРТИЗА ВКЛЮЧАЕТ ВСЕ ТЕМЫ ЭКОЛОГИИ:
1. Климат и атмосфера: Глобальное потепление, парниковый эффект (CO2, метан), сценарии 2046 года, таяние ледников, озоновый слой, кислотные дожди, качество воздуха (AQI, PM2.5, PM10, NO2), смог и защита дыхания.
2. Отходы и раздельный сбор: Маркировки пластика (01 PET, 02 HDPE, 03 PVC, 04 LDPE, 05 PP, 06 PS, 07 OTHER), макулатура, стеклотара, алюминий и жесть, тетрапак, электролом, одежда и текстиль.
3. Опасные токсичные отходы: Батарейки, аккумуляторы, ртутные градусники (демеркуризация), люминесцентные лампы, автопокрышки, просроченные лекарства.
4. Микропластик и океаны: Загрязнение рек, озер (Байкал, Аральское море), тихоокеанское мусорное пятно, эвтрофикация (цветение воды), экономия воды дома.
5. Леса и флора: Посадка деревьев, виды деревьев для очистки воздуха (тополь, липа, береза), борьба с лесными и торфяными пожарами, опустынивание, защита тайги.
6. Биоразнообразие: Красная книга, исчезающие животные, почему вымирают пчелы и почему они критически важны для опыления продовольствия, правильная зимняя подкормка птиц.
7. Чистая энергия и транспорт: Солнечные панели, ветрогенераторы, гидроэнергетика, зеленый водород, электромобили против ДВС, экология аккумуляторов.
8. Zero Waste и привычки: Философия «Ноль отходов», правило 5R (Refuse, Reduce, Reuse, Recycle, Rot), сокращение пищевых отходов (Food Waste), борьба с гринвошингом (эко-маркировки «Листок жизни», EU Ecolabel).
9. Города будущего 2046: Концепция «Городов-губок» (Sponge City), зеленые крыши, карманные леса Мияваки, велоинфраструктура.
10. Практические шаги для каждого: Если пишет школьник или студент — давай простые, бесплатные и доступные шаги (сдать батарейки в школе, своя бутылка для воды, выключать свет, сбор макулатуры).

ПРАВИЛА ОБЩЕНИЯ:
- Будь доброжелательным, поддерживающим и чутким. Никогда не ругай и не стыди за эко-ошибки.
- На любые фразы вроде «Привет», «Мне грустно» отвечай тепло и мягко переводи на заботу о себе и природе.
- Оформляй ответы красиво: списки с эмодзи 🌱♻️, выделение главного жирным шрифтом, четкие абзацы.

Текущий контекст пользователя:
- Город: ${context.cityName || 'Москва'}, ${context.country || 'Евразия'}
- Эко-индекс: ${context.ecoIndex ?? 64}/100 (${context.indexStatus || 'Умеренно'})
- Воздух: AQI ${context.aqi ?? 42} (PM2.5: ${context.pm25 ?? 11} µg/m³)
- Категория эко-следа: ${context.quizCategory || 'Не определено'}`;

            const contents: any[] = [];
            if (Array.isArray(history) && history.length > 0) {
              const recent = history.slice(-6);
              for (const h of recent) {
                if (h.role && h.content) {
                  contents.push({
                    role: h.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: h.content }]
                  });
                }
              }
            }
            contents.push({
              role: 'user',
              parts: [{ text: message }]
            });

            const response = await ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents,
              config: {
                systemInstruction: systemPrompt
              }
            });

            const reply = response.text || generateSmartEcoReply(message, context);
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ reply }));
          } catch (error) {
            console.error('Gemini API call failed, using Eco Knowledge Base:', error);
            const reply = generateSmartEcoReply(message, context);
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify({ reply }));
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), ecoApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
