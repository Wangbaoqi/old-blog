import Link from 'next/link';


const RecentPost = ({
  title,
  coverImage,
  date,
  category,
  slug
}) => {
  console.log(title, 'pp');


  return (
    <section className="">
      <div className=" overflow-hidden rounded-lg">
        <img className="h-52 w-full object-cover " src={coverImage} alt="" />
      </div>
      <div className="py-5">
        <p className="text-sm py-1">
          <span className=" font-source mr-3">{category}</span>
          <span className="text-xs font-Sriracha">{date}</span>
          {/* <span></span> */}
        </p>
        <Link href={`/posts/${slug}`}>
          <h3 className="font-advent text-lg cursor-pointer">{ title }</h3>
        </Link>
      </div>
    </section>
  )
}


export default RecentPost