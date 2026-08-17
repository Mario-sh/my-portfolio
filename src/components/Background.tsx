const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 z-0 bg-background pointer-events-none overflow-hidden transition-colors duration-500">
      {/* Technical Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: '44px 44px',
          color: 'var(--foreground)',
        }}
      />

      {/* Central Atmosphere Glow */}
      <div className="absolute top-1/2 left-1/2 w-[55%] h-[55%] bg-blue-500/[0.06] dark:bg-blue-600/[0.15] blur-[130px] rounded-full animate-pulse-slow" />

      {/* Radial Vignette — teintes accordées à --background (voir index.css) pour chaque thème */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#f2f4f7]/60 to-[#f2f4f7] dark:via-black/40 dark:to-black opacity-90 dark:opacity-90" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GlobalBackground;
