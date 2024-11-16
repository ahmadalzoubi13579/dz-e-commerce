import { Button } from '~/src/components/ui/button';
import { ArrowRight, CirclePlus } from 'lucide-react';
import Link from 'next/link';
import { PATHS } from '~/src/app/shared/constants/paths';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { FC } from 'react';

interface InfoFooterProps {
  id: string;
  priceAmount: number;
  handleAddClick: () => void;
}

const InfoFooter: FC<InfoFooterProps> = ({ id, priceAmount, handleAddClick }) => {
  return (
    <div className='w-full flex flex-col sm:flex-row justify-between items-center'>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className='flex items-center space-x-1 bg-gray-950 hover:bg-gray-700 text-white px-2 py-1 rounded-md'
            onClick={handleAddClick}
          >
            <CirclePlus />
            <span>{priceAmount.toFixed(2)}$</span>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to Cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Button asChild variant='link'>
        <Link href={`${PATHS.PRODUCTS}/${id}`}>
          <span>More</span>
          <ArrowRight />
        </Link>
      </Button>
    </div>
  );
};

export { InfoFooter };
