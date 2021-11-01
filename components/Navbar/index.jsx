import styled from "styled-components";
import Image from "next/image";

import { Variables } from "../../assets/variables";
import logo from "../../public/icon.png";
import pattern from "../../assets/images/pattern.png";

export default function Navbar() {
  return (
    <Container>
      <BG
        src={pattern}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <InnerContainer>
        <LogoContainer>
          <Image src={logo} height="60px" width="60px" />
        </LogoContainer>
        <ItemsContainer>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>myProjects</a>
          </li>
          <li>
            <a>mySkills</a>
          </li>
          <li>
            <a>myBlog</a>
          </li>
        </ItemsContainer>
      </InnerContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 8px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  background-color: ${Variables.primary};
`;

const BG = styled(Image)`
  z-index: 1;
  opacity: 0.1;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 8rem;
  padding-right: 8rem;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 200;
  margin: 0;
  li {
    padding-right: 1rem;
    padding-left: 1rem;
    a {
      cursor: pointer;
    }
  }
`;
