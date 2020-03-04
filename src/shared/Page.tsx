import styled from 'styled-components';

const Page = styled.section`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  
  min-width: 100%;
  min-height: 100%;
  overflow: auto;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.background.primary};
  padding: ${({ theme }) => theme.spacing.large}px;
`;

export default Page;
