import styled from "styled-components"


import { motion } from "framer-motion";

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1em;

  margin:15px 0 0 0;
`;

export const BoxContainer = styled.section `
  width: 300px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`
export const TopContainer = styled.div `
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
 
`

export const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(15,135,218);
  background: linear-gradient(112deg, rgba(15,135,218,1) 0%, rgba(0,172,255,0.9920343137254902) 52%, rgba(82,185,238,1) 100%);
`;
export const HeaderContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
 
`
export const HeaderText = styled.h2 `
  font-family: Poppins;
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.24;
  color: #fff;
  position: absolute;
  top: 50px;
  left: 25px;
  z-index: 10;
  margin: 0;
 
`
export const SmallText = styled.h3`
  font-family: Poppins;
  color: #fff;
  font-weight: 500;
  font-size: 0.9rem;
  z-index: 10;
  margin: 5px 0 0 0;
  position: absolute;
  top: 30%;
  left: 25px;
 
`;

