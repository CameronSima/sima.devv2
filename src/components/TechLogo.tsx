export default function TechLogo({ name }: { name: string }) {
  return (
    <img
      src={`/logos/${name}`}
      alt={`${name} logo`}
      style={{ width: "7rem" }}
      className="aspect-[1] object-contain object-center"
    />
  );
}
