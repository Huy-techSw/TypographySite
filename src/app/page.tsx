import BalanceFlow from "./component/BalanceFlow";
import ScrollReveal from "./component/ScrollReveal";


export default function Home() {
  return (
    <div className="relative">
      <section className="scroll-section relative overflow-hidden">
        <div className="relative z-10 text-center px-6">
          <ScrollReveal>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
              <span className="block text-gradient">Typography</span>
              <span className="block font-serif italic text-gradient-gold">in Motion</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the fundamental principles of typography through an immersive scroll-driven journey
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="mt-12 text-gray-400 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto mb-2">
                <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse" />
              </div>
              <p className="text-sm">Scroll to explore</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="scroll-section relative overflow-hidden">
        <div className="relative z-10">
          <BalanceFlow />
        </div>
      </section>

      <section className="scroll-section bg-black">
        <div className="text-center px-6">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">Master Typography</h2>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Continue your journey in understanding the art and science of beautiful, functional typography
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 glow">
              Start Creating
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
