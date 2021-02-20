import React, {useEffect, useState, createContext} from 'react';
import {authConfig} from '../firebase'


export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const {children} = props;
  const[user, setUser] = useState(null);
  const[loading, setLoading] = useState(true);

  useEffect(()=>{
    authConfig.auth().onAuthStateChanged((userAuth) => {
      setUser(userAuth);
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <> Carregando </>
  }

  return (
    <AuthContext.Provider value={{user}}>
      {children}
    </AuthContext.Provider>
  )
}