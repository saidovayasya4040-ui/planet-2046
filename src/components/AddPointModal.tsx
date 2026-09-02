import React, { useState } from 'react';
import { X, Upload, MapPin, CheckCircle } from 'lucide-react';
import { MapPoint, CityData } from '../types';
import { useLanguage } from '../i18n/LanguageContext';
import { TRANSLATIONS } from '../i18n/translations';

interface AddPointModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentCity: CityData;
  onAddPoint: (newPoint: MapPoint) => void;
}

export const AddPointModal: React.FC<AddPointModalProps> = ({
  isOpen,
  onClose,
  currentCity,
  onAddPoint
}) => {
  const { language, isEn } = useLanguage();
  const t = TRANSLATIONS[language];
  const m = t.map.pointModal;
  const cats = t.map.categories;

  const [pointType, setPointType] = useState<'problem' | 'recycling'>('problem');
  const [category, setCategory] = useState<MapPoint['category']>('dump');
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !address.trim() || !description.trim()) {
      return;
    }

    // Slightly randomize coordinates around current city for demo
    const offsetLat = (Math.random() - 0.5) * 0.05;
    const offsetLng = (Math.random() - 0.5) * 0.05;

    const categoryLabels: Record<MapPoint['category'], string> = isEn
      ? {
          dump: 'Illegal Waste Dump',
          emissions: 'Air / Factory Emissions',
          water_pollution: 'Water Body Pollution',
          plastic: 'Plastic Recycling',
          batteries: 'Batteries & E-Waste',
          clothes: 'Clothing & Textiles',
          general_recycle: 'Full Eco-Center',
          hazardous: 'Hazardous Waste'
        }
      : {
          dump: 'Свалка отходов',
          emissions: 'Выбросы газов',
          water_pollution: 'Загрязнение водоема',
          plastic: 'Прием пластика',
          batteries: 'Батарейки и аккумуляторы',
          clothes: 'Одежда и текстиль',
          general_recycle: 'Экоцентр / Все фракции',
          hazardous: 'Опасные отходы'
        };

    const newPoint: MapPoint = {
      id: `pt-custom-${Date.now()}`,
      cityId: currentCity.id,
      title,
      type: pointType,
      category,
      categoryLabel: categoryLabels[category] || (isEn ? 'Eco-point' : 'Эко-точка'),
      coordinates: [currentCity.coordinates[0] + offsetLat, currentCity.coordinates[1] + offsetLng],
      address,
      description,
      imageUrl: imagePreview || (pointType === 'problem' 
        ? 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&q=80&w=400' 
        : 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=400'),
      status: 'pending',
      createdAt: new Date().toISOString().split('T')[0],
      authorName: authorName.trim() || (isEn ? 'Eco activist' : 'Эко-активист'),
      votesCount: 1
    };

    onAddPoint(newPoint);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset form
      setTitle('');
      setAddress('');
      setDescription('');
      setImagePreview(null);
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-2xl max-w-lg w-full p-6 sm:p-8 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-1 rounded-xl bg-slate-800/80 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-10">
            <CheckCircle className="w-16 h-16 text-teal-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">{m.successTitle}</h3>
            <p className="text-slate-300 text-sm mt-2">
              {m.successSubtitle}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400 block mb-1">
                {m.badge} • {isEn && currentCity.nameEn ? currentCity.nameEn : currentCity.name}
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase">
                {m.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {m.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-2">
                  {m.pointType}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPointType('problem');
                      setCategory('dump');
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      pointType === 'problem'
                        ? 'bg-rose-600 text-white shadow-md'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {m.typeProblem}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPointType('recycling');
                      setCategory('plastic');
                    }}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      pointType === 'recycling'
                        ? 'bg-teal-400 text-emerald-950 shadow-md font-black'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {m.typeRecycle}
                  </button>
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1.5">
                  {m.category}
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as MapPoint['category'])}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                >
                  {pointType === 'problem' ? (
                    <>
                      <option value="dump">{cats.dump}</option>
                      <option value="water_pollution">{cats.water_pollution}</option>
                      <option value="emissions">{cats.emissions}</option>
                      <option value="hazardous">{cats.hazardous}</option>
                    </>
                  ) : (
                    <>
                      <option value="plastic">{cats.plastic}</option>
                      <option value="batteries">{cats.batteries}</option>
                      <option value="clothes">{cats.clothes}</option>
                      <option value="general_recycle">{cats.general_recycle}</option>
                    </>
                  )}
                </select>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  {m.nameField} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={pointType === 'problem' ? (isEn ? 'E.g. Tire dump in the forest' : 'Напр. Свалка шин в лесополосе') : (isEn ? 'E.g. Eco-box for plastic' : 'Напр. Экобокс для пластика')}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-teal-400 placeholder:text-slate-500"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  {m.addressField} *
                </label>
                <div className="relative">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder={m.addressPlaceholder}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white focus:outline-none focus:border-teal-400 placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  {m.descField} *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder={m.descPlaceholder}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-teal-400 placeholder:text-slate-500"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  {m.uploadPhoto}
                </label>
                <div className="flex items-center gap-3">
                  <label className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-dashed border-slate-600 rounded-xl py-3 px-4 cursor-pointer text-xs text-slate-300 transition-colors">
                    <Upload className="w-4 h-4 text-teal-400" />
                    <span>{imagePreview ? (isEn ? 'Replace photo' : 'Заменить фото') : m.uploadPrompt}</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-12 h-12 object-cover rounded-xl border border-teal-400/50"
                    />
                  )}
                </div>
              </div>

              {/* Author name */}
              <div>
                <label className="block text-xs font-bold uppercase text-slate-400 mb-1">
                  {m.authorField}
                </label>
                <input
                  type="text"
                  placeholder={m.authorPlaceholder}
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-teal-400 placeholder:text-slate-500"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-teal-400 hover:bg-teal-300 text-emerald-950 font-black uppercase text-xs py-3.5 rounded-xl shadow-lg shadow-teal-400/20 transition-all cursor-pointer mt-2"
              >
                {m.submitBtn}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
