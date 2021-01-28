import styled from 'styled-components'
import db from '../../../db.json'

const Logo = styled.img`
  width:100%;
`;

export default function ImgLogo() {
    return (
        <Logo src={db.logoInicial} />
    );
}
