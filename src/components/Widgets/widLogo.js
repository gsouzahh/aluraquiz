import React from 'react';
import styled from 'styled-components';
import db from '../../../db.json';

const Logo = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  img{
    width:50%;
  }
`;

export default function ImgLogo() {
  return (
    <Logo>
      <img src={db.logoInicial} alt="LogoResultado" />
    </Logo>
  );
}
