import { SquareMinus, SquarePlus, Trash } from 'lucide-react';
import { FC } from 'react';
import { Button } from '~/src/components/ui/button';

interface ControlsFooterProps {
  priceAmount: number;
  quantity: number;
  handlePlusClick: () => void;
  handleMinusClick: () => void;
  handleRemoveClick: () => void;
}

const ControlsFooter: FC<ControlsFooterProps> = ({
  priceAmount,
  quantity,
  handlePlusClick,
  handleMinusClick,
  handleRemoveClick,
}) => {
  return (
    <div className='w-full'>
      <div className='flex flex-col'>
        <span>Price: {priceAmount.toFixed(2)}$</span>
        <span>Total Price: {(priceAmount * quantity).toFixed(2)}$</span>
      </div>

      <div className='flex justify-center items-center space-x-3 mt-4'>
        <Button size='icon' className='px-7 bg-orange-600 hover:bg-orange-700' onClick={handleMinusClick}>
          <SquareMinus />
        </Button>
        <span>{quantity}</span>
        <Button size='icon' className='px-7 bg-green-800 hover:bg-green-900' onClick={handlePlusClick}>
          <SquarePlus />
        </Button>
      </div>

      <Button className='mt-5 bg-red-700 hover:bg-red-800' onClick={handleRemoveClick}>
        <Trash />
        <span>Remove</span>
      </Button>
    </div>
  );
};

export { ControlsFooter };
