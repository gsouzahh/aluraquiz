import styled from 'styled-components';
import PropTypes from 'prop-types';

const ElementAlternative = styled.p`
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

export default ElementAlternative;