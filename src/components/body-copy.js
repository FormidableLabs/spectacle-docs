import styled from "styled-components";

export const BodyCopy = styled.p`
  font-family: Helvetica;
  font-size: 1.2rem;
  line-height: 1.5;
  color: #4e4e4e;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 768px) {
    p {
      text-align: center;
    }
  }
`;
