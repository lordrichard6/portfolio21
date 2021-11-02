import styled from 'styled-components'
import Image from "next/image";

import { Variables } from '../../../assets/variables'
import { ProgressBar } from './progressBar'
import logo from '../../../public/icon.png'

export default function SkillsExp() {
    return (
        <SectionContainer>
            <LeftSection>
                <InnerSection>
                    <Title>Skills &<br />Experience</Title>
                    <p>
                        Based on my personal choice and time spent learning, I have stronger skills on the front-end,
                        the visual aspect is of big importance and on that I feel like a Monet looking to create my
                        Lady with the Umbrella. <br/>
                        I have learned HTML and CSS, then went on to Javascript, then Sass. I decided to go to React as
                        my framework(library) of choice, not because of it`s popularity, but because of it`s component
                        based structure and workflow. <br/>
                        But anyway, i don`t mean to leave you on a cliffhanger but if you
                        want to hear more about my learning path and work experience, feel free to contact me.

                    </p>
                </InnerSection>
                <Image src={logo} alt="logo" />
            </LeftSection>
            <RightSection>
                <InnerSection>
                    <SkillsContainer>
                        <h2>Front-End</h2>
                        <ProgressBar completed={80} />
                        <h2>Back-End</h2>
                        <ProgressBar completed={30} />
                        <h2>UX & UI</h2>
                        <ProgressBar completed={70} />
                        <h2>React.js</h2>
                        <ProgressBar completed={80} />
                    </SkillsContainer>
                    <ExperienceContainer>
                        <h2>Front-End</h2>
                        <h3>Feinheit</h3>
                        <p>2019 - 2020</p>
                        <p>
                            An Agency for webdesign,
                            online markting, 
                            campaining, social media,
                            CMS and IT Infrastructure.
                        </p>
                    </ExperienceContainer>
                </InnerSection>
            </RightSection>
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    width: 80%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    color: ${Variables.primary};
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;

        /* flex-col
        self-center
        overflow-x-hidden
        overflow-y-hidden
        my-12
        lg:my-20
        lg:mx-20
        lg:px-20      */

`

const LeftSection = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    img {
        position: absolute;
        z-index: -1;
        display: flex;
        align-self: center;
        justify-self: center;
        opacity: 0.1;
    }
`

const RightSection = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    h2 {
        font-weight: 600;
    }
`

const InnerSection = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    p {
        font-size: 1.25rem;
    }


        /* 2xl:w-4/5 */
        /* px-8 */
        /* lg:px-8 */
        /* self-center */
`



const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: center;
`

const ExperienceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    background-color: #D1D5DB;
    padding: 1rem;
    margin-top: 2rem;
    h2 {
        margin-top: 0;
    }

    h3 {
        color: rgba(107,114,128);
        margin: 0;
    }
    p {
        color: rgba(107,114,128);
        margin: 0;
    }


        /* mt-12
        px-4 */
`

const Title = styled.h1`
    margin-top: 0;
    font-size: 4rem;
    font-weight: 400;
`

