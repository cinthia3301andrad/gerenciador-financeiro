import styled from "styled-components"


export const DashboardContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
 
`;
export const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ebf2ff;
  font-family: Poppins, Helvetica, sans-serif;
 
  
`;
export const NavContainer = styled.nav`
  width: 30%;
  max-width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #F6F9FF;
  border-right: 1px #00000029 solid;
  
`;
export const SectionContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
 

  
`;
export const SidebarHeader = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 30px 25px;

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    color: #6c757d;
  }

  
`;