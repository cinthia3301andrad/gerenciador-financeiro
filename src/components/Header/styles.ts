import styled from "styled-components"


export const HeaderContainer = styled.header`
  width: 100%;
  height: 83px;
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #1b2f6b 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 25px 25px;
  opacity: 1;
  padding: 0px 50px;

  h1 {
    color: #fff;
    font-size: 2rem;
    font-family: Poppins, Helvetica, sans-serif;
    font-weight: 500;
  }
  .line {
    margin: 0 20px;
    height: 35px;
    border-left: 2px solid #fff;
}
`;