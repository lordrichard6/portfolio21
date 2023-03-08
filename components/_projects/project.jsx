import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";


export default function ProjectComponent({ type, title, link, date, icon, icon1, icon2 }) {
  let { t } = useTranslation();

  return (
    <Container>
      <div className={`${type} relative w-1/2 border-slate-100 py-2`}>
        <div className="slide flex justify-center sm:items-center h-20 sm:h-14 lg:h-20 bg-orange-400 md:w-fit">
          <h1 className="tracking-tight mx-1 sm:mx-4 text-2xl lg:text-5xl xl:text-6xl">{title}</h1>
          <div className="icon flex md:opacity-0 mt-3 sm:mt-0 text-2xl md:text-4xl absolute top-1/2 -translate-y-1/2">
          {icon}{icon1}{icon2}
          </div>
          <button
            className="button-74 md:opacity-0 mt-3 sm:mt-0 absolute top-1/2 -translate-y-1/2"
            role="button"
          >
            <a href={link} target="_blank" rel="noopener noreferrer">{t("projects:dev_button")}</a>
          </button>
          <h3 className="absolute text-gray-900 bg-slate-100 rounded-md px-1 top-1/2 -translate-y-1/2">
            {date}
          </h3>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .slide {
    &:hover {
      width: auto;
      .icon {
        opacity: 1;
      }
      button {
        opacity: 1;
      }
    }
  }
  .icon {
    svg {
      filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));
      margin: 0 2px;
    }
  }
  h1 {
    font-weight: 400;
    text-shadow: 1px 2px 4px #00000081;
  }
  .button-74 {
    background-color: #fbeee0;
    border: 2px solid #422800;
    border-radius: 30px;
    box-shadow: #422800 4px 4px 0 0;
    color: #422800;
    cursor: pointer;
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    padding: 0 18px;
    line-height: 32px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-74:hover {
    background-color: #fff;
  }

  .button-74:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(0%, -48%);
  }

  @media (min-width: 1024px) {
    .button-74 {
      width: 120px;
      padding: 0 25px;
      line-height: 50px;
    }
  }
`;
