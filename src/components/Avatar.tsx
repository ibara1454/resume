import Image, { StaticImageData } from 'next/image';

interface AvatarProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export default function Avatar({ src, alt }: AvatarProps) {
  return (
    <Image
      className="w-36 h-36 object-cover rounded-lg sepia-[.50]"
      src={src}
      alt={alt}
      loading="eager"
    />
  );
}
