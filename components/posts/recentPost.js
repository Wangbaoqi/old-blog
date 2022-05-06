import Link from 'next/link';
import { categoryTheme } from "@config/tagtheme";


const RecentPost = ({
  title,
  coverImage,
  date,
  category,
  slug
}) => {

  return (
    <section className="mb-3">
      <div className=" relative overflow-hidden rounded-lg">
        <img className="h-52 w-full object-cover " src={coverImage} alt="" />
        <span className={`text-pre font-Sriracha absolute top-4 left-4 rounded px-2 py-1 ${categoryTheme[category]}`}>{category}</span>
      </div>
      <div className="py-3">
        <p className="text-sm py-2">
          <span className="text-xs font-Sriracha">{date}</span>
        </p>
        <Link href={`/posts/${slug}`}>
          <h3 className="font-Sriracha md:text-base hover:text-hover-color text-base cursor-pointer">{ title }</h3>
        </Link>
      </div>
    </section>
  )
}


export default RecentPost