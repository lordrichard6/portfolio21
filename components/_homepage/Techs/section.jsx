import useTranslation from "next-translate/useTranslation";

import SingleTech from "./tech";

export default function SectionComponent({ side, title }) {
  let { t } = useTranslation();

  return (
    <div>
      <h2 className="my-6 text-center text-4xl 2xl:text-5xl antialiased font-semibold uppercase underline decoration-wavy decoration-2 underline-offset-6 drop-shadow-lg -skew-y-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-y-32 xl:gap-y-24 mx-4 place-items-end">
        {side.map((tech, i) => {
          return (
            <SingleTech
              key={i}
              tech={tech.tech}
              icon={tech.icon}
              color={tech.color}
              text={t(tech.text)}
            />
          );
        })}
      </div>
    </div>
  );
}
