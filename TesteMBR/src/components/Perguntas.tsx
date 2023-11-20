import React, { useImperativeHandle } from "react";

interface PerguntasProps{
    atividade:string,
    pergunta:string,
    descricao:string,
    opcoes:[],
    proximo:(isCorrect)=>void
}

const Perguntas: React.FC<PerguntasProps>=({atividade,pergunta,descricao,opcoes,proximo})=>{

    const handleClick = (isCorrect) => {
        proximo(isCorrect);
    }

    return (
        <div>
        <div>
        <h1>{atividade}</h1>
        </div>
        <div>
            <h2>{pergunta}</h2>
            <h3>{descricao}</h3>
        </div>
        <div className="respostas">
        {opcoes.map((opcao,index)=>{
            return <button onClick={()=>handleClick(opcao.certo)} className="alternativa" key={index}>{opcao.opcao}</button>
          })}
        </div>
    </div>
    )
}

export default Perguntas