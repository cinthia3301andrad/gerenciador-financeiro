import React, { useContext } from "react";
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

export function SignupForm(props: any) {
   const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Seu nome" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Input type="password" placeholder="Confirme sua senha" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Criar</SubmitButton>
      <Marginer direction="vertical" margin="0.5em" />
      <MutedLink href="#">
        Já tem uma conta?
        <BoldLink href="#" onClick={switchToSignin}>
          Entrar
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}