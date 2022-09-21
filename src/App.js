import React from "react";
import Navbarari from "./components/navbar";
import Main from "./components/main";
import styled from "styled-components";
const DIVM = styled.div`
  min-height: 60vh;
`;
export default function App() {
  return (
    <React.Fragment>
      <Navbarari />
      <DIVM>
        <Main />
      </DIVM>
    </React.Fragment>
  );
}
