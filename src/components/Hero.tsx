import { useLanguageStore } from '@/store/useLanguageStore';

export default function Hero() {
  const t = useLanguageStore((state) => state.t);

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold mb-3 text-gray-800">
        {t.hero.title}
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {t.hero.subtitle}
      </p>
    </div>
  );
}

