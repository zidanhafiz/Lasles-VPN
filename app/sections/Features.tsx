import Image from 'next/image';

const featureList = [
  'Powerfull online protection.',
  'Internet without borders.',
  'Supercharged VPN',
  'No specific time limits.',
];

const Features = () => {
  return (
    <section
      id='features'
      className='flex gap-40 max-w-6xl mx-auto items-end mt-24 mb-[211px]'
    >
      <Image
        src='/features/illust-2.png'
        width={508}
        height={508}
        alt='features'
      />
      <div>
        <h2 className='font-medium text-3xl leading-[50px]'>
          We Provide Many Features You Can Use
        </h2>
        <p className='mt-5 text-secondary leading-7'>
          You can explore the features that we provide with fun and have their
          own functions each feature.
        </p>
        <ul className='mt-5'>
          {featureList.map((list, i) => (
            <li key={i} className='flex gap-2 text-secondary mb-4'>
              <Image
                src='/features/checklist.png'
                width={24}
                height={23}
                alt='check'
              />
              {list}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;
