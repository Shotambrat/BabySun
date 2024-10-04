import React from 'react';
import { cn } from '@/lib/utils';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';
import { Tools } from './Tools/Tools';

interface Props {
  className?: string;
}

export const Header = ({ className }: Props) => {
  return (
    <div className={cn("w-full px-4",className)}>
      <div className='w-full max-w-[1500px] flex justify-between items-center h-[60px] mdx:h-[70px] py-2 mx-auto'>
        <Logo />
        <Navigation className='max-lgx:hidden w-full max-w-[700px]' />
        <Tools />
      </div>
    </div>
  );
};