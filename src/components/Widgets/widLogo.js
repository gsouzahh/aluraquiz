import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Logo = styled.div`
  width:100%;
  display:flex;
  justify-content: center;
  img{
    width:50%;
  }
`;

export default function ImgLogo({ link }) {
  return (
    <Logo>
      <img src={link} alt="LogoResultado" />
    </Logo>
  );
}

ImgLogo.propTypes = {
  link: PropTypes.string.isRequired,
};
