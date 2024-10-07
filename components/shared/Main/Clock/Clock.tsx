import React from 'react';
import { cn } from '@lib/utils';
import { Request } from '../../Request/Request';

interface Props {
  className?: string;
}

export const Clock = ({ className }: Props) => {
  return (
    <div className={cn("py-24 bg-[#009FE3] text-white flex flex-col gap-12", className)}>
        <div className='flex flex-col gap-8'>
            <p className='text-xl font-medium'>осталось мест: 25</p>
            <h4 className='text-4xl font-bold'>Успейте присоединиться</h4>
            <Request className='bg-white text-[#009FE3]' />
        </div>
        <div>
            <hr/>
            <div>

            </div>
        </div>
    </div>
  );
};