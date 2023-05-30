import useTranslation from "next-translate/useTranslation";

export default function ProjectCard({imageSrc, cardHeading, cardText, cardId, icon, link}) {
    let { t } = useTranslation();

    const buttons = {
        front: "common:details",
        back: "common:back",
        visit: "common:visit"
    }

  return (
    <div className="cards-homepage">
            <input type="checkbox" id={cardId} className="more" aria-hidden="true" />
            <div className="content">
                <div className="front"
                      style={{backgroundImage:`url(${imageSrc})`}}
                >
                    <div className="inner">
                        <h2>{cardHeading}</h2>
                        <label for={cardId} className="button" aria-hidden="true">
                            {t(buttons.front)}
                        </label>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                        <div className="info">
                            <div className="icon">
                                {icon}
                            </div>
                        </div>
                        <div className="description">
                            <p>{cardText}</p>
                        </div>
                        <div className="name">{cardHeading}</div>
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
