import React from 'react';
import { cn } from '@/lib/utils';
import { Banner } from './Banner/Banner';
import { About } from './About/About';
import { Edu } from './Edu/Edu';
import { Plan } from './Plan/Plan';
import { Perhun } from './Perhun/Perhun';
import { Reviews } from './Reviews/Reviews';
import { Benefit } from './Benefit/Benefit';

interface Props {
  className?: string;
}

export const Main = ({ className }: Props) => {
  return (
    <main className={cn(className)}>
        <Banner />
        <About />
        <Edu/>
        <Plan />
        <Perhun />
        <Reviews />
        <Benefit />
    </main>
  );
};