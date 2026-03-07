import clsx from 'clsx';
import Text from './Text';
import Title from './Title';
import HStack from './HStack';

interface EducationWorkExperienceItemProps {
  title: string;
  subTitle?: string;
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
        <Text size="lg" text={`${startPeriod} - ${endPeriod}`} />
      </HStack>
      {subTitle && <Text accent text={subTitle} />}
      {children}
    </article>
  );
}
