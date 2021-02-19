import React, { useEffect, useState } from 'react'
import AccountBox from '../../components/accountBox';



import {db} from '../../firebase'
import { HomeContainer } from './styles';
const Home: React.FC = () => {
  const initialState = {
    url: "noe",
    name:"ueaue",
    description: "aduaufu",
  }
  const [name, setName] = useState(initialState);
   const handleEnviar = async() => {
     await db.collection("teste").doc().set(initialState)
    console.log("add taks")

    
  }
  useEffect(() => {
     db.collection("teste").doc().set(initialState)
    console.log("add taks")
  }, [])
  return (
    <HomeContainer>
      <AccountBox/>

    </HomeContainer>
  )
   

}

export default Home