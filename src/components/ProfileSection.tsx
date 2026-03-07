'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import avatarImage from '@assets/images/avatar.jpg';
import Section from './Section';
import Text from './Text';
import Title from './Title';
import HStack from './HStack';
import VStack from './VStack';
import IconLink from './IconLink';
import Avatar from './Avatar';
import Badge from './Badge';

interface ProfileSectionProps {
  firstName: string;
  middleName?: string;
  lastName: string;
  jobTitle: string;
  languages: string[];
  about: string;
  city: string;
  country: string;
  email: string;
  githubId?: string;
  linkedInId?: string;
  className?: string;
}

export default function ProfileSection({
  firstName,
  middleName,
  lastName,
  jobTitle,
  languages,
  about,
  city,
  country,
  email,
  githubId,
  linkedInId,
  className,
}: ProfileSectionProps) {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');
  return (
    <Section noBreak className={className}>
      <HStack gap="2" verticalAlign="center">
        <VStack>
          <Title level="page" text={fullName} />
          <Title level="item" text={jobTitle} />
          <HStack gap="1" className="my-2">
            {languages.map((item) => (
              <Badge key={item} text={item} />
            ))}
          </HStack>
          <Text text={about} />
          <HStack gap="1" className="my-2">
            <IconLink href={`mailto:${email}`} aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
            </IconLink>
            {githubId && (
              <IconLink
                href={`https://github.com/${githubId}`}
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </IconLink>
            )}
            {linkedInId && (
              <IconLink
                href={`https://www.linkedin.com/in/${linkedInId}`}
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </IconLink>
            )}
          </HStack>
          <HStack verticalAlign="center">
            <FontAwesomeIcon
              icon={faEarthAsia}
              size="xs"
              className="text-gray-500 mr-2"
            />
            <Text text={`${city}, ${country}`} />
          </HStack>
        </VStack>
        <Avatar src={avatarImage} alt="Avatar image" />
      </HStack>
    </Section>
  );
}
