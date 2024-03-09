import Button from '@/components/Button';
import Image from 'next/image';
import Link from 'next/link';

const footerList = [
  {
    amount: 90,
    name: 'Users',
    img: '/hero/user.png',
  },
  {
    amount: 30,
    name: 'Locations',
    img: '/hero/location.png',
  },
  {
    amount: 50,
    name: 'Servers',
    img: '/hero/server.png',
  },
];

const Hero = () => {
  return (
    <section
      id='hero'
      className='max-w-6xl mx-auto px-2 mt-24'
    >
      <div className='flex gap-10 items-center'>
        <div>
          <h1 className='text-5xl font-medium leading-[70px]'>
            Want anything to be easy with{' '}
            <span className='font-semibold'>LaslesVPN.</span>
          </h1>
          <p className='text-secondary leading-[30px] mt-5 mb-12'>
            Provide a network for all your needs with ease and fun using LaslesVPN
            discover interesting features from us.
          </p>
          <Button
            type='link'
            href='#'
            variant='primary'
            className='px-16 py-4 rounded-xl'
          >
            Get Started
          </Button>
        </div>
        <div>
          <Image
            src='/hero/illust-1.svg'
            width={612}
            height={612}
            alt='illustration 1'
            className='min-w-[580px]'
          />
        </div>
      </div>
      <div>
        <ul className='flex justify-between px-24 py-16 rounded-xl shadow-xl mt-24'>
          {footerList.map((list) => (
            <li
              key={list.name}
              className='grid grid-cols-2 grid-rows-2 gap-x-9 even:px-[90px] even:border-x-2 even:border-[#EEEFF2] '
            >
              <Image
                src={list.img}
                width={55}
                height={55}
                alt={list.img}
                className='col-start-1 row-span-2'
              />
              <span className='col-start-2 text-2xl font-bold'>{list.amount}+</span>
              <span className='col-start-2 text-xl text-secondary'>{list.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
