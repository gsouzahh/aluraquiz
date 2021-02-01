import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
function Palternative2({ textAlt }) {
  return (
    <Palternative>
      {textAlt}
    </Palternative>
  );
}

const Palternative = styled.p`
    margin: 5px;
    padding:10px;
    background-color: ${({ theme }) => theme.colors.bgndAlternative};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition:all .2s;
    cursor: pointer;
    border:1px solid white;
    &:hover{
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: rotate(4deg);
    }
    &:active{
    background-color: ${({ theme }) => theme.colors.success};
    }
`;

export default Palternative2;
