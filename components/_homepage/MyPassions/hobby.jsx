import styled from "styled-components";
import Image from "next/image";

export default function HobbyComponent({className, imgSrc, alt, title, text}) {
  return (
    <div className={className}>
      <Picture>
        <Image
          src={imgSrc}
          objectFit="cover"
          objectPosition="center"
          alt={alt}
        />
      </Picture>
      <Text>
        <h2>{title}</h2>
        <p>{text}</p>
      </Text>
    </div>
  );
}

const Picture = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  margin: 0 1rem;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 50%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  h2 {
    font-weight: 600;
    font-size: 2rem;

    @media screen and (max-width: 400px) {
      margin: 0 1rem;
    }
  }
  p {
    font-weight: normal;
    font-size: 1.4rem;

    @media screen and (max-width: 1024px) {
      font-size: 1.3rem;
    }
  }
`;
