import clsx from 'clsx';

type TitleLevel = 'page' | 'section' | 'item' | 'subitem';

interface TitleProps {
  level: TitleLevel;
  text: string;
  className?: string;
}

export default function Title({ className, text, level }: TitleProps) {
  if (level === 'page') {
    return (
      <h1
        className={clsx(className, 'text-3xl font-bold leading-relaxed mb-3')}
      >
        {text}
      </h1>
    );
  }
  if (level === 'section') {
    return (
      <h2 className={clsx(className, 'text-xl font-bold leading-relaxed mb-1')}>
        {text}
      </h2>
    );
  }
  if (level === 'item') {
    return (
      <h3
        className={clsx(className, 'text-base font-semibold leading-relaxed')}
      >
        {text}
      </h3>
    );
  }
  return (
    <h4
      className={clsx(
        className,
        'text-sm font-semibold underline leading-relaxed',
      )}
    >
      {text}
    </h4>
  );
}
