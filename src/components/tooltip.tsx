/** @format */

export default function Tooltip({
  children,
  content,
}: {
  children: React.ReactNode;
  content: string;
}) {
  return (
    <div className="flex items-center relative group">
      <div className="text-black group-hover:opacity-100 transition-all duration-150 ease-in-out opacity-0 px-2 py-1 text-md absolute left-[50%] -bottom-[100%] -translate-y-[50%] -translate-x-[50%] ">
        {content}
      </div>
      {children}
    </div>
  );
}
