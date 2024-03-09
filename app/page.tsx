import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=''>
        <Hero />
        <Features />
      </main>
    </>
  );
}
