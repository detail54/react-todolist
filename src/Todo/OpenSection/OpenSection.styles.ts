import Styled from 'styled-components';

const OpenSection = Styled.div`
  width: 500px;
  height: 700px;
  max-height: 700px;
  border-left: 3px dashed gray;
  border-right: 3px dashed gray;

  .open-section-close-button-div {
    margin-top: 5px;
    display: flex;
    justify-content: right;
    align-items: center;

    button {
      font-size: 25px;
      background: none;
      border: none;
      color: #85999e;
      cursor: pointer;
    }

    button:hover {
      color: #c2d1d4;
    }
  }

  .open-section-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0px;

    span {
      display: block;
      border-radius: 10px;
      background: #d1cece;
      color: white;
      padding: 30px;
      font-size: 30px;
    }
  }

  .open-section-body {

  }
  
`;

export const OpenSectionStyles = {
  OpenSection,
}