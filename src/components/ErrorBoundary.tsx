import { Component, ErrorInfo, ReactNode } from "react";
import { useLanguage } from "../i18n/LanguageContext";

type Props = { children: ReactNode };
type State = { hasError: boolean };

// Composant fonctionnel séparé pour pouvoir utiliser useLanguage() :
// une classe (nécessaire pour getDerivedStateFromError) ne peut pas appeler de hooks.
const ErrorFallback = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 text-center bg-background text-foreground">
      <span className="text-sm font-black text-red-500 uppercase tracking-[0.3em]">Error</span>
      <h1 className="text-4xl sm:text-6xl font-black tracking-tighter">
        {t.errorBoundary.title}
      </h1>
      <p className="text-muted max-w-md text-lg">
        {t.errorBoundary.body}
      </p>
      <button
        onClick={() => window.location.assign("/")}
        className="mt-2 px-8 py-3.5 rounded-full bg-foreground text-background font-black text-base hover:opacity-90 active:scale-95 transition-all duration-300"
      >
        {t.errorBoundary.cta}
      </button>
    </div>
  );
};

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Unhandled UI error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
