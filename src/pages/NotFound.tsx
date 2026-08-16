const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 text-center relative z-10">
      <span className="text-sm font-black text-blue-500 uppercase tracking-[0.3em]">404</span>
      <h1 className="text-4xl sm:text-6xl font-black text-foreground tracking-tighter">
        Page introuvable
      </h1>
      <p className="text-muted max-w-md text-lg">
        Cette page n'existe pas ou a été déplacée.
      </p>
      <a
        href="/"
        className="mt-2 px-8 py-3.5 rounded-full bg-foreground text-background font-black text-base hover:opacity-90 active:scale-95 transition-all duration-300"
      >
        Retour à l'accueil
      </a>
    </div>
  );
};

export default NotFound;
