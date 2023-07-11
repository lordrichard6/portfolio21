export const header = {
  name: "Paulo Ricardo Lopes Reizinho",
  title: "👨‍💻 Web/Software Developer"
}

export default function HeaderSection() {
  return (
    <div className="header-container hidden lg:block">
      <h1 className="my-name text-8xl font-semibold mb-2">
        {header.name}
      </h1>
      <h2 className="my-role mb-2 text-zinc-500">
        {header.title}
      </h2>
      <hr />
    </div>
  );
}
