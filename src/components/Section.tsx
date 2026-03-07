import clsx from 'clsx';
import style from './Section.module.css';

interface SectionProps {
  title?: string;
  className?: string;
  noBreak?: boolean;
  children?: React.ReactNode;
}

export default function Section({
  title,
  noBreak,
  className,
  children,
}: SectionProps) {
  return (
    <section
      className={clsx(className, { [style.noBreak]: noBreak })}
      title={title}
    >
      {children}
    </section>
  );
}
