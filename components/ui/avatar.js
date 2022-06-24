import Image from 'next/image';

export default function Avatar({ name = '', picture = '' }) {
  return (
    <div className="flex items-center">
      <img
        src={picture}
        className="w-5 h-5 rounded-full mr-1"
        alt={name}
      />
      <div className="text-pre mx-1 ">{name}</div>
    </div>
  )
}
