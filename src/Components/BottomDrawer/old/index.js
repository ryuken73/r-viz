import React from 'react';
import styled from 'styled-components';
import { css } from "emotion";
import Drawer from 'react-drag-drawer';


function BottomDraw(props) {
  const {drawOpen=false, backgroundColor='black', toggleDrawer, children} = props;
  const ModalElement = css`
    position: absolute;
    top: 50px;
    background-color: ${backgroundColor};
    width: 95vw;
    max-width: 700px;
    min-height: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    text-align: center;

    @media (max-width: 767px) {
      width: 95vw;
    }
  `
  return (
    <Drawer
      open={drawOpen}
      onRequestClose={toggleDrawer}
      modalElementClass={ModalElement}
    >
      {children}
    </Drawer>
  )
}

export default React.memo(BottomDraw)
