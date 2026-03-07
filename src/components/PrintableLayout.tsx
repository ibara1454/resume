import clsx from 'clsx';
import style from './PrintableLayout.module.css';

interface PrintableLayoutProps {
  shadow?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export default function PrintableLayout({
  className,
  shadow = false,
  children,
}: PrintableLayoutProps) {
  return (
    <main
      className={clsx(className, style.printableLayout, shadow && style.shadow)}
    >
      <div className={style.page}>{children}</div>
    </main>
  );
}
