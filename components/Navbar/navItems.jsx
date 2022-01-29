import styled from "styled-components";
import Link from "next/link";
import useTranslation from 'next-translate/useTranslation'

export default function NavItems() {
  let {t} = useTranslation()

  return (
    <NavMenu>
      <NavItem>
        <Link href="/">
          <a>{t('common:home')}</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/projects">
          <a>{t('common:projects')}</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/skills">
          <a>{t('common:skills')}</a>
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

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  padding-right: 1rem;
  padding-left: 1rem;

  a {
    cursor: pointer;
    position: relative;
    
    ::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);
    content: "REIZINHO";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #ffffff89 10%);
    text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
    clip-path: var(--slice-0);
  }

  :hover::after {
    animation: 1s glitch infinite;
    animation-timing-function: steps(2, end);
  }

  @keyframes glitch {
    0% {
      clip-path: var(--slice-1);
      transform: translate(-20px, -10px);
    }

    10% {
      clip-path: var(--slice-3);
      transform: translate(1px, 1px);
    }

    20% {
      clip-path: var(--slice-1);
      transform: translate(-1px, 1px);
    }

    30% {
      clip-path: var(--slice-3);
      transform: translate(0px, 0.5px);
    }

    40% {
      clip-path: var(--slice-2);
      transform: translate(-0.5px, 0px);
    }

    50% {
      clip-path: var(--slice-3);
      transform: translate(0.5px, 0px);
    }

    60% {
      clip-path: var(--slice-4);
      transform: translate(0.5px, 10px);
    }

    70% {
      clip-path: var(--slice-2);
      transform: translate(-1px, 1px);
    }

    80% {
      clip-path: var(--slice-5);
      transform: translate(2px, -1px);
    }

    90% {
      clip-path: var(--slice-1);
      transform: translate(-1px, 0px);
    }

    100% {
      clip-path: var(--slice-1);
      transform: translate(0);
    }
  }
  }
`;