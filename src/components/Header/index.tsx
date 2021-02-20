import React from 'react'
import { HeaderContainer } from './styles'
import {db, authConfig} from '../../firebase'
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>GF Light</h1>
      <div className="line"></div>
      <button onClick={() => authConfig.auth().signOut()} className="Sair">Sair</button>
       
    </HeaderContainer>
    )

}

export default Header;