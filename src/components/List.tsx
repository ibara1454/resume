import clsx from 'clsx';
import Text from './Text';

interface ListProps {
  items: string[];
  className?: string;
}

export default function List({ items, className }: ListProps) {
  return (
    <ul className={clsx(className, 'list-disc list-inside space-y-1')}>
      {items.map((item) => (
        <li key={item} className="text-sm text-gray-500">
          <Text inline text={item} />
        </li>
      ))}
    </ul>
  );
}
