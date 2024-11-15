import { FC } from 'react';

interface EmptyStateProps {
  title?: string;
  wrapperClassNames?: string;
  titleClassNames?: string;
}

// if you want you can render lottie player here

const EmptyState: FC<EmptyStateProps> = ({ title = 'No Data!', wrapperClassNames, titleClassNames }) => {
  return (
    <div className={`my-5 ${wrapperClassNames}`}>
      <h1 className={`text-5xl ${titleClassNames}`}>{title}</h1>
    </div>
  );
};

export { EmptyState };
