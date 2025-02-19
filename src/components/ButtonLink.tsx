import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonLinkProps {
  children: React.ReactNode;
  url: string;
  color?: string;
  className?: string;
}

export const ButtonLink = ({ children, url, color = '#000000', className }: ButtonLinkProps) => {
  const isExternal = /^https?:\/\//.test(url);
  const isEmpty = !url;
  const style = { borderColor: color };
  const linkStyles = cn(
    'inline-block px-4 rounded-full shadow-md dark:shadow-gray-700 hover:bg-current/10 transition-colors border-4 hover:bg-current/10 transition-colors',
    className
  );

  if (isEmpty) {
    return (
      <a className={linkStyles} style={style}>
        {children}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a
        href={url}
        className={linkStyles}
        style={style}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={url} className={linkStyles} style={style}>
      {children}
    </Link>
  );
};
