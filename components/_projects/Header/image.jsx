import { bringFromRight } from "../../../utilities/framer-animations";
import { EntryAnimation, ImagesComponent } from "../../_shared";

export default function ProjectsHeaderImage() {
  
  return (
    <EntryAnimation animation={bringFromRight} style="absolute -right-[5rem] md:-right-[20rem] lg:-right-[25rem] xl:-right-[35rem] 2xl:-right-[20rem] bottom-0 w-full h-full 2xl:w-1/2">
      <ImagesComponent src="/projects/paulo_header.png" alt="" style="w-full h-full flex-centered grayscale opacity-40 overflow-visible" />
    </EntryAnimation>
  );
}
