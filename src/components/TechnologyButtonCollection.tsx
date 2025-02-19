import { Technology } from '@/data/technologies';
import { BadgeLink } from './BadgeLink';

interface TechnologyButtonCollectionProps {
  technologies: Technology[];
}

const TechnologyButtonCollection = ({
  technologies,
}: TechnologyButtonCollectionProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <BadgeLink
        key={tech.name}
        url={tech.homePageUrl || ''}
        color={tech.color}
          className={`hover:bg-opacity-80`}
        >
          {tech.name}
        </BadgeLink>
      ))}
    </div>
  );
};

export default TechnologyButtonCollection;
