import { twMerge } from 'tailwind-merge';
import Button from './Button';

const FooterCard = ({ className }: { className: string }) => {
  const cn = twMerge(
    'max-w-6xl w-full py-14 px-16 grid grid-cols-2 shadow-xl items-center rounded-xl',
    className
  );

  return (
    <div className={cn}>
      <div className='justify-self-start max-w-[410px]'>
        <h3 className='font-medium text-4xl leading-10'>
          Subscribe Now for Get Special Features!
        </h3>
        <p className='text-secondary mt-5'>
          Let&apos;s subscribe with us and find the fun.
        </p>
      </div>
      <Button
        type='link'
        href='#'
        variant='primary'
        className='justify-self-end py-4 px-16 rounded-xl'
      >
        Subscribe Now
      </Button>
    </div>
  );
};

export default FooterCard;
