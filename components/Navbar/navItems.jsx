import styled from "styled-components";
import Link from "next/link";

export default function NavItems() {
  return (
    <NavMenu>
      <NavItem>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/projects">
          <a>myProjects</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/skills">
          <a>mySkills</a>
        </Link>
      </NavItem>
      {/* <NavItem>
            <Link href="/404">
              <a>myBlog</a>
            </Link>
          </NavItem> */}
    </NavMenu>
  );
}

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  list-style: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 200;
  margin: 0;
  z-index: 2;

  @media screen and (max-width: 810px) {
    display: none;
  }
`;

const NavItem = styled.li`
  padding-right: 1rem;
  padding-left: 1rem;
  a {
    cursor: pointer;

    &:hover {
    }
  }
`;