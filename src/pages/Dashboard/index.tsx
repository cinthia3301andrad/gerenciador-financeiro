import React, { useContext, useEffect, useState } from 'react'
import {db} from '../../firebase';

import DespesasControl from '../../components/DespesasControl'
import Header from '../../components/Header'

import { RiDashboardLine  } from 'react-icons/ri';
import { BsGraphUp  } from 'react-icons/bs';
import {  VscGraph  } from 'react-icons/vsc';
import {  HiOutlineStatusOnline  } from 'react-icons/hi';

import {authConfig} from '../../firebase'

import {NavContainer, DashboardContainer, MainContainer, SidebarHeader, SectionContainer} from './styles'
import ReceitasControl from '../../components/ReceitasControl';
import { AuthContext } from '../../auth/AuthContext';
import controll from '../../auth/controll.js';

const Dashboard: React.FC = () => {

  


  const[currentUser, setCurrentUser] = useState<string | null>();
  const[dashboardOnline, setDashboardOnline] =  useState(false);
  const[despesasOnline, setDespesasOnline] =  useState(false);
  const[receitasOnline, setReceitasOnline] =  useState(true);
  const[receitasOnlineA, setReceitasOnlineA] =  useState(0);
  const[currentBalance, setCurrentBalance] = useState(0);
  const[currentExpense, setCurrentExpense] = useState(0);


  const { user } = useContext(AuthContext);
  var userAuth = authConfig.auth().currentUser;

  const[loading, setLoading] = useState(false)

  useEffect(()=> {
    async function handleAddReceitas() {
      await  controll.addTeste(user, setReceitasOnlineA, receitasOnlineA)
      db.collection('users').doc(user.email).update({
        salario: receitasOnlineA,
      });
      db.collection('users').doc(user.email)
      .get()
      .then(function(doc) {
        setReceitasOnlineA( doc.data()?.salario);
          setLoading(true)
          console.log(receitasOnlineA)
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
    
    }
 
  handleAddReceitas()
   
  }, [currentBalance])
 

  function handleClickDashboard() {
    setDashboardOnline(true);
    setDespesasOnline(false)
    setReceitasOnline(false)
  }
  function handleClickDespesas() {
    setDashboardOnline(false);
    setDespesasOnline(true)
    setReceitasOnline(false)
  }
  function handleClickReceitas() {
    setDashboardOnline(false);
    setDespesasOnline(false)
    setReceitasOnline(true)
  }

  return (
  <DashboardContainer>
    <Header/>
    <MainContainer>
      <NavContainer>
        <SidebarHeader>
          <div className="sidebar-header">
            <h2>{receitasOnlineA}</h2>
            <div className="online">
              <HiOutlineStatusOnline/>
              <h3>Olá! Você está online</h3>
            </div>

          </div>
          <div className="sidebar-general">
          <ul>
          <li onClick={() => handleClickDashboard()}>
            <RiDashboardLine/>
            <p>Dashboard</p>
              
            </li>
            <li  onClick={() => handleClickReceitas()}>
              <BsGraphUp/>
              <p>Rendimentos</p>
              
            </li>
            <li  onClick={() => handleClickDespesas()}>
              <VscGraph/>
              <p>Despesas</p>
              
            </li>
          </ul>
          </div> 
        </SidebarHeader>
        
      </NavContainer>
      <SectionContainer>
        {
          dashboardOnline ? <p>SEU SALDO: {receitasOnlineA}</p> 
          : despesasOnline? <DespesasControl 
           receitas={receitasOnlineA} setReceitas={setReceitasOnlineA} despesas={currentExpense} setDespesas={setCurrentExpense}/> 
          : receitasOnline===true&&loading===true? <ReceitasControl salary={0} currentBalance={currentBalance} setCurrentBalance={setCurrentBalance}
           receitas={receitasOnlineA} setReceitas={setReceitasOnlineA}
         
          /> : <h1>carregando...</h1>
        }

      </SectionContainer>

     
    </MainContainer>
  </DashboardContainer>
  
  
    )

}

export default Dashboard