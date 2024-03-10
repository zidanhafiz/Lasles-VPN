import Image from 'next/image';

type TestimoniCardProps = {
  name: string;
  address: string;
  img: string;
  testimoni: string;
};

const TestimoniCard = ({ name, address, img, testimoni }: TestimoniCardProps) => {
  return (
    <div className='w-[400px] p-8 border-2 rounded-xl shadow-md hover:border-primary hover:shadow-lg transition'>
      <div className='grid grid-cols-[auto,1fr,auto] items-center mb-2'>
        <Image
          src={img}
          width={50}
          height={50}
          alt='stars'
        />
        <div className='text-start ml-5'>
          <h4 className='font-medium text-[18px] leading-7'>{name}</h4>
          <p className='text-secondary text-[14px]'>{address}</p>
        </div>
        <div className='flex items-center gap-2'>
          <span>4.5</span>
          <Image
            src='/testimonials/stars.png'
            width={16}
            height={16}
            alt='stars'
          />
        </div>
      </div>
      <article>
        <p className='text-start'>{testimoni}</p>
      </article>
    </div>
  );
};

export default TestimoniCard;
