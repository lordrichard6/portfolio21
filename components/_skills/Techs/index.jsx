import styled from "styled-components";
import Image from "next/image";

// import { techs } from "../../../assets/static";
import { Variables } from "../../../assets/variables";
import pattern from "../../../assets/images/pattern.png";

export default function Techs() {
  return (
    <PageContainer>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <h1>Techs</h1>
      <IconsContainer>
        {/* {techs.map((n) => {
          return (
            <Icon>
              <img src={n.icon} alt={n.desc} height={100} />
              <h2>{n.name}</h2>
            </Icon>
          );
        })} */}
        <Icon>
          {/* <Image src="../../../assets/images/skills/react.png" alt="react" height={100}/> */}
        </Icon>
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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  color: #eee;
  background: ${Variables.primary};
  h1 {
    margin-top: 0;
    font-size: 4rem;
    font-weight: 400;
  }
`;

const IconsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 4rem;
  place-items: center;
  margin-left: 4rem;
  margin-right: 4rem;
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
`;

const BG = styled(Image)`
  z-index: 0;
  opacity: 0.1;
`;
