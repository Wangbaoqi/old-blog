import Image from 'next/image';

export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <Image
        src={picture}
        width={28}
        height={28}
        className="w-6 h-6 rounded-full mr-4"
        alt={name}
      />
      <div className="text-sm mx-4">{name}</div>
    </div>
  )
}
