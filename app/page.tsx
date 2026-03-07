import type { Metadata } from 'next';
import { profile } from '@data/profile';
import PrintableLayout from '@components/PrintableLayout';
import VStack from '@components/VStack';
import ProfileSection from '@components/ProfileSection';
import SkillsSection from '@components/SkillsSection';
import WorkExperienceSection from '@components/WorkExperienceSection';
import EducationSection from '@components/EducationSection';
import CertificationsSection from '@components/CertificationsSection';

const { summary, contact, experience, education, skills, certifications } =
  profile;

const fullName = [summary.name.first, summary.name.middle, summary.name.last]
  .filter(Boolean)
  .join(' ');

export const metadata: Metadata = {
  title: `${fullName} - ${summary.jobTitle}`,
  description: summary.about,
  openGraph: {
    title: `${fullName} - ${summary.jobTitle}`,
    description: summary.about,
    type: 'website',
  },
};

export default function Home() {
  return (
    <PrintableLayout>
      <VStack gap="2" horizontalAlign="stretch">
        <ProfileSection
          firstName={summary.name.first}
          middleName={summary.name.middle}
          lastName={summary.name.last}
          jobTitle={summary.jobTitle}
          languages={summary.languages}
          about={summary.about}
          city={contact.city}
          country={contact.country}
          email={contact.email}
          githubId={contact.githubId}
          linkedInId={contact.linkedInId}
        />
        <SkillsSection skills={skills.map((item) => item.name)} />
        <WorkExperienceSection experiences={experience} />
        <EducationSection education={education} />
        <CertificationsSection certifications={certifications} />
      </VStack>
    </PrintableLayout>
  );
}
