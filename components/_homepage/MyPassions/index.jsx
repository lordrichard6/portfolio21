import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import hobby_01 from "../../../assets/images/homepage/hobby_01.jpg";
import hobby_02 from "../../../assets/images/homepage/hobby_02.jpg";
import hobby_03 from "../../../assets/images/homepage/hobby_03.jpg";
import hobby_04 from "../../../assets/images/homepage/hobby_04.jpg";

export default function MyPassions() {
  const data = [
    {
      title: "hobby#1",
      imgSrc: hobby_01,
      alt: "image",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic sapiente tempora. Molestiae aliquid assumenda ratione dolorum possimus iste, rem, natus, numquam eum maxime pariatur! Quod inventore vel facere hic.",
      className: "hobby",
    },
    {
      title: "hobby#2",
      imgSrc: hobby_02,
      alt: "image",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic sapiente tempora. Molestiae aliquid assumenda ratione dolorum possimus iste, rem, natus, numquam eum maxime pariatur! Quod inventore vel facere hic.",
      className: "hobby-reverse",
    },
    {
      title: "hobby#3",
      imgSrc: hobby_03,
      alt: "image",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic sapiente tempora. Molestiae aliquid assumenda ratione dolorum possimus iste, rem, natus, numquam eum maxime pariatur! Quod inventore vel facere hic.",
      className: "hobby",
    },
    {
      title: "hobby#4",
      imgSrc: hobby_04,
      alt: "image",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic sapiente tempora. Molestiae aliquid assumenda ratione dolorum possimus iste, rem, natus, numquam eum maxime pariatur! Quod inventore vel facere hic.",
      className: "hobby-reverse",
    },
  ];

  return (
    <SectionContainer>
      <h1>My Passions</h1>
      <HobbiesContainer>
        {data.map((item, i) => {
          return (
            <div className={item.className} key={i}>
              <Picture>
                <Image
                  src={item.imgSrc}
                  objectFit="cover"
                  objectPosition="center"
                  // width={400}
                  // height={300}
                  alt={item.alt}
                />
              </Picture>
              <Text>
                <h2>{item.title}</h2>
                <p>
                  {item.text}
                </p>
              </Text>
            </div>
          );
        })}
      </HobbiesContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.primary};

  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 1px 2px 3px #00000081;

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
  }
`;

const HobbiesContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media screen and (min-width: 2560px) {
    width: 50%;
  }

  .hobby {
    display: flex;
    flex-direction: row;
    padding: 1rem 0;

    @media screen and (max-width: 400px) {
      flex-direction: column;
      margin-bottom: 1rem;
    }
  }
  .hobby-reverse {
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem 0;

    @media screen and (max-width: 400px) {
      flex-direction: column;
    }
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

const Picture = styled.div`
  display: flex;
  width: 50%;
  height: auto;
  padding: 0 1rem;

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
`;
