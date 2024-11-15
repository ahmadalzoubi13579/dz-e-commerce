import { FC } from 'react';
import { Category } from '~/src/types/app';
import { CategoryCard } from '../CategoryCard';

interface CategoriesGridProps {
  categories: Category[];
}

const CategoriesGrid: FC<CategoriesGridProps> = ({ categories }) => {
  return (
    <div className='flex flex-wrap my-3'>
      {categories.map(category => (
        <div key={category.id} className='basis-full md:basis-6/12 lg:basis-4/12 xl:basis-3/12 p-4'>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
};

export { CategoriesGrid };
