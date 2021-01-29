import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    width: 100%;
    height: 40px;
    color: black;
    font-weight:bold;
    background-color:${({ theme }) => theme.colors.secondary};
    border: 2px solid white;
    transition: all .2s;
    border-radius:${({ theme }) => theme.borderRadius};
    cursor: pointer;
    &:hover{
    background-color: #CC3441;
    color: white;
    }
`;

Button.prototype = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
