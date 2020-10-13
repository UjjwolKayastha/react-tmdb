import styled from 'styled-components';

export const Wrapper = styled.button`
   display: block;
   background: var(--darkGrey);
   width: auto;
   min-width: 200px;
   height: 60px;
   border: 0;
   font-size: var(--fontBig);
   margin: 20px auto;
   color: var(--white);
   border-radius: 30px;
   outline: none;
   cursor: pointer;

   :hover {
       opacity: 0.8;
   }

   @media screen and (max-width: 720px){
        height: 30px;
        min-width: 120px;
        font-size: var(--fontMed);
   }
`;