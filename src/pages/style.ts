import styled from "styled-components";

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 80%;
  margin: 0 auto;
  margin-top: 116px;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    margin-top: 18px;
  }
`;



