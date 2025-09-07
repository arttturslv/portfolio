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
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <div className="w-full rounded-lg flex justify-center items-center bg-amber-300 max-sm:h-[250px]">
          <img
            src={mainImageSrc}
            className="w-full object-contain max-sm:h-full"
            alt=""
          />
        </div>
        <div className="flex gap-2 max-sm:flex-col">
          <div className="w-full rounded-lg flex items-center justify-center h-[250px] sm:h-[300px] object-contain ">
            <img src={secImageSrc} className="object-contain h-full" alt="" />
          </div>
          <div className="w-full rounded-lg flex items-center justify-center h-[250px] sm:h-[300px] object-contain ">
            <img src={terImageSrc} className="object-contain h-full" alt="" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <span className="">
          <h3 className="text-4xl font-bold">{title}</h3>
          <label className="text-sm">{stack.join(" | ")}</label>
        </span>

        <div className="space-y-2 flex flex-col">
          <span>{description}</span>
          {liveSrc && (
            <span>
              <label>See it here:</label>
              <a href={liveSrc}>{liveSrc}</a>
            </span>
          )}
          {githubSrc && (
            <span>
              <label>Code here:</label>
              <a href={githubSrc}>{githubSrc}</a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
