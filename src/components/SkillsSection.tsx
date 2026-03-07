import Section from './Section';
import Title from './Title';
import HStack from './HStack';
import Badge from './Badge';

interface SkillsSectionProps {
  skills: string[];
  className?: string;
}

export default function SkillsSection({
  skills,
  className,
}: SkillsSectionProps) {
  return (
    <Section className={className} noBreak>
      <Title level="section" text="Skills" />
      <HStack gap="1" wrap>
        {skills.map((item) => (
          <Badge key={item} text={item} accent />
        ))}
      </HStack>
    </Section>
  );
}
