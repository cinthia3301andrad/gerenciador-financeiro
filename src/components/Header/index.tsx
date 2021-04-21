import React from 'react'

import {  BiLogOutCircle  } from 'react-icons/bi';


import { HeaderContainer } from './styles'
import {db, authConfig} from '../../firebase'
const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="colun">
        <h1>GF Light</h1>
        <div className="line"></div>
      </div>
      <div className="colun">
      <button onClick={() => authConfig.auth().signOut()} className="LogOutCircle">Sair <BiLogOutCircle/></button>

      </div>
     
       
    </HeaderContainer>
    )

}

export default Header;