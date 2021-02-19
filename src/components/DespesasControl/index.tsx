import React from 'react'
import Header from '../../components/Header'
import { DespesasContainer, Form } from './styles'

const DespesasControl: React.FC = () => {
  return (
    <DespesasContainer>
      <div className="header-title">
        <h1>Nova Despesa</h1>
        <h2>
          Saldo atual: R$aqui000
        </h2>
      </div>
     
      <Form onSubmit={() => console.log("Eviou")}>
        <div className="">
          <label>
            Nome:
            <input type="text"  />
          </label>
          <label>
            Valor R$:
            <input min="1" type="number"  />
          </label>
        </div>
        <div className="">
          <label>
            Categoria:
            <input type="text"  />
          </label>
          <label>
            Data:
            <input type="date"  />
          </label>
        </div>
        <div className="">
          <label>
          Descrição:
          <input type="text" className="texteare" />
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