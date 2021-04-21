import React, { useContext, useEffect, useState } from 'react'

import {db} from '../../firebase';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ReceitasContainer, Form } from './styles'
import { AuthContext } from '../../auth/AuthContext';


toast.configure();

interface ReceitasProps {
  setCurrentBalance(bool: any): void;
  currentBalance: number;
  setReceitas(bool: any): void;
  salary: number;
  receitas: number;


}



const ReceitasControl: React.FC<ReceitasProps> = ({setReceitas, receitas, salary, currentBalance, setCurrentBalance}) => {
  const { user } = useContext(AuthContext);

  const[salaryControll, setSalaryControll] = useState(receitas);




  async function handleAddReceitas(event: any) {
     event.preventDefault();
    const { nome, valor, categoria, data, descricao } = event.target.elements;

    try {
      await db.collection('users').doc(user.email).collection('receitas').doc().set({
        name: nome.value,
        value: valor.value,
        category: categoria.value,
        date: data.value,
        description: descricao.value
      }) 
      var floatValue = parseFloat(valor.value);
     
      toast.success('Receita adicionada!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      setSalaryControll(salaryControll+floatValue)
      setReceitas(salaryControll)
      setCurrentBalance(salaryControll)
   
    } catch (error) {
      toast.error('Ops, tente de novo!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

  }
}


  return (
    <ReceitasContainer>
      <div className="header-title">
        <h1>Novo rendimento</h1>
        <h2>
          Saldo atual: R$ {receitas.toLocaleString('pt-BR')}
        </h2>
      </div>
     
      <Form onSubmit={(event) => handleAddReceitas(event)}>
        <div className="">
          <label>
            Nome:
            <input name="nome" type="text"  />
          </label>
          <label>
            Valor R$:
            <input name="valor" min="1" type="number"  />
          </label>
        </div>
        <div className="">
          <label>
            Categoria:
            <input name="categoria" type="text"  />
          </label>
          <label>
            Data:
            <input name="data" type="date"  />
          </label>
        </div>
        <div className="">
          <label>
          Descrição:
          <input name="descricao" type="text" className="texteare" />
          </label>
          <label >
          <button type="submit" value="Salvar Despesa" className="button-submit" >
            Salvar Receita
          </button>
          </label>
          
       
        </div>
     
        
      </Form>
      
    </ReceitasContainer>  
  
    )

}

export default ReceitasControl