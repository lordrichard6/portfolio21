import styled from "styled-components";
import Image from "next/image";

import { tech } from "../../../assets/data";
import { Colors } from "../../../assets/variables";
import pattern from "../../../assets/images/pattern.png";

export default function Techs() {
  return (
    <PageContainer>
      <h1>Techs</h1>
      <IconsContainer>
        {tech.map((item, i) => {
          return (
            <Icon key={i} color={item.color}>
              {item.icon}
              <h2>{item.name}</h2>
            </Icon>
          );
        })}
      </IconsContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
  margin: 0 2rem;
  padding: 6rem 0;
  color: #eee;
  background: url("/circuit_tech.svg"), ${Colors.primary};
  background-repeat: no-repeat;
  background-position: right;
  /* background-size: cover; */

  @media screen and (min-width: 2560px) {
    font-size: 2.6rem;
  }
  h1 {
    margin-top: 0;
    font-size: 4rem;
    font-weight: 400;
    z-index: 1;
  }
  .font-size {
    font-size: 4rem;
  }
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 4rem;
  place-items: center;
  margin-left: 4rem;
  margin-right: 4rem;

  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  img {
    width: auto;
    height: 2rem;
  }
  h2 {
    font-weight: 400;
  }
`;

const Icon = styled.div`
  display: grid;
  place-items: center;
  font-size: 4rem;
  text-align: center;
  z-index: 1;

  @media screen and (min-width: 2560px) {
    font-size: 5rem;
  }

  svg {
    transition: 0.4s ease-in-out;
    cursor: pointer;
    
    :hover {
      transform: scale(1.2);
      color: ${(props) => props.color};
      filter: drop-shadow(5px 5px 5px #1a1a1a);
    }
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;

    @media screen and (min-width: 2560px) {
      font-size: 2rem;
    }
  }
`;
