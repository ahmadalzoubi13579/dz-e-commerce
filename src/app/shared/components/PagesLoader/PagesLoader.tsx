import { LoaderPinwheel } from 'lucide-react';
import { FC } from 'react';

interface PagesLoaderProps {
  wrapperClassNames?: string;
  loaderClassNames?: string;
}

// if you want you can render lottie player here

const PagesLoader: FC<PagesLoaderProps> = ({ wrapperClassNames, loaderClassNames }) => {
  return (
    <div className={`flex justify-center items-center h-80 my-5 ${wrapperClassNames}`}>
      <LoaderPinwheel className={`animate-spin size-60 ${loaderClassNames}`} />
    </div>
  );
};

export { PagesLoader };
