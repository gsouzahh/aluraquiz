import React from 'react';
import styled from 'styled-components';

const MyInput = styled.input`
    margin-bottom:10px;
    text-align:center;
    width: 100%;
    height: 40px;
    border-radius:${({ theme }) => theme.borderRadius};
`;

// Abaixo estou criando meu próprio componente que tem propriedades ex: placeholder, onClick, etc

export default function Input({
  // eslint-disable-next-line react/prop-types
  onChange, placeholder, ...props // É passado as variaveis das props
}) {
  return (
    <div>
      <MyInput
        placeholder={placeholder} // É substituida os valores pelas variaveis
        onChange={onChange} // É substituida os valores pelas variaveis
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        // E aqui é os demais parametros que eu posso colocar direto no objeto la na declaração
        // ex: name, value, etc
      />
    </div>
  );
}
