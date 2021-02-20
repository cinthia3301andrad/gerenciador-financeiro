import React, { useEffect, useState } from 'react'
import DespesasControl from '../../components/DespesasControl'
import Header from '../../components/Header'

import {authConfig} from '../../firebase'

import {NavContainer, DashboardContainer, MainContainer, SidebarHeader, SectionContainer} from './styles'
const Dashboard: React.FC = () => {

  const[currentUser, setCurrentUser] = useState<string | null>();

  var user = authConfig.auth().currentUser;

  useEffect(()=> {
    if (user != null) {
     setCurrentUser(user.email)
    }

  }, [])

  return (
  <DashboardContainer>
    <Header/>
    <MainContainer>
      <NavContainer>
        <SidebarHeader>
          <div className="sidebar-header">
            <h2>{currentUser}</h2>
            <h3>Olá! Você está online</h3>
          </div>
          <div className="sidebar-general">
          <ul>
          <li>
              Dashboard
              
            </li>
            <li>
              Rendimentos
              
            </li>
            <li>
              Despesas
              
            </li>
          </ul>
          </div>
         
          
        </SidebarHeader>
        
      </NavContainer>
      <SectionContainer>
        <DespesasControl/>
      </SectionContainer>

     
    </MainContainer>
  </DashboardContainer>
  
  
    )

}

export default Dashboard