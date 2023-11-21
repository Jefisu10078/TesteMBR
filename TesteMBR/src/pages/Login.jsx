import React,{useEffect,useState} from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/mbr.png'

const Login = () => {

  const [materias,setMaterias] = useState([]);
  const [series,setSeries] = useState([]);
  const [novo,setNovo] = useState(false);
  const [aluno,setAluno] = useState('');
  const [ra,setRa] = useState('');
  const [idusuario,setIdusuario] = useState('');
  const [serie,setSerie] = useState('');
  const [materia,setMateria] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    
    api.get('series').then(response=>{
      setSeries(response.data)
    });

    api.get('materias').then(response=>{
      setMaterias(response.data)
    });
    
  },[]);

  const existeAluno = (nome)=>{
    
    api.get('usuarios',{params:{nome:nome}}).then(response=>{
      let data = response.data[0];
      if (data){
        setRa(data.ra);
        setIdusuario(data.id);
        setAluno(nome);
      } else {
        setRa('');
        setNovo(true);
        setAluno(nome);
      }
    })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(novo){
      api.post('usuarios',{nome: aluno, ra: ra}).then(response=>{
        setIdusuario(response.data[0]);
        console.log('Novo aluno Adicionado');
      }).catch(()=>{
        console.log('Erro no cadastro!');
      });
    }

    const dataList = {
      serie: serie,
      materia: materia,
      aluno: aluno,
      ra: ra,
      idusuario: idusuario
    }

    if(serie!==''&&materia!==''&&aluno!==''&&ra!=='')
    navigate('/atividade', {state: dataList});
  else
  alert("Campos obrigatórios não preenchidos!");
  }

  return (
    <div className="wrapper">
    <form action="">
      <h1>Teste idiomas</h1>
      <div>
      <img  className='logo-MBR' src={Logo} alt="Logo" />
      </div>
      <div className="input-box">
        <input onKeyUp={(e)=>{existeAluno(e.target.value)}} type="text" placeholder="Nome do aluno" required></input>
      </div>

      <div className="input-box">
        <input onChange={(e)=>{setRa(e.target.value)}} value={ra} type="text" placeholder="RA do aluno" required></input>
      </div>

      <div className="input-box">
        <select onChange={(e)=>{setSerie(e.target.value)}} className="form-select custom-select" type="text" placeholder="Serie" required>
          <option>
          Escolha a Série
          </option>
          {series.map((serie)=>{
            return <option key={serie.id} value={serie.id}>{serie.serie}</option>
          })}
        </select>
      </div>

      <div className="input-box">
        <select onChange={(e)=>{setMateria(e.target.value)}} className="form-select custom-select" type="text" placeholder="Escolha o livro" required>
          <option>
          Escolha o livro
          </option>
          {materias.map((materia)=>{
            return <option key={materia.id} value={materia.id}>{materia.materia}</option>
          })}
        </select>
      </div>

      <button onClick={handleSubmit} className="btn">Entrar</button>

    </form>
   </div>
  )
}

export default Login