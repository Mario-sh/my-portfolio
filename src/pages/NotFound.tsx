import { useLanguage } from "../i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 text-center relative z-10">
      <span className="text-sm font-black text-blue-500 uppercase tracking-[0.3em]">404</span>
      <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter">
        {t.notFound.title}
      </h1>
      <p className="text-muted max-w-md text-lg">
        {t.notFound.body}
      </p>
      <a
        href="/"
        className="mt-2 px-8 py-3.5 rounded-full bg-foreground text-background font-black text-base hover:opacity-90 active:scale-95 transition-all duration-300"
      >
        {t.notFound.cta}
      </a>
    </div>
  );
};

export default NotFound;
