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
          <HStack
            gap="2"
            rowGap="0"
            wrap
            verticalAlign="center"
            className="my-2"
          >
            <a href={`mailto:${email}`} aria-label="Email">
              <HStack verticalAlign="center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="xs"
                  fixedWidth
                  className="text-gray-500 mr-2"
                />
                <Text text={email} />
              </HStack>
            </a>
            {githubId && (
              <a
                href={`https://github.com/${githubId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <HStack verticalAlign="center">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xs"
                    fixedWidth
                    className="text-gray-500 mr-2"
                  />
                  <Text text={`github.com/${githubId}`} />
                </HStack>
              </a>
            )}
            {linkedInId && (
              <a
                href={`https://www.linkedin.com/in/${linkedInId}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <HStack verticalAlign="center">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    size="xs"
                    fixedWidth
                    className="text-gray-500 mr-2"
                  />
                  <Text text={`linkedin.com/in/${linkedInId}`} />
                </HStack>
              </a>
            )}
            <HStack verticalAlign="center">
              <FontAwesomeIcon
                icon={faEarthAsia}
                size="xs"
                fixedWidth
                className="text-gray-500 mr-2"
              />
              <Text text={`${city}, ${country}`} />
            </HStack>
          </HStack>
        </VStack>
        <Avatar src={avatarImage} alt="Avatar image" />
      </HStack>
    </Section>
  );
}
