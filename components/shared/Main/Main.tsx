import React from 'react';
import { cn } from '@/lib/utils';
import { Banner } from './Banner/Banner';

interface Props {
  className?: string;
}

export const Main = ({ className }: Props) => {
  return (
    <div className={cn(className)}>
        <Banner />
    </div>
  );
};