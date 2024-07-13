import ArticleBlogCard from "../component/blog/ArticleBlogCard";

const Blog = () => {
  return (
    <div className="min-h-screen py-20 align-element">
      <div className="h-[15vh] grid place-items-center">
        <h1 className="mt-8 text-5xl tracking-wide font-bold">
          Just Home Articles
        </h1>
        <p className="w-1/2 text-center mt-8 leading-5 text-neutral-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut vel
          minus repellat. Rem aspernatur labore quis dicta, perspiciatis sit.
        </p>
      </div>
      <div className="mt-16 grid gap-4">
        <ArticleBlogCard />
        <ArticleBlogCard reverse />
        <ArticleBlogCard />
        <ArticleBlogCard reverse />
      </div>
    </div>
  );
};

export default Blog;
