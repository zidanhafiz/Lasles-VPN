import FooterCard from '@/components/FooterCard';
import Image from 'next/image';
import Link from 'next/link';

type DataList = {
  name: string;
  link: string;
};

const socmedList = [
  {
    name: 'facebook',
    img: '/footer/facebook.png',
    link: '#',
  },
  {
    name: 'twitter',
    img: '/footer/twitter.png',
    link: '#',
  },
  {
    name: 'instagram',
    img: '/footer/instagram.png',
    link: '#',
  },
];

const productList: DataList[] = [
  {
    name: 'Download',
    link: '#',
  },
  {
    name: 'Pricing',
    link: '#',
  },
  {
    name: 'Locations',
    link: '#',
  },
  {
    name: 'Server',
    link: '#',
  },
  {
    name: 'Countries',
    link: '#',
  },
  {
    name: 'Blog',
    link: '#',
  },
];

const engageList: DataList[] = [
  {
    name: 'LaslesVPN ?',
    link: '#',
  },
  {
    name: 'FAQ',
    link: '#',
  },
  {
    name: 'Tutorials',
    link: '#',
  },
  {
    name: 'About Us',
    link: '#',
  },
  {
    name: 'Privacy Policy',
    link: '#',
  },
  {
    name: 'Terms of Service',
    link: '#',
  },
];

const earnMoneyList: DataList[] = [
  {
    name: 'Affiliate',
    link: '#',
  },
  {
    name: 'Become Partner',
    link: '#',
  },
];

const Footer = () => {
  return (
    <footer className='bg-[#f8f8f8] pt-44 pb-24 relative'>
      <div className='max-w-6xl mx-auto flex gap-56'>
        <FooterCard className='absolute -top-28 z-10 bg-white' />
        <div>
          <Link href='/'>
            <Image
              src='/hero/logo.jpg'
              width={149}
              height={149}
              alt='Lasles VPN'
            />
          </Link>
          <p className='text-secondary max-w-xs mt-5 leading-7'>
            <span className='font-medium'>LaslesVPN</span> is a private virtual network
            that has unique features and has high security.
          </p>
          <ul className='flex gap-5 my-7'>
            {socmedList.map((list, i) => (
              <li key={i}>
                <Link
                  href={list.link}
                  title={list.name}
                >
                  <Image
                    src={list.img}
                    width={36}
                    height={36}
                    alt={list.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <span className='text-[#AFB5C0]'>©2020LaslesVPN</span>
        </div>
        <div className='flex-1 flex justify-between'>
          <FooterList
            name='Product'
            dataList={productList}
          />
          <FooterList
            name='Engage'
            dataList={engageList}
          />
          <FooterList
            name='Earn Money'
            dataList={earnMoneyList}
          />
        </div>
      </div>
    </footer>
  );
};

const FooterList = ({ dataList, name }: { dataList: DataList[]; name: string }) => {
  return (
    <div>
      <h4 className='font-medium text-[18px] mb-5'>{name}</h4>
      <ul>
        {dataList.map((list) => (
          <li
            key={list.name}
            className='mb-3 text-secondary'
          >
            <Link
              href={list.link}
              className='hover:underline'
            >
              {list.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
