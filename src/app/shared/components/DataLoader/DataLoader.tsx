import { LoaderCircle } from 'lucide-react';
import { FC } from 'react';

interface DataLoaderProps {
  wrapperClassNames?: string;
  loaderClassNames?: string;
}

// if you want you can render lottie player here

const DataLoader: FC<DataLoaderProps> = ({ wrapperClassNames, loaderClassNames }) => {
  return (
    <div className={`flex justify-center items-center h-48 my-5 ${wrapperClassNames}`}>
      <LoaderCircle className={`animate-spin size-12 ${loaderClassNames}`} />
    </div>
  );
};

export { DataLoader };
