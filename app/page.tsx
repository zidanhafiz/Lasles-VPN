import Navbar from '@/components/Navbar';
import Hero from './sections/Hero';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className=''>
        <Hero />
      </main>
    </>
  );
}
