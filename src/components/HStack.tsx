import clsx from 'clsx';

type GapLevel = '0' | '1' | '2' | '3' | '4';
type HorizontalAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around';
type VerticalAlign = 'start' | 'center' | 'end' | 'stretch';

interface HStackProps {
  gap?: GapLevel;
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function HStack({
  className,
  gap = '0',
  horizontalAlign = 'start',
  verticalAlign = 'start',
  wrap = false,
  children,
}: HStackProps) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-row',
        {
          'gap-2': gap === '1',
          'gap-4': gap === '2',
          'gap-6': gap === '3',
          'gap-8': gap === '4',
        },
        {
          'justify-start': horizontalAlign === 'start',
          'justify-center': horizontalAlign === 'center',
          'justify-end': horizontalAlign === 'end',
          'justify-between': horizontalAlign === 'space-between',
          'justify-around': horizontalAlign === 'space-around',
        },
        {
          'items-start': verticalAlign === 'start',
          'items-center': verticalAlign === 'center',
          'items-end': verticalAlign === 'end',
          'items-stretch': verticalAlign === 'stretch',
        },
        {
          'flex-wrap': wrap,
          'flex-nowrap': !wrap,
        },
      )}
    >
      {children}
    </div>
  );
}
