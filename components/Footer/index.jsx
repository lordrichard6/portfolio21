import styled from "styled-components";

import { Colors } from "../../assets/variables";
import Thanks from "./thanks";
import SiteMap from "./siteMap";
import Contacts from "./contacts";

export default function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <Thanks />
        <SiteMap />
        <Contacts />
      </InnerContainer>
      <CopyrightWrapper>
        <p>Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.</p>
        <p>All rights reserved.</p>
      </CopyrightWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #eee;
  background-color: ${Colors.secondary};
`;

const InnerContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 390px) {
    grid-template-columns: 1fr;
  }
`;

const CopyrightWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  p {
    margin-bottom: 0;

    @media screen and (max-width: 390px) {
      font-size: 0.8rem;
    }
  }
`;
