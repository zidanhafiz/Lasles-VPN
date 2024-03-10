import TestimoniCard from '@/components/TestimoniCard';

const testimoniList = [
  {
    name: 'Viezh Robert',
    address: 'Warsaw, Poland',
    img: '/testimonials/viezh.png',
    testimoni: `“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.`,
  },
  {
    name: 'Yessica Christy',
    address: 'Shanxi, China',
    img: '/testimonials/yessica.png',
    testimoni: `“I like it because I like to travel far and still can connect with high speed.”.`,
  },
  {
    name: 'Kim Young Jou',
    address: 'Seoul, South Korea',
    img: '/testimonials/kim.png',
    testimoni: `“This is very unusual for my business that currently requires a virtual private network that has high security.”.`,
  },
];

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className='mt-14 mb-44 max-w-6xl mx-auto text-center'
    >
      <h2 className='font-medium text-3xl leading-[50px] max-w-[320px] mx-auto'>
        Trusted by Thousands of Happy Customer
      </h2>
      <p className='mt-5 text-secondary max-w-[555px] mx-auto'>
        These are the stories of our customers who have joined us with great pleasure when
        using this crazy feature.
      </p>
      <div className='flex gap-12 mt-14'>
        {testimoniList.map((list) => (
          <TestimoniCard
            key={list.name}
            name={list.name}
            address={list.address}
            img={list.img}
            testimoni={list.testimoni}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
