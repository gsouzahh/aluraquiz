/* eslint-disable max-len */
import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import PropTypes from 'prop-types';

import db from '../db.json';
import Icon from '../src/components/Favicon';
import Widget from '../src/components/Widgets';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import ImgLogo from '../src/components/Widgets/widLogo';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [nome, StateNome] = React.useState(''); // verifica se algum componente foi alerado, text, css, etc.
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Valorant</title>
        <Icon />
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
              <p>Teste os seus conhecimentos sobre o Valorant e divirta-se criando o seu AluraQuiz.</p>
              <form onSubmit={(e) => {
                e.preventDefault();
                router.push(`/quiz?name=${nome}`);
                console.log(`nome: ${nome}`);
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(e) => StateNome(e.target.value)}
                  placeholder="Diz ai seu nome"
                  value={nome}
                />
                <Button type="submit" disabled={nome.length === 0}>
                  {`Bora Jogar ${nome}`}
                </Button>
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

Input.prototype = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
