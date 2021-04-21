import React, {useEffect, useState, createContext, useContext} from 'react';

import {db} from '../../src/firebase';
import { AuthContext } from './AuthContext';






export default {

  addTeste: async(u, setReceitasOnlineA, receitasOnlineA) => {
    db.collection('users').doc(u.email).collection('receitas')
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          let floatValue = parseFloat(doc.data().value);
          setReceitasOnlineA(receitasOnlineA+floatValue)
        
        });  
    } 
    )
  }
}
  // const { user } = useContext(AuthContext);

  // const[salary, setSalary] = useState(0);

