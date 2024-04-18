import useTranslation from "next-translate/useTranslation";
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({ project_type, imageSrc, cardHeading, cardText, cardId, icon, link, tags, github, style }) {
    let { t } = useTranslation();

    const buttons = {
        front: "common:details",
        back: "common:back",
        visit: "common:visit"
    }

    return (
        <div className={`cards-shared ${style}`}>
            <input type="checkbox" id={cardId} className="more" aria-hidden="true" />
            <div className="content">
                <div className="front relative"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    <div className="front-square top absolute border-slate-100" />
                    <div className="front-square bottom absolute border-slate-100" />
                    <div className="inner p-4 text-center">
                        <div className="tag-wrapper text-xl font-bold ml-auto text-slate-800">
                            {tags.map((tag, index) => <span className="mx-1" key={index}>{tag}</span>)}
                        </div>
                        <h2 className="card-title">{cardHeading}</h2>
                        <h3 className="mt-[-10px] text-xl">{project_type}</h3>
                        <label for={cardId} className="button" aria-hidden="true">
                            {t(buttons.front)}
                        </label>
                    </div>
                </div>
                {/* BACK SIDE */}
                <div className="back bg-slate-900 relative">
                    <div className="middle-stripe absolute w-1/2 h-full top-0 left-[30%] -skew-x-[45deg] backdrop-invert z-10"></div>
                    <div className="inner p-4">
                        <div className="description">
                            <p>{t(cardText)}</p>
                        </div>
                        <div className="name w-full flex justify-between transs">
                            <span>{cardHeading}</span>
                            {github && <a href={github} className="z-20 text-slate-900 text-4xl hover:translate-y-1 transition duration-150 ease-in-out" target="_blank" rel="noopener noreferrer"><SiGithub /></a>}
                        </div>
                        <div className="button-wrapper w-full flex justify-between z-20">
                            <label for={cardId} className="button return " aria-hidden="true">
                                {t(buttons.back)}
                            </label>
                            <a className="button return visit" href={link} target="_blank" rel="noopener noreferrer" aria-hidden="true">
                                {t(buttons.visit)}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
