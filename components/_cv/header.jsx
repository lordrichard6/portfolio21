const name = {
  name: "Paulo Ricardo Lopes Reizinho",
  title: "👨‍💻 Developer"
}

export default function HeaderSection() {
  return (
    <>
      <h1 className="my-name">
        {name.name}
      </h1>
      <h2 className="my-role">
        {name.title}
      </h2>
      <hr />
    </>
  );
}
