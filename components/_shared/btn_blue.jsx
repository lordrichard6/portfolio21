import { TbArrowBigRightLinesFilled } from "react-icons/tb";

export default function BtnBlue({ onClick, text, href }) {
  return (
    <button onClick={onClick} className="btn_blue rounded-2xl border-none h-[66px] mt-auto">
      <a className="flex items-center" href={href}>
        <h3 className="text-lg lg:text-2xl font-bold text-slate-100 uppercase">{text}</h3>
        <TbArrowBigRightLinesFilled />
      </a>
    </button>
  );
}
