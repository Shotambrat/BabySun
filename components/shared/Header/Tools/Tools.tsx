"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { X, Menu } from 'lucide-react'; // for icons
import { Dialog, DialogOverlay, DialogContent, DialogClose } from '@/components/ui';
import { LanguageSwitcher } from './LanguageSwitcher'; // Assuming this already exists
import { useTranslations } from 'next-intl';

interface Props {
  className?: string;
}

export const Tools = ({ className }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Headers.Navigation');
  
  const navigationItems = [
    { title: t('course'), href: '/course' },
    { title: t('teachers'), href: '/teachers' },
    { title: t('reviews'), href: '/reviews' },
    { title: t('education'), href: '/education' },
    { title: t('gallery'), href: '/gallery' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={cn(className)}>
      {/* Записаться button */}
      <Button className="rounded-full lgx:px-12 font-semibold">
        Записаться
      </Button>
      
      {/* Burger Menu Icon */}
      <Button variant="ghost" className="ml-4" onClick={toggleMenu}>
        <Menu size={24} />
      </Button>

      {/* Sidebar Menu */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 bg-black bg-opacity-30" />
        <DialogContent className="fixed top-0 left-0 h-full w-[250px] bg-white p-6 shadow-lg">
          {/* Close button */}
          <DialogClose asChild>
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              <X size={24} />
            </button>
          </DialogClose>

          {/* Navigation */}
          <nav className="flex flex-col space-y-4 mt-10">
            {navigationItems.map((item, index) => (
              <a key={index} href={item.href} className="hover:text-neutral-400 text-lg font-semibold transition-all duration-300">
                {item.title}
              </a>
            ))}
          </nav>

          {/* LanguageSwitcher inside menu */}
          <div className="mt-10">
            <LanguageSwitcher />
          </div>
        </DialogContent>
      </Dialog>

      {/* LanguageSwitcher inside Tools */}
      <div className="ml-4">
        <LanguageSwitcher />
      </div>
    </div>
  );
};
