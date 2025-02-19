import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return <div className={cn('h-[1px] border-t border-gray-300 dark:border-gray-600', className)} />;
};
