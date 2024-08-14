import React from "react";
import styled from "styled-components";

const ModalBoxStyle = styled.div`
  height: 500px;
  width: 100%;
  margin: 100px 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal__container {
    border: solid 1px #888;
    border-radius: 5px;
    box-shadow: 10px 10px 10px #999;
    width: 400px;
    height: 500px;
    padding: 20px;
  }
`;

export default function ModalBox(props) {
  return (
    <ModalBoxStyle>
      <div className="modal__container">
        <div> Modal Box Contianer </div>
        <div> Project Image </div>
        <div> Project Name </div>
        <div> Project Description </div>
        <div> Project Demo video </div>
      </div>
    </ModalBoxStyle>
  );
}
