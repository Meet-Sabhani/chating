import styled from "styled-components";
import Theme from "./theme";

export const SingUpWrapper = styled.div`
  background-color: ${Theme.colors.skypeBlue};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .formWrapper {
    background-color: ${Theme.colors.white};
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    h3 {
      color: ${Theme.colors.logo};
    }

    p {
      color: ${Theme.colors.black};
    }

    form {
      display: flex;
      gap: 10px;
      flex-direction: column;

      input {
        border: none;
        /* outline: none; */
        border-bottom: 1px solid ${Theme.colors.p};
        width: 250px;
        padding: 10px 20px;
        font-size: 16px;

        &::placeholder {
          color: ${Theme.colors.placeHolder};
        }
      }

      label {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        cursor: pointer;
        color: ${Theme.colors.btnBg};
        transition: 0.3s ease-in-out;
        &:hover {
          color: ${Theme.colors.skypeBlue};
        }

        i {
          font-size: 30px;
        }
      }

      button {
        padding: 10px;
        background-color: ${Theme.colors.darkBlue};
        border: none;
        color: ${Theme.colors.white};
        font-weight: bold;
      }
    }
  }
`;
