import { FC } from 'react';
import { Category } from '~/src/types/app';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '~/src/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { PATHS } from '~/src/app/shared/constants/paths';

import { ImageLoader } from '~/src/app/shared/components/ImageLoader';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const { id, slug, name, description, image } = category;

  return (
    <Card className='h-full flex flex-col'>
      <CardHeader>
        <CardTitle>
          <h2 className='line-clamp-1'>{name}</h2>
        </CardTitle>
        <CardDescription>
          <p className='line-clamp-1'>{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className='mt-auto'>
        <ImageLoader src={image} alt={`${name} category image`} wrapperClassNames='h-60' />
      </CardContent>
      <CardFooter className='justify-center'>
        <Button asChild>
          <Link href={`${PATHS.CATEGORIES}/${id}?slug=${slug}`}>
            <span>See Products</span>
            <ArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export { CategoryCard };
