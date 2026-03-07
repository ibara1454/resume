import clsx from 'clsx';

interface BadgeProps {
  text: string;
  accent?: boolean;
  className?: string;
}

export default function Badge({ className, text, accent = false }: BadgeProps) {
  return (
    <span
      className={clsx(
        className,
        'font-mono text-xs rounded-md p-1 px-2 text-nowrap font-bold',
        {
          'text-white bg-gray-700': accent,
          'text-black bg-gray-200': !accent,
        },
      )}
    >
      {text}
    </span>
  );
}
