import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

import { Colors } from "../../assets/variables";
import Thanks from "./thanks";
import SiteMap from "./siteMap";
import Contacts from "./contacts";
import CopyrightComponent from './copyright'
import MarioAnimationComponent from './mario'

export default function Footer() {
  let { t } = useTranslation(); 
  
  return (
    <FooterContainer>
      <InnerContainer>
        <Thanks />
        <SiteMap />
        <Contacts />
      </InnerContainer>
      <MarioAnimationComponent />
      <CopyrightComponent />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
  /* background-color: ${Colors.secondary}; */
  /* background: url("/pattern.png"), ${Colors.secondary}; */
  /* background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364); */
  background: #0f2027;
  overflow: hidden;

  z-index: 1;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 764px) {
    grid-template-columns: 1fr;
  }
`;