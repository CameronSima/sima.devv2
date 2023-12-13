export function SkillTile({ title }: { title: string }) {
  return (
    <div className="text-black text-sm font-semibold leading-5 whitespace-nowrap  bg-zinc-100  justify-center px-2 py-1">
      {title}
    </div>
  );
}
