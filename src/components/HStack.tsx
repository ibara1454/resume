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
  rowGap?: GapLevel;
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function HStack({
  className,
  gap = '0',
  rowGap,
  horizontalAlign = 'start',
  verticalAlign = 'start',
  wrap = false,
  children,
}: HStackProps) {
  const effectiveRowGap = rowGap ?? gap;
  return (
    <div
      className={clsx(
        className,
        'flex flex-row',
        {
          'gap-x-2': gap === '1',
          'gap-x-4': gap === '2',
          'gap-x-6': gap === '3',
          'gap-x-8': gap === '4',
        },
        {
          'gap-y-2': effectiveRowGap === '1',
          'gap-y-4': effectiveRowGap === '2',
          'gap-y-6': effectiveRowGap === '3',
          'gap-y-8': effectiveRowGap === '4',
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
