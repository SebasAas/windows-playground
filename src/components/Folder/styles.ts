import { AppDispatch } from './../../store/store';
import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  top: 60px;
  left: 180px;
  min-height: 400px;
  min-width: 500px;
  height: 520px;
  width: 700px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 3px;
  float: left;
  z-index: 2;
  cursor: auto;
  resize: both;
  overflow: hidden;
`;

export const Span = styled.span`
  cursor: move;

  /* > * {
      &:first-child {
        width: 70%;
        display: flex;
        justify-content: center;
      }
    } */

  div {
    &:first-child {
      width: 70%;
      display: flex;
      justify-content: center;
    }

    &:last-child {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 0 5px;
      width: auto;
      height: 35px;
      background: rgba(255, 255, 255, 0.95);
      /* backdrop-filter: blur(4px); */

      span {
        height: 25px;
        width: 12px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 10px;
      }
    }
  }
`;

export const Details = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  height: calc(100% - 35px);
  overflow-y: auto;

  /* > * {
    &:first-child {
      width: 25%;
      padding: 0 5px;
      border-right: 1px solid #d9d9d9;
    }

    &:last-child {
      width: 75%;
      padding-left: 25px;

      h1 {
        font-weight: 400;
        font-size: 1.45rem;
        line-height: 27px;
        color: #3f3f3f;
      }
    }
  } */

  div {
    width: 100%;
  }
`;

export const EmptyFolder = styled.div`
  width: 100%;
  height: calc(100% - 25px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Files = styled.div`
  height: 40px;
  margin: 20px 0;

  div {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 10px 0;

    &:hover {
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(189, 189, 189, 0.75) 100%,
        rgba(222, 221, 221, 0.75) 100%,
        rgba(189, 189, 189, 0.75) 100%
      );
    }

    img {
      height: 100%;
    }

    p {
      margin-left: 10px;
    }
  }
`;

export const Application = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  overflow-y: scroll;

  h1 {
    font-weight: 500;
    font-size: 1.45rem;
    line-height: 27px;
    color: #3f3f3f;
    text-align: center;
    margin-bottom: 20px;
  }

  img {
    height: auto;
    max-height: 300px;
    width: 100%;
    max-width: 800px;
    object-fit: contain;
    margin-bottom: 20px;
  }

  p {
    width: 70%;
    max-width: 600px;
    margin-bottom: 10px;
  }
`;
