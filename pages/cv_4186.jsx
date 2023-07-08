import { CVMain, CVSide } from "../components/_cv";

export default function CV_2023() {
  return (
    <div className="cv-page min-h-screen w-screen flex flex-col lg:flex-row">
      <CVSide />
      <CVMain />
    </div>
  );
}
