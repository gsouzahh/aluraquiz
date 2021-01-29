import React from 'react';
import QuizBackground from '../src/components/QuizBackground';
import db from '../db.json';

// function Loading() {

// }

export default function Pagina() {
  return (
    <QuizBackground backgroundImage={db.bgQuiz}>
      netbil
    </QuizBackground>
  );
}
