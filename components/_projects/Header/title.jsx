import { scaled } from "../../../utilities/framer-animations";
import { EntryAnimation } from "../../_shared";

export default function ProjectsHeaderTitle() {

  return (
    <EntryAnimation animation={scaled} style="tracking-widest z-20 text-[80px] md:text-[160px]">
      <h1 className="font-thin">My</h1>
      <h1 className="font-bold">Projects</h1>
    </EntryAnimation>
  );
}
