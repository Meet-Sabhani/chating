import styled from "styled-components";
import Theme from "./theme";

export const ChatStyle = styled.div`
  flex: 2;
  width: 100%;
  background-color: ${Theme.colors.lightGrey};

  .chatInfo {
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: ${Theme.colors.btnBg};
    color: ${Theme.colors.lightGrey};
    align-items: center;
    padding: 10px 20px;
    .icons {
      display: flex;
      gap: 10px;
    }
  }

  .input {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    input {
      width: 100%;
      padding: 10px;
      border: none;
      /* outline: none; */
      font-size: 17px;

      &::placeholder {
        color: ${Theme.colors.placeHolder};
      }
    }
    .send {
      display: flex;
      gap: 10px;
      align-items: center;
      i {
        height: 24px;
        cursor: pointer;
      }
      button {
        padding: 10px 15px;
        border: none;
        color: ${Theme.colors.white};
        background-color: ${Theme.colors.btnBg};
      }
    }
  }
`;
