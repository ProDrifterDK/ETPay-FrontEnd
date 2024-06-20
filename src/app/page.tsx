import Header from './components/Header';
import MainSection from './components/MainSection';
import FeaturesSection from './components/FeaturesSection';
import IntegrationsSection from './components/IntegrationsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <AnimatedSection>
          <div className="absolute top-[-250px] left-[1050px] w-[950px] h-[950px] bg-cyan-100 rounded-full opacity-100"></div>
          <Header />
        </AnimatedSection>
        <main className="bg-white">
          <AnimatedSection>
            <MainSection />
          </AnimatedSection>
          <FeaturesSection />
          <AnimatedSection>
            <IntegrationsSection />
          </AnimatedSection>
          <AnimatedSection>
            <CTASection />
            <Footer />
          </AnimatedSection>
        </main>
      </div>
    </>
  );
}