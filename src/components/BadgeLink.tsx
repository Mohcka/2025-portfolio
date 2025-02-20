// import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BadgeLinkProps {
  children: React.ReactNode;
  url: string;
  color?: string;
  className?: string;
}

export const BadgeLink = ({ children, url, color = '#000000' }: BadgeLinkProps) => {
  const isExternal = /^https?:\/\//.test(url);
  const isEmpty = !url;
  const style: React.CSSProperties = { borderColor: color };
  const linkStyles = 'inline-block px-4 py-2 mx-1 my-1 shadow-md dark:shadow-gray-700 text-sm rounded-full border-2 no-underline hover:bg-current/10 transition-colors';
;

  if (isEmpty) {
    return (
      <button className={linkStyles} style={style}>
        {children}
      </button>
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
