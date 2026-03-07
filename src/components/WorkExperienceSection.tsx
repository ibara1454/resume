import Section from './Section';
import Title from './Title';
import VStack from './VStack';
import HStack from './HStack';
import Badge from './Badge';
import List from './List';
import EducationWorkExperienceItem from './EducationWorkExperienceItem';
import {
  isMultiPositionExperience,
  isSinglePositionExperience,
  type Experience,
} from '@data/profile';

interface WorkExperienceSectionProps {
  experiences: Experience[];
  className?: string;
}

export default function WorkExperienceSection({
  experiences,
  className,
}: WorkExperienceSectionProps) {
  return (
    <Section className={className}>
      <Title level="section" text="Work Experience" />
      <VStack gap="1">
        {experiences.map((experience) => (
          <EducationWorkExperienceItem
            key={experience.company}
            title={experience.company}
            subTitle={experience.jobTitle}
            startPeriod={experience.startDate}
            endPeriod={experience.endDate}
            url={experience.website}
          >
            <HStack gap="1" wrap className="my-2">
              {experience.techStack.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </HStack>
            {isSinglePositionExperience(experience) && (
              <List items={experience.activities} />
            )}
            {isMultiPositionExperience(experience) && (
              <VStack gap="1">
                {experience.positions.map((position) => (
                  <VStack key={position.jobTitle}>
                    <Title level="subitem" text={position.jobTitle} />
                    <List items={position.activities} />
                  </VStack>
                ))}
              </VStack>
            )}
          </EducationWorkExperienceItem>
        ))}
      </VStack>
    </Section>
  );
}
