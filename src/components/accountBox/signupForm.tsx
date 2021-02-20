import React, { useContext, useCallback } from "react";
import {withRouter} from 'react-router-dom';
import {authConfig} from '../../firebase';

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./styledCommon";
import { Marginer } from "./marginer";
 import { AccountContext } from "./accountContext";

export const SignupForm = withRouter((props: any) =>  {
  const {history} = props;
  const { switchToSignin } = useContext(AccountContext);

  const signUpHandler = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;
      //  console.log(event.target.elements.password.value)
      try {
        await authConfig
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push('/teste');
      } catch (error) {
        console.log(error);
        alert('Algo deu errado. O campo de e-mail e senha está preenchido?');
      }
    }
    ,
    [history],
  );

  return (
    <BoxContainer>
      <FormContainer onSubmit={signUpHandler}>
        <Input name="Nome" type="text" placeholder="Seu nome" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme sua senha" />
        <SubmitButton type="submit">Criar</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
     
      <Marginer direction="vertical" margin="0.5em" />
      <MutedLink href="#">
        Já tem uma conta?
        <BoldLink href="#" onClick={switchToSignin}>
          Entrar
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
} )