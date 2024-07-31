import { cva } from 'class-variance-authority';

export const variantClass = cva(
  'transition-all flex items-center justify-center gap-2 px-4 py-2 text-sm h-11',
  {
    variants: {
      variant: {
        primary: 'bg-primary-100 hover:bg-primary-200 text-white rounded-lg',
        outline: 'bg-white hover:bg-primary-200 text-primary-100 hover:text-white border border-primary-100 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
