
export default function ProjectCard({imageSrc, cardHeading, cardText, cardId, icon, link}) {
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
                            DETAILS
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
                            BACK
                        </label>
                        <a className="button return visit" href={link} target="_blank" rel="noopener noreferrer" aria-hidden="true">
                            VISIT
                        </a>
                    </div>
                </div>

            </div>
        </div>
  );
}
