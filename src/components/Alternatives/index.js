import styled from 'styled-components';

const LabelAternative = styled.div`
    margin: 5px;
    padding:10px;
    display:block;
    background-color: ${({ theme }) => theme.colors.bgndAlternative};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition:all .2s;
    cursor: pointer;
    border:1px solid white;
    &:hover{
    background-color: rgba(255,255,255,.2);
    transform: scale(1.05,1.05)
    }
`;

export default LabelAternative;
