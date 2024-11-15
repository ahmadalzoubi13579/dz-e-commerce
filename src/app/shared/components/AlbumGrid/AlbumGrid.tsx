import { FC } from 'react';

import { ImageLoader } from '../ImageLoader';

interface AlbumGridProps {
  images: string[];
}

const AlbumGrid: FC<AlbumGridProps> = ({ images }) => {
  return (
    <div className='flex flex-wrap my-3'>
      {images.map((image, index) => (
        <div key={index} className='basis-full md:basis-6/12 xl:basis-4/12 p-1'>
          <ImageLoader src={image} alt={`album image ${index + 1}`} wrapperClassNames='h-80' />
        </div>
      ))}
    </div>
  );
};

export { AlbumGrid };
