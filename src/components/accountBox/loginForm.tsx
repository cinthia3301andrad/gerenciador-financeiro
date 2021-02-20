import React, { useCallback, useContext } from "react";

import { Marginer } from "./marginer";
import { AccountContext } from "./accountContext";
import { Redirect, withRouter } from "react-router-dom";
import {authConfig} from '../../firebase';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./styledCommon";
import { AuthContext } from "../../auth/AuthContext";
toast.configure();

  export const LoginForm = withRouter((props: any) =>  {
  const { switchToSignup } = useContext(AccountContext);

  const {history} = props;


  const loginHandler = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;

      try {
        await authConfig
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/dashboard');
      } catch (error) {
        var errorCode = error.code;
        console.log(errorCode)
        
        if(errorCode === "auth/wrong-password") {
          toast.warn('Ops, senha inválida!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      } if(errorCode === "auth/user-not-found") {
        toast.warn('Ops, usuário inválido!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
      else {
        toast.error('Ops, ocorreu um erro com os dados!', {
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
    },
    [history],
  );
  const { user } = useContext(AuthContext);
  if (user) {
    return <Redirect to="/dashboard" />;
  }
 
  return (
    <BoxContainer>
    <FormContainer onSubmit={loginHandler}>
      <Input name="email" type="email" placeholder="Email" />
      <Input name="password" type="password" placeholder="Senha" />
      <SubmitButton type="submit">Entrar</SubmitButton>
    </FormContainer>
    <Marginer direction="vertical" margin={5} />
   
    
    <Marginer direction="vertical" margin="1.6em" />
  
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Não tem uma conta?
      <BoldLink href="#" onClick={switchToSignup}>
        Click aqui
      </BoldLink>
    </MutedLink>
  </BoxContainer>
  );
} )