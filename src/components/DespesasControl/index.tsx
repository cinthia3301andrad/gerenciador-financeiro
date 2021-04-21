import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../auth/AuthContext';

import { db} from '../../firebase';

import { DespesasContainer, Form } from './styles'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

interface ReceitasProps {
  setDespesas(bool: any): void;
  despesas: number;
  setReceitas(bool: any): void;
  receitas: number;
 
}

const DespesasControl: React.FC<ReceitasProps> = ({receitas,setReceitas, despesas,setDespesas}) => {
  const { user } = useContext(AuthContext);
  const[despesasControll, setDespesasControll] = useState(despesas);

  async function handleAddDespesas(event: any) {
     event.preventDefault();
    const { nome, valor, categoria, data, descricao } = event.target.elements;

    try {
      await db.collection('users').doc(user.email).collection('despesas').doc().set({
        name: nome.value,
        value: valor.value,
        category: categoria.value,
        date: data.value,
        description: descricao.value
      })
      
      toast.success('Despesa adicionada!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        setDespesasControll(data.value)
        // event.reset()

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

// useEffect(() => {
//   if (user != null) {
//   db.collection('users').doc(user.email).collection('despesas')
//   .get()
//   .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         let floatValue = parseFloat(doc.data().value);
//         setDespesas(despesas+floatValue);
       
//       });
//   })
//   .catch((error) => {
//       console.log("Error getting documents: ", error);
//   });
// }
// setReceitas(receitas-despesas);
// }, [despesasControll])

  return (
    <DespesasContainer>
      <div className="header-title">
        <h1>Nova Despesa</h1>
        <h2>
        Saldo atual: R$ {receitas.toLocaleString('pt-BR')}
        </h2>
      </div>
     
      <Form onSubmit={(event) => handleAddDespesas(event)}>
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
            Salvar Despesa
          </button>
          </label>
          
       
        </div>
     
        
      </Form>
      
    </DespesasContainer>  
  
    )

}

export default DespesasControl