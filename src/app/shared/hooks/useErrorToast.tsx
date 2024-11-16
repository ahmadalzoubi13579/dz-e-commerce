import { useEffect } from 'react';
import { useToast } from '~/src/hooks/use-toast';

const useErrorToast = (
  isError: boolean,
  errorMessage: string = 'Oops! Something went wrong while fetching the data. Please try again later.',
) => {
  const { toast } = useToast();

  useEffect(() => {
    if (isError) {
      toast({
        variant: 'destructive',
        title: errorMessage,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);
};

export { useErrorToast };
