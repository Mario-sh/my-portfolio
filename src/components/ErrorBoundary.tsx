import { Component, ErrorInfo, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

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
      return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 px-4 text-center bg-[#050505] text-white">
          <span className="text-sm font-black text-red-500 uppercase tracking-[0.3em]">Erreur</span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tighter">
            Un problème est survenu
          </h1>
          <p className="text-zinc-500 max-w-md text-lg">
            Quelque chose s'est mal passé pendant l'affichage de cette page.
          </p>
          <button
            onClick={() => window.location.assign("/")}
            className="mt-2 px-8 py-3.5 rounded-full bg-white text-black font-black text-base hover:bg-zinc-100 active:scale-95 transition-all duration-300"
          >
            Retour à l'accueil
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
