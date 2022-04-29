import Link from 'next/link';


const RecentPost = ({
  title,
  coverImage,
  date,
  category,
  slug
}) => {

  return (
    <section className="mb-3">
      <div className=" overflow-hidden rounded-lg">
        <img className="h-52 w-full object-cover " src={coverImage} alt="" />
      </div>
      <div className="py-3">
        <p className="text-sm py-2">
          <span className="mr-3">{category}</span>
          <span className="text-xs font-Sriracha">{date}</span>
        </p>
        <Link href={`/posts/${slug}`}>
          <h3 className="font-Sriracha md:text-lg hover:text-hover-color text-base cursor-pointer">{ title }</h3>
        </Link>
      </div>
    </section>
  )
}


export default RecentPost