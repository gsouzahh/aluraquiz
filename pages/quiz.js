/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import Prototype from 'prop-types';
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
          onSubmit={(infosDoEvento) => {
            infosDoEvento.preventDefault();
          }}
          style={{ textAlign: 'center' }}
        >
          {question.alternatives.map((item, alternativeIndex) => {
            const alternativeID = `alternative_${alternativeIndex}`;
            return (
              <Palternative2 textAlt={item} />
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
  const valid = 'LOADING';
  return (
    <QuizBackground backgroundImage={db.bgQuiz}>
      <QuizContainer style={{
        margin: '0 auto',
      }}
      >
        <ImgLogo />
        {valid === 'ENTROU' && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
          />
        )}
        {valid === 'LOADING' && <LoadingWidget />}
      </QuizContainer>
    </QuizBackground>
  );
}

Palternative2.prototype = {
  textAlt: Prototype.string.isRequired,
};
