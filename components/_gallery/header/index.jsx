import styled from "styled-components";
import React from "react";

import Animation from "./animation";

export default function HeaderComponent() {
    return (
    <Container>
        <Animation />
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