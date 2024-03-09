import Image from 'next/image';
import Link from 'next/link';
import Button from './Button';

const navList = [
  {
    name: 'About',
    link: '#',
  },
  {
    name: 'Features',
    link: '#',
  },
  {
    name: 'Pricing',
    link: '#',
  },
  {
    name: 'Testimonials',
    link: '#',
  },
  {
    name: 'Help',
    link: '#',
  },
];

const Navbar = () => {
  return (
    <nav className='grid grid-cols-[233px,1fr,233px] items-center max-w-6xl mx-auto py-11 px-2'>
      <div className='justify-self-start'>
        <Link href='/'>
          <Image
            src='/hero/logo.jpg'
            width={150}
            height={150}
            alt='lasles vpn'
          />
        </Link>
      </div>
      <div>
        <ul className='flex gap-10 justify-center text-secondary'>
          {navList.map((list) => (
            <li key={list.name}>
              <Link
                href={list.link}
                className='hover:text-black border-b-2 border-transparent hover:border-primary py-2 transition'
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex gap-8 items-center justify-end'>
        <Link
          href='#'
          className='font-semibold hover:underline'
        >
          Sign In
        </Link>
        <Button
          type='link'
          href='#'
          variant='outline'
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
