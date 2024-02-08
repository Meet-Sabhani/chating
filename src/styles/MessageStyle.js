import styled from "styled-components";
import Theme from "./theme";

export const MessageStyle = styled.div`
  background-color: ${Theme.colors.navbarC};
  height: calc(100% - 169px);
  overflow-y: scroll;
  padding: 20px;

  .message {
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 10px;

    .messageInfo {
      display: flex;
      flex-direction: column;
      gap: 5px;

      img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .messageContent {
      max-width: 80%;
      display: flex;
      flex-direction: column;
      gap: 10px;

      p {
        background-color: ${Theme.colors.white};
        padding: 10px 20px;
        border-radius: 0 10px 10px 10px;
        max-width: max-content;
      }

      img {
        height: 200px;
      }
    }
    &.owner {
      flex-direction: row-reverse;

      align-items: flex-end;
      .messageContent {
        p {
          background-color: ${Theme.colors.skypeBlue};

          color: white;
          max-width: max-content;
        }
      }
    }
  }
`;
