import styled from "styled-components";
import Theme from "./theme";

export const SidebarStyle = styled.div`
  .sidebar {
    flex: 1;
    background-color: ${Theme.colors.chatBg};
    color: ${Theme.colors.white};
    height: 100%;
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      gap: 10px;
      height: 50px;
      background-color: ${Theme.colors.navbarBg};
      color: ${Theme.colors.navbarC};

      h2 {
        font-weight: bold;
      }

      .nav-right {
        display: flex;
        align-items: center;
        gap: 10px;

        img {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          object-fit: cover;
        }
        button {
          border: none;
          /* outline: none; */
          padding: 10px;
          background-color: ${Theme.colors.btnBg};
          color: ${Theme.colors.navbarC};
        }
      }
    }

    .search {
      width: 100%;

      .search-input {
        width: 100%;

        input {
          /* width: 100%; */
          border: none;
          outline: none;
          padding: 10px 20px;
          font-size: 1rem;
          background-color: transparent;
          border-bottom: 1px solid #eee;
          color: ${Theme.colors.white};

          &::placeholder {
            color: ${Theme.colors.placeHolder};
          }
        }
      }
    }
    .chats {
      height: calc(100% - 105px);
      overflow-y: scroll;
    }
    .userChat {
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 10px 20px;
      cursor: pointer;

      &:hover {
        background-color: ${Theme.colors.navbarBg};
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      .userChatIno {
        h3 {
          font-weight: 500;
          font-size: 18px;
        }
        p {
          font-size: 14px;
          color: ${Theme.colors.navbarC};
        }
      }
    }
  }
`;
