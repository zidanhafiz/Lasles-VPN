import Image from 'next/image';

const Locations = () => {
  return (
    <section
      id='locations'
      className='max-w-6xl mx-auto text-center'
    >
      <h2 className='font-medium text-3xl leading-[50px] max-w-[320px] mx-auto'>
        Huge Global Network of Fast VPN
      </h2>
      <p className='mt-5 text-secondary max-w-[555px] mx-auto'>
        See <span className='font-medium'>LaslesVPN</span> everywhere to make it easier
        for you when you move locations.
      </p>
      <div className='flex flex-col items-center gap-9 mt-32'>
        <Image
          src='/locations/global.png'
          width={800}
          height={800}
          alt='global'
          className='w-[1060px]'
        />
        <Image
          src='/locations/sponsored.png'
          width={800}
          height={800}
          alt='global'
          className='w-[1135px]'
        />
      </div>
    </section>
  );
};

export default Locations;
