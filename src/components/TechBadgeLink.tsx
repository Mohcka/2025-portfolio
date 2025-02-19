import { Technology } from '@/data/technologies';
import { BadgeLink } from './BadgeLink';

interface TechBadgeLinkProps {
  tech: Technology;
  className?: string;
}

export const TechBadgeLink = ({ tech, className }: TechBadgeLinkProps) => {
  return (
    <BadgeLink url={tech.homePageUrl!} color={tech.color} className={className}>
      {tech.name}
    </BadgeLink>
  );
};
