import clsx from 'clsx';

interface IconLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
  'aria-label'?: string;
}

export default function IconLink({
  className,
  href,
  children,
  'aria-label': ariaLabel,
}: IconLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div
        aria-label={ariaLabel}
        className={clsx(
          className,
          'flex items-center',
          'size-8 p-[7px] rounded-md',
          'border-solid border-[1px] border-gray-300',
          'hover:bg-gray-100',
          'text-gray-500 hover:text-gray-700',
          'transition-colors ease-in',
        )}
      >
        {children}
      </div>
    </a>
  );
}
