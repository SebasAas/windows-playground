import styled from 'styled-components';

export const FileMinature = styled.div`
  display: inline-block;
  border-radius: 1px;
  width: 80px;
  margin: 10px;
  z-index: 1;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(182, 218, 248, 0.363);
  }
`;

export const FileImage = styled.img`
  height: 45px;
  width: 45px;
`;

export const FileText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-shadow: 0.5px 0.5px 0px rgba(0, 0, 0, 0.3);
`;
