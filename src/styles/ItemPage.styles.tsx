import styled from "styled-components";

export const ItemPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  height: 100vh;
  padding: 60px 20px;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  box-shadow: 1px 1px 14px 1px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.66);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const ItemPageContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 60%;
  margin: 0 auto;

  button {
    color: #999;
    align-self: left;
    width: 100%;
    border: none;
    margin-bottom: 30px;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 600;
    padding: 10px;
    text-align: left;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    transition: 0.3s ease;
    cursor: pointer;
    cursor: hand;

    &:hover {
      color: #000;
    }
  }

  img {
    width: 30%;

    @media (max-width: 500px) {
      width: 50%;
    }
  }

  p {
    font-size: calc(16px + 2 * ((100vw - 320px) / 680));
    font-weight: 400;
    margin: 0;
    text-align: left;

    span {
      font-size: calc(11px + 2 * ((100vw - 320px) / 680));
      font-weight: 600;
      color: #9b9b9b;
    }
  }

  a {
    background-color: #000;
    color: #eee;
    border-radius: 0.5rem;
    font-size: calc(12px + 2 * ((100vw - 320px) / 680));
    font-weight: 400;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none #d1d5db solid;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0);
    transition: 0.3s ease;
    width: 260px;

    &:hover {
      color: #000;
      background-color: #fff;
    }
  }
`;
