import { HeaderBox, Logo, NavContainer, NavItem } from "./Header.styled";
import { Link } from "react-scroll";
import { ReactSVG } from "react-svg";
import { logo } from "../../assets/icon";
import { useEffect, useRef, useState } from "react";

const links = [
  { title: "Home", to: "hero" },
  { title: "About", to: "about" },
  { title: "Cases", to: "cases" },
  { title: "Blog", to: "blog" },
  { title: "Contact", to: "contact" },
];

export const Header = () => {
  const [isOpacityHeader, setIsOpacityHeader] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const scrollHandle = () => {
      const currentScroll = window.pageYOffset;
      setIsOpacityHeader(currentScroll <= ref.current.clientHeight);
    };

    window.addEventListener("scroll", scrollHandle);
    return () => window.removeEventListener("scroll", scrollHandle);
  }, []);
  return (
    <HeaderBox ref={ref} opacity={isOpacityHeader ? 0 : 0.8}>
      <Logo>
        <ReactSVG
          src={logo}
          beforeInjection={(svg) => {
            svg.classList.add("logo-icon");
          }}
          title="Logo"
          wrapper="span"
        />
        <span>Finance </span>
        <span>Ledger</span>
      </Logo>

      <NavContainer>
        {links.map(({ title, to }) => (
          <NavItem key={to}>
            <Link
              activeClass="active"
              to={to}
              spy={true}
              smooth={true}
              offset={-ref.current?.clientHeight}
              duration={500}
            >
              {title}
            </Link>
          </NavItem>
        ))}
      </NavContainer>
    </HeaderBox>
  );
};
