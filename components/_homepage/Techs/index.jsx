import HobbiesTitleComponent from "../MyPassions/title";
import SingleTech from "./tech";
import { frontTechs, backTechs } from "../../../assets/data/techs";

export default function Techs() {
  return (
    <section className="my-10 lg:my-20">
      <HobbiesTitleComponent title="Techs" />
      <p className="text-slate-100 mx-auto text-xl w-3/4 md:w-1/2 mt-8">
        I have a programming toolkit that's like a box of chocolates - you never
        know what you're going to get, but it's always sweet. I offer Python,
        Django, Node.js, GraphQL, and more. Here I show the ones that I have a
        better taste of.
      </p>
      <div className="text-slate-100 grid grid-cols-1 md:grid-cols-2 w-full md:divide-x-4 mt-10">
        <div className="left">
          <h2 className="my-6 text-center text-4xl antialiased font-semibold uppercase underline decoration-wavy decoration-2 underline-offset-6 drop-shadow-lg -skew-y-6">
            Front-end
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 place-items-end">
            {frontTechs.map((tech, i) => {
              return (
                <SingleTech
                  key={i}
                  tech={tech.tech}
                  icon={tech.icon}
                  text={tech.text}
                />
              );
            })}
          </div>
        </div>
        <div className="right">
          <h2 className="my-6 text-center text-4xl antialiased font-semibold uppercase underline decoration-wavy decoration-2 underline-offset-6 drop-shadow-lg -skew-y-6">
            Back-end
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4 place-items-end">
            {backTechs.map((tech, i) => {
              return (
                <SingleTech
                  key={i}
                  tech={tech.tech}
                  icon={tech.icon}
                  text={tech.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
