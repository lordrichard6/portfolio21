import styled from 'styled-components'
import Image from "next/image";
import Link from 'next/link'

import { Colors } from '../assets/variables'
import logo from '../public/icon.png'

export default function Page404() {
    return (
            <PageContainer>
                <Link href='/'><a><Image src={logo} alt="logo" height={300} width={300} /></a></Link>
                <Title>Coming Soon</Title>
                <Title>Be Patient!!</Title>
            </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
        margin: 0;
        color: ${Colors.primary};
        font-size: 3.25rem;
        font-weight: 400;
        letter-spacing: 0.1em;
`
