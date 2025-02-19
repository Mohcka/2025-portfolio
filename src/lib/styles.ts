import { cn } from './utils';

export const sharedLinkStyles = (className?: string) =>
  cn(
    'inline-block px-4 py-2 rounded-lg font-medium transition-colors',
    'text-white hover:opacity-90',
    className
  );
