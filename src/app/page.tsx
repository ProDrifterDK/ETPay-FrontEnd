import Header from './components/Header';
import MainSection from './components/MainSection';
import FeaturesSection from './components/FeaturesSection';
import IntegrationsSection from './components/IntegrationsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import AnimatedSection from './components/utils/AnimatedSection';

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <AnimatedSection>
          <div
            className="absolute top-[13.5%] left-[20%] w-[400px] h-[400px] bg-cyan-100 rounded-full opacity-100
                          xl:top-[-250px] xl:left-[1050px] xl:w-[950px] xl:h-[950px]
                          lg:top-[-200px] lg:left-[800px] lg:w-[750px] lg:h-[750px] 
                          md:top-[12%] md:left-[20%] md:w-[700px] md:h-[700px] 
                          sm:top-[-100px] sm:left-[400px] sm:w-[350px] sm:h-[350px]"
          >
          </div>
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