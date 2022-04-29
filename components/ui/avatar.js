import Image from 'next/image';

export default function Avatar({ name = '', picture = '' }) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-5 h-5 rounded-full mr-4"
        alt={name}
      />
      <div className="text-xs mx-2">{name}</div>
    </div>
  )
}
