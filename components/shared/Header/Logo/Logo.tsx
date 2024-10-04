import React from 'react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Props {
  className?: string;
}

export const Logo = ({ className }: Props) => {
  return (
    <div className={cn("h-full w-auto",className)}>
      <Image
       src='/svg/logo/babysun-logo.svg'
       width={1000}
       height={1000}
       alt='Baby Sun Logo'
       className='h-full w-auto'
      />
    </div>
  );
};