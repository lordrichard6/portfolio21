import styled from "styled-components";

export default function Card({ title, school, start, finish, text }) {
  return (
    <Container>
      <CardContainer>
        <div className="face face1">
          <div className="content">
            <span className="stars"></span>
            {/* <h2>{title}</h2> */}
            <h3>{school}</h3>
            <p>
              {start} - {finish}
            </p>
            <p>{text}</p>
          </div>
        </div>
        <div className="face face2">
          <h2>{title}</h2>
        </div>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  margin: 2rem 0;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (min-width: 2024px) {
    width: 50%;
  }
`;

const CardContainer = styled.div`
  padding: 1rem;
  margin: 2rem 0;
  position: relative;
  width: 100%;
  height: 14rem;
  margin: 0 auto;
  background-color: #d1d5db;
  border-radius: 15px;
  box-shadow: 0 15px 60px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  @media screen and (max-width: 764px) {
    height: 18rem;
  }

  h3 {
    margin: 2px 1rem;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  p {
    margin: 2px 1rem;
    font-size: 1.25rem;
    letter-spacing: 1px;

    @media screen and (max-width: 764px) {
      font-size: 1rem;
    }
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
      text-align: center;

      h2 {
        margin: 0;
        padding: 0 1rem;
        font-size: 4rem;
        color: #fff;
        transition: 0.5s;
        text-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        z-index: 10;

        @media screen and (max-width: 1024px) {
          font-size: 2rem;
        }
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

      @media screen and (max-width: 764px) {
        font-size: 1rem!important;
      }
      @media screen and (max-width: 1024px) {
        font-size: 1.5rem;
      }
    }
  }

  .face.face2 {
    background-image: linear-gradient(
      40deg,
      #e2c7ef 0%,
      #81cada 45%,
      #0094b5 100%
    );
    border-radius: 15px;
  }
`;
