import Image from 'next/image';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={16}
        height={18}
        className="rounded-full mr-4"
        alt={name}
      />
      <div className="text-xs mx-2">{name}</div>
    </div>
  )
}
