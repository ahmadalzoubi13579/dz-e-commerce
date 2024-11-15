import Image from 'next/image';
import { FC, useState } from 'react';
import { Skeleton } from '~/src/components/ui/skeleton';

interface ImageLoaderProps {
  src: string;
  alt: string;
  wrapperClassNames?: string;
  imgClassNames?: string;
}

const ImageLoader: FC<ImageLoaderProps> = ({ src, alt, wrapperClassNames, imgClassNames }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative h-48 rounded-lg overflow-hidden ${wrapperClassNames}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        className={`object-cover ${isLoading ? 'invisible' : 'visible'} ${imgClassNames}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          // display specific image for error state using useState()
        }}
      />
      {isLoading && <Skeleton className='w-full h-full' />}
    </div>
  );
};

export { ImageLoader };
