/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";
import Link from "next/link";
// import { BsArrowRightCircleFill } from "react-icons/bs";

export default function CardPrimary({
  imageSrc,
  imageAlt,
  cardHeading,
  cardText,
  link,
}) {
  return (
    <Container className="m-4">
      <div className="nft mx-auto">
        <Link href={link} className="main min-h-[500px] max-h-[500px]">
          <img className="tokenImage" src={imageSrc} alt={imageAlt} />
          <h2 className="text-xl mt-4">{cardHeading}</h2>
          <p className="description text-ellipsis text-justify my-2">{cardText}</p>
        </Link>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .nft {
    user-select: none;
    max-width: 300px;
    border: 1px solid #ffffff22;
    background-color: #282c34;
    background: linear-gradient(
      0deg,
      rgba(40, 44, 52, 1) 0%,
      rgba(17, 0, 32, 0.5) 100%
    );
    box-shadow: 0 7px 20px 5px #00000088;
    border-radius: 0.7rem;
    backdrop-filter: blur(7px);
    -webkit-backdrop-filter: blur(7px);
    overflow: hidden;
    transition: 0.5s all;
    hr {
      width: 100%;
      border: none;
      border-bottom: 1px solid #88888855;
      margin-top: 0;
    }
    ins {
      text-decoration: none;
    }
    .main {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem;
      .tokenImage {
        border-radius: 0.5rem;
        width: 100%;
        height: 250px;
        object-fit: cover;
      }
      .description {
        color: #a89ec9;
      }
      .tokenInfo {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          display: flex;
          align-items: center;
          color: #ee83e5;
          font-weight: 700;
          ins {
            margin-left: -0.3rem;
            margin-right: 0.5rem;
          }
        }
        .duration {
          display: flex;
          align-items: center;
          color: #a89ec9;
          margin-right: 0.2rem;
          ins {
            margin: 0.5rem;
            margin-bottom: 0.4rem;
          }
        }
      }
      .creator {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;
        margin-bottom: -0.3rem;
        ins {
          color: #a89ec9;
          text-decoration: none;
        }
        .wrapper {
          display: flex;
          align-items: center;
          border: 1px solid #ffffff22;
          padding: 0.3rem;
          margin: 0;
          margin-right: 0.5rem;
          border-radius: 100%;
          box-shadow: inset 0 0 0 4px #000000aa;
          img {
            border-radius: 100%;
            border: 1px solid #ffffff22;
            width: 2rem;
            height: 2rem;
            object-fit: cover;
            margin: 0;
          }
        }
      }
    }
    ::before {
      position: fixed;
      content: "";
      box-shadow: 0 0 100px 40px #ffffff08;
      top: -10%;
      left: -100%;
      transform: rotate(-45deg);
      height: 60rem;
      transition: 0.7s all;
    }
    &:hover {
      border: 1px solid #ffffff44;
      box-shadow: 0 7px 50px 10px #000000aa;
      transform: scale(1.015);
      filter: brightness(1.3);
      ::before {
        filter: brightness(0.5);
        top: -100%;
        left: 200%;
      }
    }
  }

  .bg {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      font-size: 20rem;
      filter: opacity(0.5);
    }
  }
`;
