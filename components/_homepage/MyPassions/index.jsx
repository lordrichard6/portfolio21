import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { hobbies } from "../../../assets/data";
import HobbyComponent from "./hobby";
import Hexagon from "../../../assets/images/homepage/hexagon_big.svg"
import Hobby_01 from "../../../assets/images/homepage/hobby_01.png"
import Hobby_02 from "../../../assets/images/homepage/hobby_02.png"
import Hobby_03 from "../../../assets/images/homepage/hobby_03.png"
import Hobby_04 from "../../../assets/images/homepage/hobby_04.png"

export default function MyPassions() {
  let { t } = useTranslation();

  return (
    <SectionContainer>
      <h1>{t("home:hobbies_title")}</h1>
      <HexagonBig>
      <Image src={Hexagon} alt="hexagon" />
      </HexagonBig>
      <HobbyElements>
      <Image className="hobby hobby__01" src={Hobby_01} layout="fixed" alt="" />
      <Image className="hobby hobby__02" src={Hobby_02} layout="fixed" alt="" />
      <Image className="hobby hobby__03" src={Hobby_03} layout="fixed" alt="" />
      <Image className="hobby hobby__04" src={Hobby_04} layout="fixed" alt="" />
      </HobbyElements>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 120vh;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${Colors.white};
  /* background: url("/pattern.png"), ${Colors.primary}; */
  background: linear-gradient(to right, #20303c, #478995, #b2d6bc);

  h1 {
    font-size: 4rem;
    font-weight: 800;
    text-shadow: 1px 2px 3px #00000081;

    @media screen and (max-width: 1024px) {
      font-size: 3.5rem;
    }
  }
`;

const HexagonBig = styled.div`
  position: absolute;
  left: -200px;
`;

const HobbyElements = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .hobby__02 {
    margin-bottom: 4rem;
  }
`;