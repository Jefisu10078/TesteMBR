import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import api from '../services/api'
import Perguntas from '../components/Perguntas';

const Home = () => {

    const { state } = useLocation();
    const [serie] = useState(state.serie);
    const [materia] = useState(state.materia);
    const [aluno] = useState(state.aluno);
    const [ra] = useState(state.ra);
    const [idusuario] = useState(state.idusuario);
    const [atividade, setAtividade] = useState('');
    const [perguntas, setPerguntas] = useState([]);
    const [total, setTotal] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
useEffect(()=>{
        api.get('atividades',{params:{serie: serie, materia: materia}}).then(response=>{
            let data = response.data;
            let pe = [];
            let aux = '';
            let cont = 0;
            let op = [];
            data.map((itens)=>{
                if(cont === 0){
                    setAtividade(itens.atividade);
                }
                if(aux === ''){
                    cont = 0;
                    aux = itens.titulo;
                    op.push({
                        opcao: itens.opcao,
                        certo: itens.certo
                    });
                    pe.push({
                        id: cont,
                        titulo: itens.titulo,
                        descricao: itens.descricao,
                        opcoes: op
                    });
                }else if(aux === itens.titulo){
                    pe[cont].opcoes.push({
                        opcao: itens.opcao,
                        certo: itens.certo
                    });
                } else {
                    op = [];
                    cont+=1;
                    aux = itens.titulo;
                    op.push({
                        opcao: itens.opcao,
                        certo: itens.certo
                    });
                    pe.push({
                        id: cont,
                        titulo: itens.titulo,
                        descricao: itens.descricao,
                        opcoes: op
                    });
                }
            });
           setPerguntas(pe);
           setTotal(perguntas.length)
        });
    },[perguntas,total,score]);

const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < total) {
      setCurrentQuestion(nextQuestion);

    } else {
      setShowScore(true);
    }
  };

    return (
    <div className="wrapper">
        {showScore ? (
           <div className="resultado">
            <h1 className="resultado-espaco">Resultado</h1>
            <div>
                <h3 className="resultado-espaco">Total de perguntas: {total}</h3>
            </div>
            <div>
                <h3 className="resultado-espaco">Total de acertos: {score}</h3>
            </div>
            <div>
                <h3 className="resultado-espaco">Total de erros:{total-score}</h3>
            </div>
            <div>
                <h1 className="resultado-espaco">Nota:{score}</h1>
            </div>
           </div> 
        ):(
            <div>
            {perguntas.map((pergunta,index)=>{
                if(index==currentQuestion){
                    return <Perguntas key={index} pergunta={pergunta.titulo} atividade={atividade} descricao={pergunta.descricao} opcoes={pergunta.opcoes} proximo={handleAnswerButtonClick}>
                        
                    </Perguntas>
                }
            })}
            </div>
        )}
   </div>
    );
};

export default Home