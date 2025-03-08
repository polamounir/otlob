export default function SectionTitle({ title }: { title: string }) {
  return (
    <div className="relative w-fit">
      <h2 className="relative text-4xl font-semibold text-black after:absolute after:left-0 after:bottom-[0px] after:h-[2px] after:w-full after:bg-cyan-950 after:content-[''] pb-3">
        {title}
      </h2>
    </div>
  );
}
