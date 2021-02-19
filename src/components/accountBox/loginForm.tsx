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

export function LoginForm() {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
    <FormContainer>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Senha" />
    </FormContainer>
    <Marginer direction="vertical" margin={5} />
    
    <Marginer direction="vertical" margin="1.6em" />
    <SubmitButton type="submit">Entrar</SubmitButton>
    <Marginer direction="vertical" margin="1em" />
    <MutedLink href="#">
      Não tem uma conta?
      <BoldLink href="#" onClick={switchToSignup}>
        Click aqui
      </BoldLink>
    </MutedLink>
  </BoxContainer>
  );
}