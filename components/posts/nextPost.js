import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "react-feather";
import Link from "next/link";

const NextPost = ({ prev, next }) => {
  const leftPost = prev ? (
    <Link href={prev.slug}>
      <div className="flex justify-between gap-4 items-center cursor-pointer text-sm hover:bg-hover-bg px-4 py-4 rounded-md -ml-6">
        <ChevronLeft size={20} />
        <div className="flex flex-col items-start mb-1 justify-between cursor-pointer">
          <span className="uppercase">previous</span>
          <h3 className="text-hover-color font-SourceCode">
          {prev.title}
        </h3>
        </div>
        
      </div>
    </Link>
  ) : null;
  const rightPost = next ? (
    <Link href={next.slug}>
      <div className="flex items-center gap-4 cursor-pointer text-sm hover:bg-hover-bg px-4 py-4 rounded-md -mr-4">
        <div className="flex flex-col mb-1 justify-end cursor-pointer">
          <span className="uppercase text-right">next</span>
            <h3 className="text-hover-color font-SourceCode">
            {next.title}
          </h3>
        </div>
        <ChevronRight size={20} />
        
      </div>
    </Link>
  ) : null;

  return (
    <section className="flex justify-between py-8 ">
      {leftPost}
      {rightPost}
    </section>
  );
};

export default NextPost;
