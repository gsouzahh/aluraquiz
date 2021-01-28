import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widgets/'
import QuizBackground from '../src/components/QuizBackground/'
import Footer from '../src/components/Footer/'
import GitHubCorner from '../src/components/GitHubCorner/'
import ImgLogo from '../src/components/Widgets/widLogo'
import Head from 'next/head'

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz - Valorant</title>
        <link rel="icon" href="https://preview.redd.it/k0gd4enore451.png?width=256&format=png&auto=webp&s=d875b1079d4dc885d62d7a7bf31a4fa11bb40ee7" sizes="16x16" type="image/png"></link>
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>
      <QuizContainer>
        <ImgLogo />
        <Widget>
          <Widget.Header>

            <h1>VAMOS VER O QUANTO VOCÊ MANJA DE VALORANT</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Misture o seu estilo e experiência em um cenário global e competitivo. Você terá 13 rodadas para atacar e defender com disparos certeiros e habilidades táticas. Com apenas uma vida por rodada, você deve pensar mais rápido que o oponente se quiser sobreviver. Encare inimigos nos modos Competitivo e Sem Ranque, além da Disputa da Spike e do Mata-Mata!</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>A CRIATIVIDADE É SUA MELHOR ARMA.</h1>
            <p>Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida!</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/gsouzahh" />
    </QuizBackground>
  )
}
