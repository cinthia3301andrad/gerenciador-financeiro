import styled from "styled-components"


export const DespesasContainer = styled.section`
  width: 70%;
  height: 70%;
  max-height: 700px;
  max-width: 750px;
  margin: 35px 0 0 0 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid #d8d8d8;
  background: #F6F9FF;
  font-family: Poppins;

  h1 {
    color: #7e889f;
    font-size: 1.7rem;
  }
  h2 {
    color: #494949;
    font-size: 1rem;
    font-weight: 500;
    
  }
  .header-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    margin: 25px 0 0 0 ;
    


  }
 
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;

  width: 100%;
  height: 80%;
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 5px 0;
    width: 85%;

  }
  input, .textarea, .button-submit  {
    width: 100%;
    height: 42px;
    outline: none;
    padding: 0px 5px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 0.9rem;
    border: 2px solid #D1D2D6;
    border-radius: 5px;
    opacity: 1;
    
  }
  label {
    display: flex;
    flex-direction: column;
    width: 49%;
    margin: 0;
    color: #4D4F6C;
 
  
  }
  .texteare {
    resize: none;
    height: 150px;
  }
  .button-submit {
    color: #fff;
    border: none;
    background: #0494c7;
    font-size: 1rem;
    font-weight: 500;

  }


 
`;