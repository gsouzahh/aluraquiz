/* eslint-disable react/prop-types */
import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widgets';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import ImgLogo from '../src/components/Widgets/widLogo';

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

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions
}) {
  const questionId = `question__${questionIndex}`;
  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '40%',
          height: '40%',
          display: 'block',
          margin: '0 auto'
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <form
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
            onSubmit();
          }}
          style={
            {
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }
          }
        >
          {question.alternatives.map((item) => {
            return (
              <p style={
                {
                  margin:'3px',
                  padding:'10px'
                }
              }>
                {item}
              </p>
            );
          })}
          <Button type="submit">
            Confirmar
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

export default function QuizPage() {
  const questionIndex = 0;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;
  return (
    <QuizBackground backgroundImage={db.bgQuiz}>
      <QuizContainer style={{
        margin: '0 auto',
      }}
      >
        <ImgLogo />
        <QuestionWidget
          question={question}
          questionIndex={questionIndex}
          totalQuestions={totalQuestions}
        />
        <LoadingWidget />
      </QuizContainer>
    </QuizBackground>
  );
}
