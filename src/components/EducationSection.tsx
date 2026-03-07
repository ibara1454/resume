import Section from './Section';
import Title from './Title';
import Text from './Text';
import VStack from './VStack';
import EducationWorkExperienceItem from './EducationWorkExperienceItem';
import type { Education } from '@data/profile';

interface EducationSectionProps {
  education: Education[];
  className?: string;
}

export default function EducationSection({
  education,
  className,
}: EducationSectionProps) {
  return (
    <Section className={className} noBreak>
      <Title level="section" text="Education" />
      <VStack gap="1">
        {education.map((item) => (
          <EducationWorkExperienceItem
            key={item.name}
            title={item.name}
            startPeriod={item.startDate}
            endPeriod={item.endDate}
            url={item.website}
          >
            <Text text={item.degree} />
          </EducationWorkExperienceItem>
        ))}
      </VStack>
    </Section>
  );
}
