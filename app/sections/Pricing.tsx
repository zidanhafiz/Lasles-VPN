import PricingCard from '@/components/PricingCard';

const pricingList = [
  {
    name: 'Free Plan',
    list: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'No Traffic Logs',
      'Works on All Devices',
    ],
    price: 'Free',
  },
  {
    name: 'Standard Plan',
    list: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anywhere',
    ],
    price: '$9',
  },
  {
    name: 'Premium Plan',
    list: [
      'Unlimited Bandwitch',
      'Encrypted Connection',
      'Yes Traffic Logs',
      'Works on All Devices',
      'Connect Anywhere',
      'Get New Features',
    ],
    price: '$12',
  },
];

const Pricing = () => {
  return (
    <section
      id='pricing'
      className='max-w-6xl mx-auto mb-36'
    >
      <h2 className='font-medium text-3xl text-center'>Choose Your Plan</h2>
      <p className='text-secondary text-center leading-7 mt-5 mb-14'>
        Let&apos;s choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className='flex justify-around'>
        {pricingList.map((list) => (
          <PricingCard
            key={list.name}
            name={list.name}
            list={list.list}
            price={list.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
