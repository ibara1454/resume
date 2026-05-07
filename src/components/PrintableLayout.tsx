import clsx from 'clsx';
import style from './PrintableLayout.module.css';

interface PrintableLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function PrintableLayout({
  className,
  children,
}: PrintableLayoutProps) {
  return (
    <main className={clsx(className, style.printableLayout)}>{children}</main>
  );
}
