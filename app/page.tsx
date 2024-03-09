import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';
import Locations from './sections/Locations';
import Testimonials from './sections/Testimonials';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Locations />
        <Testimonials />
      </main>
    </>
  );
}
