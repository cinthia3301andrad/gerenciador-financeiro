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
  padding: 0px 5px;

  .online {
    display: flex;
    margin: 5px 0 0 10px;
  }
  .sidebar-header {
    padding: 30px 25px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    color: #6c757d;
  }
  h3 {
    font-size: 0.7rem;
    margin: 0 0 0 10px;
    font-weight: 500;
    color: #6c757d;
  }
  .sidebar-general {
    display: flex;
    flex-direction: column;
    margin: 0px 0 0 0;
   
    width: 100%;
   
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;


  }
  li {
    border-radius: 0 10px 10px 0;
    text-transform: capitalize;
    margin: 10px 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
   
    list-style:none;
    padding: 0 0 0 10px;
   
    &:hover { 
      background: rgba(58,	200,	191, 0.1);
      cursor: pointer;
    }

    p {
      font-family: Poppins;
      font-size: 1.1rem;
      color: #081439;
      margin: 0 0 0 7px;
    }
  }

  
`;