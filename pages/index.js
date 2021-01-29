/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import ImgLogo from '../src/components/Widgets/widLogo';

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin:auto 10%;
  @media screen and (max-width:500px){
    margin:auto;
    padding:15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [nome, StateNome] = React.useState(''); //verifica se algum componente foi alerado, text, css, etc.
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Valorant</title>
        <link rel="icon" href="https://preview.redd.it/k0gd4enore451.png?width=256&format=png&auto=webp&s=d875b1079d4dc885d62d7a7bf31a4fa11bb40ee7" sizes="16x16" type="image/png" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <QuizContainer>
        <ImgLogo />
        <Widget>
          <Widget.Header>

            <h1>VAMOS VER O QUANTO VOCÊ MANJA DE VALORANT</h1>
          </Widget.Header>
          <Widget.Content>
            <Widget.PCenter>
              <p>Insira o seu nome abaixo</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${nome}`);
                console.log(`nome: ${nome}`);
              }}
              >
                <input
                  onChange={(evento) => {
                    StateNome(evento.target.value);
                  }}
                  id="inputName"
                  placeholder="Diz ai seu nome"
                />
                <button type="submit" disabled={nome.length === 0}>
                  Jogar
                  {' '}
                  {nome}
                </button>
              </form>
            </Widget.PCenter>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>A CRIATIVIDADE É SUA MELHOR ARMA.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, omnis.</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gsouzahh" />
    </QuizBackground>
  );
}
