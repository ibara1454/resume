import clsx from 'clsx';
import Text from './Text';
import Title from './Title';
import HStack from './HStack';

interface EducationWorkExperienceItemProps {
  title: string;
  subTitle: string;
  location: string;
  startPeriod: string;
  endPeriod: string;
  url: string;
  className?: string;
  children?: React.ReactNode;
}

export default function EducationWorkExperienceItem({
  className,
  title,
  subTitle,
  location,
  startPeriod,
  endPeriod,
  url,
  children,
}: EducationWorkExperienceItemProps) {
  return (
    <article className={clsx(className, 'w-full')}>
      <HStack
        className="w-full mb-1"
        horizontalAlign="space-between"
        verticalAlign="end"
      >
        <a
          className="hover:underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Title level="item" text={title} />
        </a>
        <Text accent text={`${startPeriod} - ${endPeriod}`} />
      </HStack>
      <HStack
        className="w-full"
        horizontalAlign="space-between"
        verticalAlign="end"
      >
        {subTitle ? <Text accent text={subTitle} /> : <span />}
        {location && <Text accent text={location} />}
      </HStack>
      {children}
    </article>
  );
}
