import styled from "styled-components";

export default function Card({ title, company, period, text }) {
  return (
    <CardContainer>
      <div class="face face1">
        <div class="content">
          <span class="stars"></span>
          <h2>{title}</h2>
          <h3>{company}</h3>
          <p>{period}</p>
          <p>{text}</p>
        </div>
      </div>
      <div class="face face2">
        <h2>01</h2>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  padding: 1rem;
  margin-top: 2rem;
  position: relative;
  width: 100%;
  height: 16rem;
  margin: 0 auto;
  background-color: #d1d5db;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @media screen and (max-width: 764px) {
    height: 18rem;
  }

  h3 {
    margin: 0.4rem 0;
  }
  p {
    margin: 2px 0;
  }

  .face {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &.face1 {
      box-sizing: border-box;
      padding: 20px;
      align-items: flex-start;

      h2 {
        margin: 0;
        padding: 0;
      }
    }

    &.face2 {
      transition: 0.5s;

      h2 {
        margin: 0;
        padding: 0;
        font-size: 10em;
        color: #fff;
        transition: 0.5s;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  :hover .face.face2 {
    height: 60px;

    h2 {
      font-size: 2em;
    }
  }

  .face.face2 {
    background-image: linear-gradient(
      40deg,
      #c7e7ef 0%,
      #81cada 45%,
      #0094b5 100%
    );
    border-radius: 15px;
  }
`;
