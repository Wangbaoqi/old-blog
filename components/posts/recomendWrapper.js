import { RecomendPost } from "@components/posts";
import { Title } from "@components/ui";
import { Container } from "@components/layouts";

const RecomendWrapper = ({ recomendPosts = [], title = "Popular Posts" }) => {
  return (
    <Container>
      <section className="hidden lg:block">
        <Title title={title} />
        <div className="relative ">
          <div className="overflow-x-scroll px-3 w-full pt-7 -mt-7 pb-4  -mx-3 lg:flex scroll-b scrollbar ">
            {recomendPosts.map((post) => (
              <RecomendPost key={post.slug} {...post} />
            ))}
          </div>
          <div className=" absolute right-1.5 top-7 bottom-4 w-1.5 bg-ver-color rounded shadow-3xl"></div>
        </div>
        
      </section>
    </Container>
  );
};

export default RecomendWrapper;
