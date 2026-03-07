import Section from './Section';
import Title from './Title';
import CertificateItem from './CertificateItem';
import type { Certification } from '@data/profile';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <Section noBreak>
      <Title level="section" text="Certifications" />
      <div className="grid grid-cols-4 gap-4">
        {certifications.map((item) => (
          <CertificateItem
            key={item.title}
            name={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </Section>
  );
}
