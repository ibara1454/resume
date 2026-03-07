'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import Text from './Text';
import Title from './Title';

interface CertificateItemProps {
  name: string;
  description: string;
  url: string;
  className?: string;
}

export default function CertificateItem({
  className,
  name,
  description,
  url,
}: CertificateItemProps) {
  return (
    <a
      className="group text-black hover:text-gray-500 transition-colors ease-in rounded-lg hover:bg-gray-100"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <article
        className={clsx(
          className,
          'relative h-full border-solid border-[1px] rounded-lg p-2 border-gray-300',
        )}
      >
        <FontAwesomeIcon
          className="size-3 absolute top-2 right-2"
          icon={faArrowUpRightFromSquare}
        />
        <Title level="item" text={name} />
        <Text size="sm" text={description} />
      </article>
    </a>
  );
}
