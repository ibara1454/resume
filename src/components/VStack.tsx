import clsx from 'clsx';

type GapLevel = '0' | '1' | '2' | '3' | '4';
type VerticalAlign =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around';
type HorizontalAlign = 'start' | 'center' | 'end' | 'stretch';

interface VStackProps {
  gap?: GapLevel;
  columnGap?: GapLevel;
  verticalAlign?: VerticalAlign;
  horizontalAlign?: HorizontalAlign;
  wrap?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function VStack({
  className,
  gap = '0',
  columnGap,
  verticalAlign = 'start',
  horizontalAlign = 'start',
  wrap = false,
  children,
}: VStackProps) {
  const effectiveColumnGap = columnGap ?? gap;
  return (
    <div
      className={clsx(
        className,
        'flex flex-col',
        {
          'gap-y-2': gap === '1',
          'gap-y-4': gap === '2',
          'gap-y-6': gap === '3',
          'gap-y-8': gap === '4',
        },
        {
          'gap-x-2': effectiveColumnGap === '1',
          'gap-x-4': effectiveColumnGap === '2',
          'gap-x-6': effectiveColumnGap === '3',
          'gap-x-8': effectiveColumnGap === '4',
        },
        {
          'justify-start': verticalAlign === 'start',
          'justify-center': verticalAlign === 'center',
          'justify-end': verticalAlign === 'end',
          'justify-between': verticalAlign === 'space-between',
          'justify-around': verticalAlign === 'space-around',
        },
        {
          'items-start': horizontalAlign === 'start',
          'items-center': horizontalAlign === 'center',
          'items-end': horizontalAlign === 'end',
          'items-stretch': horizontalAlign === 'stretch',
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
