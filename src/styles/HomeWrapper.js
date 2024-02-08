import styled from "styled-components";
import Theme from "./theme";

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${Theme.colors.skypeBlue};

  .container {
    width: 80%;
    height: 80%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
  }
`;
