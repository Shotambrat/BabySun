import React from 'react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

interface Props {
  className?: string;
}

export const Navigation = ({ className }: Props) => {
  const t = useTranslations('Headers.Navigation');

  // Access the navigation array directly from your translation file
  const navigationItems = [
    { title: t('course'), href: '/course' },
    { title: t('teachers'), href: '/teachers' },
    { title: t('reviews'), href: '/reviews' },
    { title: t('education'), href: '/education' },
    { title: t('gallery'), href: '/gallery' },
  ];

  return (
    <ul className={cn("h-full flex justify-between items-center gap-4", className)}>
      {navigationItems.map((item, index) => {
        return (
          <li key={index} className='hover:text-neutral-400 text-xl transition-all duration-300'>
            <Link href={item.href} style={{ fontWeight: 600 }}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
