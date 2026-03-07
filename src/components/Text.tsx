import clsx from 'clsx';

type TextSize = 'sm' | 'md' | 'lg';
type TextWrap = 'wrap' | 'nowrap' | 'balance';

interface TextProps {
  text: string;
  size?: TextSize;
  accent?: boolean;
  inline?: boolean;
  wrap?: TextWrap;
  className?: string;
}

export default function Text({
  className,
  text,
  size = 'md',
  accent = false,
  inline = false,
  wrap = 'wrap',
}: TextProps) {
  const Element = inline ? 'span' : 'p';
  return (
    <Element
      className={clsx(
        className,
        'font-normal leading-5',
        {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-base': size === 'lg',
        },
        {
          'text-wrap': wrap === 'wrap',
          'text-nowrap': wrap === 'nowrap',
          'text-balance': wrap === 'balance',
        },
        {
          'text-black': accent,
          'text-gray-500': !accent,
        },
        {
          'font-sans tracking-wider': !accent,
          'font-mono': accent,
        },
      )}
    >
      {text}
    </Element>
  );
}
