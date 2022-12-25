import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px auto;

  ul {
    list-style: none;
    width: 80%;
    padding: 0;
    margin: 0 auto;

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      align-content: flex-end;
      border-radius: 20px;
      padding: 20px;
      margin-bottom: 20px;
      background-color: rgba(255, 255, 255, 0.4);
      transition: 0.3s ease;
      color: #666666;

      font-size: calc(14px + 2 * ((100vw - 320px) / 680));
      box-shadow: 1px 1px 1x 1px rgba(0, 0, 0, 0);
      cursor: pointer;
      cursor: hand;

      &:hover {
        color: #000;
        background-color: rgba(255, 255, 255, 0.75);
        box-shadow: 1px 1px 8px 1px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 2;

        h2 {
          color: #000;
        }

        p span {
          color: #000;
        }
      }

      a {
        text-decoration: none;
        width: 100%;
      }
    }
  }
`;

export const ListPageItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  h2 {
    font-size: calc(20px + 2 * ((100vw - 320px) / 680));
    color: #777;
    width: 100%;
    font-weight: 400;
    transition: 0.3s ease;
  }

  img {
    transition: 0.3s ease;
    width: 10%;
    height: 10%;
    margin-right: 20px;

    @media (max-width: 800px) {
      width: 30%;
    }
  }

  p {
    display: flex;
    justify-content: end;

    width: 100%;
    color: #ccc;
    font-size: calc(16px + 2 * ((100vw - 320px) / 680));

    span {
      justify-content: end;
      transition: 0.3s ease;
      transform: scaleX(0.5);
      font-weight: 600;
    }
  }
`;

export const WrapPaginationBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 30px 0;
`;

export const PaginationBtns = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: center;

  p {
    color: #999;
    margin: 0 10px;
  }

  button {
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 6px;
    margin-right: 6px;
    text-align: center;

    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: 0.3s ease;

    :disabled {
      pointer-events: none;
      opacity: 0.75;
      background-color: rgba(0, 0, 0, 0);
    }

    &:hover {
      background-color: #fff;

      img {
        opacity: 0.5;
      }
    }
  }
`;
