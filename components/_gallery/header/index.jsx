import styled from "styled-components";
import React from "react";

import Animation from "./animation";
import TitleComponent from "./title";
import BackgroundComponent from './background'

export default function HeaderComponent() {
    return (
    <Container>
        <TitleComponent />
        <BackgroundComponent />
        {/* <Animation /> */}
    </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
`