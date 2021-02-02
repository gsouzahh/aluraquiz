/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactLottie from 'react-lottie';

import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Aternative from '../src/components/Alternatives';
import ImgLogo from '../src/components/Widgets/widLogo';
import Lottie from '../src/Lottie/loading.json';
import Widget from '../src/components/Widgets';
import Button from '../src/components/Button';
import db from '../db.json';

function ResultWidget({ results }) {
  return (
    <>
      <ImgLogo link={db.logoResult} />
      <Widget>
        <Widget.Header>
          <p>Resultado Quiz</p>
        </Widget.Header>
        <Widget.Content>
          <p>
            {`Você acertou ${results.filter((x) => x).length} questão`}
          </p>
          <ul>
            {results.map((item) => (
              <li key={`result__${item}`}>{item === true ? 'Acertou' : 'Errou'}</li>
            ))}
          </ul>
        </Widget.Content>
      </Widget>
    </>
  );
}

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
  AddResults,
}) {
  const [selectedAlternative, SetSelectAlternative] = useState(undefined);
  const [sumited, SetSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasQuestionSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <div
        style={{
          width: '100%',
          height: '120px',
          borderBottom: '1px solid white',
          borderTop: '1px solid white',
        }}
      >
        <img
          alt="Descrição"
          src={question.image}
        />
      </div>
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
            AddResults(isCorrect);
            SetSubmited(true);
            setTimeout(() => {
              onSubmit();
              SetSubmited(false);
              SetSelectAlternative(undefined);
            }, 3 * 1000);
          }}
          style={{ textAlign: 'center' }}
        >
          {question.alternatives.map((item, alternativeIndex) => {
            const alternativeID = `alternative_${alternativeIndex}`;
            return (
              <Aternative
                as="label"
                textAlt={item}
                key={alternativeID}
                id={alternativeID}
                questionId={questionIndex}
              >
                <input
                  name={questionId}
                  id={alternativeID}
                  type="radio"
                  style={{
                    display: 'none',
                  }}
                  onChange={() => {
                    SetSelectAlternative(alternativeIndex);
                    document.getElementById('resposta').style = 'display: block';
                  }}
                />
                {item}
              </Aternative>
            );
          })}
          <Button type="submit" disabled={!hasQuestionSelected}>
            Confirmar
          </Button>
          <div
            id="resposta"
            style={{
              display: 'none',
            }}
          >
            {sumited && isCorrect && <p>Você Acertou!</p>}
            {sumited && !isCorrect && <p>Você Errou!</p>}
          </div>
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
  // const [stateQuiz, SetState] = useState(statesQuiz.RESULT);
  const [stateQuiz, SetState] = useState(statesQuiz.LOADING);
  useEffect(() => {
    setTimeout(() => {
      SetState(statesQuiz.QUIZ);
    }, 1 * 1000);
  }, []);
  const [CurrentPertunga, setCurrent] = useState(0);
  const [results, setResults] = useState([]);
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

  function AddResults(result) {
    results.push(result);
    setResults(results);
  }

  return (
    <QuizBackground backgroundImage={db.bgQuiz}>
      <QuizContainer style={{
        margin: '0 auto',
      }}
      >
        {stateQuiz === statesQuiz.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={AlteraPergunta}
            AddResults={AddResults}
          />
        )}
        {stateQuiz === statesQuiz.LOADING && <LoadingWidget />}
        {stateQuiz === statesQuiz.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}

ImgLogo.propTypes = {
  link: PropTypes.string.isRequired,
};
ResultWidget.propTypes = {
  results: PropTypes.array.isRequired,
};

QuestionWidget.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  AddResults: PropTypes.func.isRequired,
};
