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
  verticalAlign?: VerticalAlign;
  horizontalAlign?: HorizontalAlign;
  className?: string;
  children?: React.ReactNode;
}

export default function VStack({
  className,
  gap = '0',
  verticalAlign = 'start',
  horizontalAlign = 'start',
  children,
}: VStackProps) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col',
        {
          'gap-2': gap === '1',
          'gap-4': gap === '2',
          'gap-6': gap === '3',
          'gap-8': gap === '4',
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
      )}
    >
      {children}
    </div>
  );
}
