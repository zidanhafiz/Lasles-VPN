import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Pricing from './sections/Pricing';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=''>
        <Hero />
        <Features />
        <Pricing />
      </main>
    </>
  );
}
