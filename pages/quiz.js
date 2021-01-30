/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Carregando...
      </Widget.Header>

      <Widget.Content>
        [Desafio do Loading]
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const questao = db.questions[0]
  return (
    <QuizBackground backgroundImage={db.bgQuiz}>
      <QuizContainer style={{
        margin: '0 auto',
      }}>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h3>
              Pergunta
              1
              de
              {` ${db.questions.length} `}
            </h3>
          </Widget.Header>
          <img
            alt="Descrição"
            style={{
              width: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            src="http://placehold.it/400x400"
          />
          <Widget.Content>
            <h2>
              {db.title}
            </h2>
            <p>
              {db.description}
            </p>
            <Button
              style={{ color: 'white' }}>
              Confirmar
             </Button>
          </Widget.Content>
        </Widget>
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}




