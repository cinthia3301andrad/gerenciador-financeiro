import React from 'react'
import DespesasControl from '../../components/DespesasControl'
import Header from '../../components/Header'

import {NavContainer, DashboardContainer, MainContainer, SidebarHeader, SectionContainer} from './styles'
const Dashboard: React.FC = () => {
  return (
  <DashboardContainer>
    <Header/>
    <MainContainer>
      <NavContainer>
        <SidebarHeader>
          <h2>Usuário</h2>
          
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