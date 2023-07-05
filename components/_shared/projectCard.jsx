import useTranslation from "next-translate/useTranslation";
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({ imageSrc, cardHeading, cardText, cardId, icon, link, tags, github, style }) {
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
                <div className="front"
                    style={{ backgroundImage: `url(${imageSrc})` }}
                >
                    <div className="inner p-4 text-center">
                        <div className="tag-wrapper text-xl font-bold ml-auto text-slate-800">
                            {tags.map((tag, index) => <span className="mx-1" key={index}>{tag}</span>)}
                        </div>
                        <h2 className="card-title">{cardHeading}</h2>
                        <label for={cardId} className="button" aria-hidden="true">
                            {t(buttons.front)}
                        </label>
                    </div>
                </div>
                <div className="back bg-slate-900">
                    <div className="inner p-2">
                        <div className="description">
                            <p>{t(cardText)}</p>
                        </div>
                        <div className="name w-full flex justify-between">
                            <span>{cardHeading}</span>
                            <a href={github} target="_blank" rel="noopener noreferrer"><SiGithub /></a>
                        </div>
                        <label for={cardId} className="button return" aria-hidden="true">
                            {t(buttons.back)}
                        </label>
                        <a className="button return visit" href={link} target="_blank" rel="noopener noreferrer" aria-hidden="true">
                            {t(buttons.visit)}
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}
