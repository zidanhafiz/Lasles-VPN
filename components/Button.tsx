import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'link';
  href?: Url;
  variant?: 'primary' | 'outline';
  className?: string;
};

const Button = ({ children, type, href, variant, className }: ButtonProps) => {
  const OUTLINE = twMerge(
    'text-primary px-7 py-3 border border-primary rounded-full hover:bg-primary hover:text-white transition',
    className
  );
  const PRIMARY = twMerge(
    'bg-primary text-white px-7 py-3 rounded-full shadow-button hover:shadow-lg transition',
    className
  );

  if (type === 'button') {
    return (
      <button className={variant === 'primary' ? PRIMARY : OUTLINE}>{children}</button>
    );
  }
  return (
    <Link
      href={href as Url}
      className={variant === 'primary' ? PRIMARY : OUTLINE}
    >
      {children}
    </Link>
  );
};

export default Button;
