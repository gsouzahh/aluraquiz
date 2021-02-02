/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactLottie from 'react-lottie';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Palternative2 from '../src/components/Alternatives';
import ImgLogo from '../src/components/Widgets/widLogo';
import Widget from '../src/components/Widgets';
import Button from '../src/components/Button';
import db from '../db.json';
import Lottie from '../src/Lottie/loading.json';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <p>CARREGANDO QUIZ</p>
      </Widget.Header>
      <Widget.Content>
        <Widget.Loading>
          <ReactLottie
            height={100}
            width={300}
            options={{
              loop: true,
              autoplay: true,
              animationData: Lottie,
              rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
            }}
          />
        </Widget.Loading>
      </Widget.Content>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) {
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
          margin: '0 auto',
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
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          style={{ textAlign: 'center' }}
        >
          {question.alternatives.map((item, alternativeIndex) => {
            const alternativeID = `alternative_${alternativeIndex}`;
            return (
              <Palternative2 textAlt={item} id={alternativeID} />
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

const statesQuiz = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADGING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [stateQuiz, SetState] = useState(statesQuiz.LOADING);
  useEffect(() => {
    setTimeout(() => {
      SetState(statesQuiz.QUIZ);
    }, 1 * 1000);
  }, []);

  const [CurrentPertunga, setCurrent] = useState(0);
  const questionIndex = CurrentPertunga;
  const question = db.questions[questionIndex];
  const totalQuestions = db.questions.length;

  function AlteraPergunta() {
    const nextPergunta = questionIndex + 1;
    if (nextPergunta < totalQuestions) {
      setCurrent(questionIndex + 1);
    } else {
      SetState(statesQuiz.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bgQuiz}>
      <QuizContainer style={{
        margin: '0 auto',
      }}
      >
        <ImgLogo />
        {stateQuiz === statesQuiz.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={AlteraPergunta}
          />
        )}
        {stateQuiz === statesQuiz.LOADING && <LoadingWidget />}
        {stateQuiz === statesQuiz.RESULT && <p>PARABÉNS AMIGOS</p>}
      </QuizContainer>
    </QuizBackground>
  );
}
