/** @format */

interface ProjectItemProps {
  mainImageSrc: string;
  secImageSrc: string;
  terImageSrc: string;
  title: string;
  stack: string[];
  description: string;
  liveSrc: string | null;
  githubSrc: string | null;
}
export default function ProjectItem({
  mainImageSrc,
  description,
  githubSrc,
  liveSrc,
  secImageSrc,
  stack,
  terImageSrc,
  title,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col gap-4 max-w-7xl">
      <div className="flex max-sm:flex-col gap-3 ">
        <div className="sm:w-1/3 flex flex-col gap-3">
          <div className=" bg-stone-800/40 w-full overflow-hidden relative hover:rounded-xl group transition-all duration-300">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={mainImageSrc}
            />
          </div>
          <div className="bg-stone-800/40 w-full overflow-hidden relative hover:rounded-xl group transition-all duration-300">
            <img
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              src={secImageSrc}
            />
          </div>
        </div>
        <div className="sm:w-2/3 bg-stone-800/40 flex  items-center justify-center w-full overflow-hidden group relative hover:rounded-xl transition-all duration-300">
          <img
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            src={terImageSrc}
          />
          <div className="w-full group-hover:-bottom-22 duration-500 transition-all ease-out absolute bottom-0 h-22 px-8 py-4 flex items-end from-black/50 to-black/0 bg-linear-to-t">
            <h3 className="text-3xl font-extrabold invert">{title}</h3>
          </div>
        </div>
      </div>
      <div>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  );
}
