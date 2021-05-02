import React from "react";
import logo from "../images/google.png";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderImg>
      <Image src={logo} alt="vikings" />
    </HeaderImg>
  );
};

const HeaderImg = styled.header`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 480px) and (max-width: 768px) {
    height: 200px;
  }
  @media (max-width: 479px) {
    height: 100px;
  }
`;
const Image = styled.img`
  width: 400px;
  @media (min-width: 480px) and (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 479px) {
    width: 100px;
  }
`;
export default Header;
