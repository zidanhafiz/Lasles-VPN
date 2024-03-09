import Image from 'next/image';
import Button from './Button';

type PricingCardProps = {
  name: string;
  price: string | number;
  list: string[];
};

const PricingCard = ({ name, price, list }: PricingCardProps) => {
  return (
    <div className='pt-20 pb-12 flex flex-col items-center w-[330px] h-[760px] border-2 rounded-xl hover:border-primary transition hover:shadow-lg'>
      <Image
        src='/pricing/box.png'
        width={145}
        height={145}
        alt='box'
      />
      <h3 className='font-medium text-[18px] my-7'>{name}</h3>
      <ul className='flex-1'>
        {list.map((li, i) => (
          <li
            key={i}
            className='flex items-center gap-5 mb-3 text-secondary'
          >
            <Image
              src='/pricing/checklist.png'
              width={24}
              height={24}
              alt='checklist'
            />
            {li}
          </li>
        ))}
      </ul>
      <p className='font-medium text-2xl mb-5'>
        {price}
        {price !== 'Free' && <span className='text-secondary font-normal'>/mo</span>}
      </p>
      <Button
        type='link'
        href='#'
        variant='outline'
        className='px-16 font-medium border-2'
      >
        Select
      </Button>
    </div>
  );
};

export default PricingCard;
