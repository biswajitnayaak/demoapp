import styled from 'styled-components';

export const AppModal = ({ children, isOpen }) => {
    if (!isOpen) return null;
  
    return (
      <StyledModal>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModal>
    );
  }
  export default AppModal;

const StyledModal = styled.div`
     align-items: center;
     justify-content: center;
    position: fixed;
    display: flex;
    flex-direction: column;
    
  `;
  
  const StyledModalContent = styled.div `
  padding-top: 10rem;
    width: 400%;
    display: flex;
    align-items: left;
  `;