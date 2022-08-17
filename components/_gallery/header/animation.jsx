import styled from "styled-components";
import React from "react";
import Image from "next/image";

import header from "../../../assets/images/gallery/gallery.jpg";

export default function Animation() {
    return (
    <Container>
        <div className="animation01">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className="animation02">
        <div></div>
        <div></div>
    </div>
    <div className="animation03">
        <div className="circle">
            <div className="circle_element01"></div>
        </div>
        <div className="circle">
            <div className="circle_element02"></div>
        </div>
        <div className="circle">
            <div className="circle_element03"></div>
        </div>
        <div className="animation04">
            <div className="line_wrapper line_wrapper01">
                <span className="line line01"></span>
            </div>
            <div className="rotate45">
                <div className="line_wrapper line_wrapper02">
                    <span className="line line02"></span>
                </div>
            </div>
            <div className="line_wrapper line_wrapper03">
                <span className="line line03"></span>
            </div>
            <div className="rotate135">
                <div className="line_wrapper line_wrapper04">
                    <span className="line line04"></span>
                </div>
            </div>
            <div className="line_wrapper line_wrapper05">
                <span className="line line05"></span>
            </div>
            <div className="rotate-135">
                <div className="line_wrapper line_wrapper06">
                    <span className="line line06"></span>
                </div>
            </div>
            <div className="line_wrapper line_wrapper07">
                <span className="line line07"></span>
            </div>
            <div className="rotate-45">
                <div className="line_wrapper line_wrapper08">
                    <span className="line line08"></span>
                </div>
            </div>
        </div>
        <div className="animation05">
            <div className="double_wrapper02 green02">
                <div className="double_wrapper01 green01">
                    <div className="double_block green00"></div>
                </div>
            </div>
            <div className="double_wrapper02 navy02">
                <div className="double_wrapper01 navy01">
                    <div className="double_block navy00"></div>
                </div>
            </div>
            <div className="double_wrapper02 yellow02">
                <div className="double_wrapper01 yellow01">
                    <div className="double_block yellow00"></div>
                </div>
            </div>
            <div className="double_wrapper02 blue02">
                <div className="double_wrapper01 blue01">
                    <div className="double_block blue00"></div>
                </div>
            </div>
            <div className="double_wrapper02 red02">
                <div className="double_wrapper01 red01">
                    <div className="double_block red00"></div>
                </div>
            </div>
        </div>
    </div>
    <div className="animation06">
        <div className="rhombus05">
            <div className="rhombus04">
                <div className="rhombus03">
                    <div className="rhombus02">
                        <div className="rhombus01"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="animation07">
        <div className="circle">
            <div className="circle_element01"></div>
        </div>
        <div className="line_wrapper line_wrapper01">
            <span className="line line01"></span>
        </div>
        <div className="rotate60">
            <div className="line_wrapper line_wrapper02">
                <span className="line line02"></span>
            </div>
        </div>
        <div className="rotate120">
            <div className="line_wrapper line_wrapper03">
                <span className="line line03"></span>
            </div>
        </div>
        <div className="line_wrapper line_wrapper04">
            <span className="line line04"></span>
        </div>
        <div className="rotate-120">
            <div className="line_wrapper line_wrapper05">
                <span className="line line05"></span>
            </div>
        </div>
        <div className="rotate-60">
            <div className="line_wrapper line_wrapper06">
                <span className="line line06"></span>
            </div>
        </div>
    </div>
    <div className="animation08">
        <div>
			<div className="gradient"></div>
			<Image src={header} alt="" objectFit="cover" layout="fill" />
		</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin: 0;
/*=================
Basic style
==================*/

img {
    max-width: 100%;
    width: 100%;
    vertical-align: bottom;
}

h1, h2, p {
    margin: 0;
}

/*===================
animation01
====================*/

.animation01 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
}

.animation01 div {
    width: 20%;
    height: 100%;
    animation: animation01 0.275s ease-in forwards;
    transform-origin: bottom;
    opacity: 0;
}

.animation01 div:nth-child(1) {
    background-color: #d55959;
    animation-delay: 0.4s;
}

.animation01 div:nth-child(2) {
    background-color: #ffe08b;
    animation-delay: 0.3s;
}

.animation01 div:nth-child(3) {
    background-color: #75cfb9;
    animation-delay: 0.2s;
}

.animation01 div:nth-child(4) {
    background-color: #f1a05b;
    animation-delay: 0.1s;
}

.animation01 div:nth-child(5) {
    background-color: #78bee4;
}

@keyframes animation01 {
    0% {
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===================
animation02
====================*/

.animation02 {
    position: absolute;
    width: 100%;
    height: 100%;
}

.animation02 div {
    position: absolute;
    width: 0;
    height: 0;
    animation: animation02 0.6s ease-in 0.6s forwards;
    opacity: 0;
}

.animation02 div:nth-child(1) {
    top: 0;
    left: 0;
    border-top: 100vh solid transparent;
    border-right: 100vw solid #f2f3df;
    transform-origin: bottom right;
}

.animation02 div:nth-child(2) {
    right: 0;
    bottom: 0;
    border-bottom: 100vh solid transparent;
    border-left: 100vw solid #f2f3df;
    transform-origin: top left;
}

@keyframes animation02 {
    0% {
        transform: scale3d(0, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===================
animation03
====================*/

.animation03 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13vw;
    height: 13vw;
}

.animation03 .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    background-color: transparent;
    z-index: 9998;
}

.animation03 .circle_element01 {
    width: 13vw;
    height: 13vw;
    border: 0.25vw solid #54988b;
    border-radius: 50%;
    animation: animation03_circle 0.3s ease-in-out 0.5s forwards, animation03_circle_element01 0.3s linear 0.9s forwards;
    opacity: 0;
}

.animation03 .circle_element02 {
    width: 9vw;
    height: 9vw;
    border: 0.5vw solid #4b5e58;
    border-radius: 50%;
    animation: animation03_circle 0.4s ease-in-out 0.5s forwards, animation03_circle_element02 0.2s linear 1.0s forwards;
    opacity: 0;
}

.animation03 .circle_element03 {
    width: 4vw;
    height: 4vw;
    border: 1vw solid #404a52;
    border-radius: 50%;
    animation: animation03_circle 0.45s ease-in-out 0.5s forwards, animation03_circle_element03 0.15s linear 1.4s forwards;
    opacity: 0;
}

@keyframes animation03_circle {
    0% {
        transform: scale3d(0, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

@keyframes animation03_circle_element01 {
    0% {
        border: 0.25vw solid #54988b;
    }
    100% {
        border: 0 solid #54988b;
    }
}

@keyframes animation03_circle_element02 {
    0% {
        border: 0.5vw solid #4b5e58;
    }
    100% {
        border: 0 solid #4b5e58;
    }
}

@keyframes animation03_circle_element03 {
    0% {
        border: 1vw solid #404a52;
    }
    100% {
        border: 0 solid #404a52;
    }
}

/*===================
animation04
====================*/

.animation04 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.animation04 .line_wrapper {
    position: absolute;
    opacity: 0;
}

.animation04 .line {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0;
}

/*===========
line01
===========*/

.animation04 .line_wrapper01 {
    top: -20%;
    left: 50%;
    width: 2.5%;
    height: 30%;
    animation: animation04_line_wrapper01 0.45s ease-in 0.8s forwards;
}

.animation04 .line01 {
    animation: animation04_line01 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper01 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation04_line01 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line02
===========*/

.animation04 .rotate45 {
    display: block;
    position: absolute;
    top: 22.5%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: rotate(45deg);
}

.animation04 .line_wrapper02 {
    width: 2.5%;
    height: 30%;
    animation: animation04_line_wrapper02 0.45s ease-in 0.8s forwards;
}

.animation04 .line02 {
    animation: animation04_line02 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper02 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation04_line02 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line03
===========*/

.animation04 .line_wrapper03 {
    top: 50%;
    left: 90%;
    width: 30%;
    height: 2.5%;
    animation: animation04_line_wrapper03 0.45s ease-in 0.8s forwards;
}

.animation04 .line03 {
    animation: animation04_line03 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper03 {
    0% {
        transform-origin: right;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: right;
        transform: scale3d(0, 1, 1);
        opacity: 1;
    }
}

@keyframes animation04_line03 {
    0% {
        transform-origin: left;
        transform: scale3d(0, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: left;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line04
===========*/

.animation04 .rotate135 {
    display: block;
    position: absolute;
    top: 49.5%;
    left: -22%;
    width: 100%;
    height: 100%;
    transform: rotate(135deg);
}

.animation04 .line_wrapper04 {
    width: 2.5%;
    height: 30%;
    animation: animation04_line_wrapper04 0.45s ease-in 0.8s forwards;
}

.animation04 .line04 {
    animation: animation04_line04 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper04 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation04_line04 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line05
===========*/

.animation04 .line_wrapper05 {
    top: 90%;
    left: 50%;
    width: 2.5%;
    height: 30%;
    animation: animation04_line_wrapper05 0.45s ease-in 0.8s forwards;
}

.animation04 .line05 {
    animation: animation04_line05 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper05 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation04_line05 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line06
===========*/

.animation04 .rotate-135 {
    display: block;
    position: absolute;
    top: -19.5%;
    left: -48%;
    width: 100%;
    height: 100%;
    transform: rotate(-135deg);
}

.animation04 .line_wrapper06 {
    width: 2.5%;
    height: 30%;
    animation: animation04_line_wrapper06 0.45s ease-in 0.8s forwards;
}

.animation04 .line06 {
    animation: animation04_line06 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper06 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation04_line06 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line07
===========*/

.animation04 .line_wrapper07 {
    top: 50%;
    left: -20%;
    width: 30%;
    height: 2.5%;
    animation: animation04_line_wrapper07 0.45s ease-in 0.8s forwards;
}

.animation04 .line07 {
    animation: animation04_line07 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper07 {
    0% {
        transform-origin: left;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: left;
        transform: scale3d(0, 1, 1);
        opacity: 1;
    }
}

@keyframes animation04_line07 {
    0% {
        transform-origin: right;
        transform: scale3d(0, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: right;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===========
line08
===========*/

.animation04 .rotate-45 {
    display: block;
    position: absolute;
    top: -49.0%;
    left: 20%;
    width: 100%;
    height: 100%;
    transform: rotate(-45deg);
}

.animation04 .line_wrapper08 {
    width: 2.5%;
    height: 30%;
    animation: animation04_line_wrapper08 0.45s ease-in 0.8s forwards;
}

.animation04 .line08 {
    animation: animation04_line08 0.45s ease-in 0.5s forwards;
}

@keyframes animation04_line_wrapper08 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation04_line08 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===================
animation05
====================*/

.animation05 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
}

.double_wrapper02 {
    position: relative;
    width: 100%;
    height: 100%;
    animation: animation05_double forwards;
    opacity: 0;
}

.double_wrapper01 {
    display: block;
    position: absolute;
    border-radius: 50%;
    overflow: hidden;
}

.double_wrapper01::before {
    content: "";
    display: block;
    position: absolute;
    background: #f2f3df;
    z-index: 2;
}

.double_wrapper01::after {
    content: "";
    display: block;
    position: absolute;
    background: #f2f3df;
    z-index: 3;
}

.double_block {
    position: absolute;
    background: #f2f3df;
    border-radius: 50%;
}

/*==============
green circle
==============*/

.green02 {
    top: 0;
    animation-delay: 1.3s;
}

.green01 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 34vw;
    height: 34vw;
    background: #75cfb9;
    z-index: 1;
}

.green01::before {
    top: 0;
    left: 17vw;
    width: 34vw;
    height: 34vw;
    transform-origin: left 17vw;
    animation: rotate-circle-right 0.5s linear 1.55s forwards;
}

.green01::after {
    top: 0;
    left: -17vw;
    width: 34vw;
    height: 34vw;
    transform-origin: right 17vw;
    animation: rotate-circle-left 0.5s linear 1.3s forwards;
}

.green00 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9vw;
    height: 9vw;
    z-index: 4;
}

/*==============
navy circle
==============*/

.navy02 {
    top: -100%;
    animation-delay: 1.4s;
}

.navy01 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-20deg);
    width: 25vw;
    height: 25vw;
    background: #485973;
    z-index: 1;
}

.navy01::before {
    top: 0;
    left: 12.5vw;
    width: 25vw;
    height: 25vw;
    transform-origin: left 12.5vw;
    animation: rotate-circle-right 0.5s linear 1.65s forwards;
}

.navy01::after {
    top: 0;
    left: -12.5vw;
    width: 25vw;
    height: 25vw;
    transform-origin: right 12.5vw;
    animation: rotate-circle-left 0.5s linear 1.4s forwards;
}

.navy00 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9vw;
    height: 9vw;
    z-index: 4;
}

/*==============
yellow circle
==============*/

.yellow02 {
    top: -200%;
    animation-delay: 1.45s;
}

.yellow01 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 23vw;
    height: 23vw;
    background: #ffe08b;
    z-index: 1;
}

.yellow01::before {
    top: 0;
    left: 11.5vw;
    width: 23vw;
    height: 23vw;
    transform-origin: left 11.5vw;
    animation: rotate-circle-right 0.5s linear 1.7s forwards;
}

.yellow01::after {
    top: 0;
    left: -11.5vw;
    width: 23vw;
    height: 23vw;
    transform-origin: right 11.5vw;
    animation: rotate-circle-left 0.5s linear 1.45s forwards;
}

.yellow00 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9vw;
    height: 9vw;
    z-index: 4;
}

/*==============
blue circle
==============*/

.blue02 {
    top: -300%;
    animation-delay: 1.2s;
}

.blue01 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(20deg);
    width: 16vw;
    height: 16vw;
    background: #457ed4;
    z-index: 1;
}

.blue01::before {
    top: 0;
    left: 8vw;
    width: 16vw;
    height: 16vw;
    transform-origin: left 8vw;
    animation: rotate-circle-right 0.5s linear 1.45s forwards;
}

.blue01::after {
    top: 0;
    left: -8vw;
    width: 16vw;
    height: 16vw;
    transform-origin: right 8vw;
    animation: rotate-circle-left 0.5s linear 1.2s forwards;
}

.blue00 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7vw;
    height: 7vw;
    z-index: 4;
}

/*==============
red circle
==============*/

.red02 {
    top: -400%;
    animation-delay: 1.3s;
}

.red01 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 12vw;
    height: 12vw;
    background: #e8595f;
    z-index: 1;
}

.red01::before {
    top: 0;
    left: 6vw;
    width: 12vw;
    height: 12vw;
    transform-origin: left 6vw;
    animation: rotate-circle-right 0.5s linear 1.55s forwards;
}

.red01::after {
    top: 0;
    left: -6vw;
    width: 12vw;
    height: 12vw;
    transform-origin: right 6vw;
    animation: rotate-circle-left 0.5s linear 1.3s forwards;
}

.red00 {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 9vw;
    height: 9vw;
    z-index: 4;
}

@keyframes animation05_double {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes rotate-circle-left {
    0% {
        background: #f2f3df;
        transform: rotate(0deg);
    }
    50% {
        background: #f2f3df;
        transform: rotate(-180deg);
    }
    50.01% {
        background: #f2f3df;
        transform: rotate(-180deg);
    }
    100% {
        background: #f2f3df;
        transform: rotate(-360deg);
    }
}

@keyframes rotate-circle-right {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-180deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

/*===================
animation06
====================*/

.animation06 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
}

.rhombus05 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: rhombus 0.7s ease-in 2.0s forwards;
    opacity: 0;
}

.rhombus04 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 50vw;
    height: 50vw;
    background-color: #ef5958;
}

.rhombus03 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 37.5vw;
    height: 37.5vw;
    background-color: #77ceb9;
}

.rhombus02 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25vw;
    height: 25vw;
    background-color: #ffe08b;
}

.rhombus01 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12.25vw;
    height: 12.25vw;
    background-color: #f2f3df;
}

@keyframes rhombus {
    0% {
        transform: scale3d(0, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(10, 10, 1);
        opacity: 1;
    }
}

/*===================
animation07
====================*/

.animation07 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2.5vw;
    height: 2.5vw;
}

.animation07 .circle {
    position: absolute;
    top: -.2vw;
    left: -.2vw;
    transform-origin: center;
    width: 2.5vw;
    height: 2.5vw;
    animation: animation07_circle 0.2s ease-in 2.19s forwards;
}

.animation07 .circle_element01 {
    position: absolute;
    top: 0;
    left: 0;
    width: 2.5vw;
    height: 2.5vw;
    border: 0.2vw solid #a18a66;
    background-color: #fff;
    border-radius: 50%;
    animation: animation07_circle_element01 0.2s ease-in 2.0s forwards;
    transform-origin: center;
    opacity: 0;
}

@keyframes animation07_circle {
    0% {
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(1.4, 1.4, 1);
        opacity: 0;
    }
}

@keyframes animation07_circle_element01 {
    0% {
        transform: scale3d(0, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

.animation07 .line_wrapper {
    position: absolute;
    opacity: 0;
}

.animation07 .line {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #a18a66;
}

/*===========
line01
===========*/

.animation07 .line_wrapper01 {
    top: -95%;
    left: 45%;
    width: 10%;
    height: 60%;
    animation: animation07_line_wrapper01 0.5s ease-in 2.0s forwards;
}

.animation07 .line01 {
    animation: animation07_line01 0.5s ease-in 1.6s forwards;
}

/*===========
line02
===========*/

.animation07 .rotate60 {
    display: block;
    position: absolute;
    top: 22.5%;
    left: 33%;
    width: 100%;
    height: 100%;
    transform: rotate(60deg);
}

.animation07 .line_wrapper02 {
    top: -78%;
    left: 10%;
    width: 10%;
    height: 60%;
    animation: animation07_line_wrapper01 0.5s ease-in 2.0s forwards;
}

.animation07 .line02 {
    animation: animation07_line01 0.5s ease-in 1.6s forwards;
}

/*===========
line03
===========*/

.animation07 .rotate120 {
    display: block;
    position: absolute;
    top: 36.5%;
    left: 0%;
    width: 100%;
    height: 100%;
    transform: rotate(120deg);
}

.animation07 .line_wrapper03 {
    top: -78%;
    left: 10%;
    width: 10%;
    height: 60%;
    animation: animation07_line_wrapper01 0.5s ease-in 2.0s forwards;
}

.animation07 .line03 {
    animation: animation07_line01 0.5s ease-in 1.6s forwards;
}

/*===========
line04
===========*/

.animation07 .line_wrapper04 {
    top: 140%;
    left: 45%;
    width: 10%;
    height: 60%;
    animation: animation07_line_wrapper02 0.5s ease-in 2.0s forwards;
}

.animation07 .line04 {
    animation: animation07_line02 0.5s ease-in 1.6s forwards;
}

/*===========
line05
===========*/

.animation07 .rotate-120 {
    display: block;
    position: absolute;
    top: -15.5%;
    left: -34%;
    width: 100%;
    height: 100%;
    transform: rotate(-120deg);
}

.animation07 .line_wrapper05 {
    top: -78%;
    left: 10%;
    width: 10%;
    height: 60%;
    animation: animation07_line_wrapper01 0.5s ease-in 2.0s forwards;
}

.animation07 .line05 {
    animation: animation07_line01 0.5s ease-in 1.6s forwards;
}

/*===========
line06
===========*/

.animation07 .rotate-60 {
    display: block;
    position: absolute;
    top: -34.5%;
    left: -3%;
    width: 100%;
    height: 100%;
    transform: rotate(-60deg);
}

.animation07 .line_wrapper06 {
    top: -78%;
    left: 10%;
    width: 10%;
    height: 60%;
    animation: animation07_line_wrapper01 0.5s ease-in 2.0s forwards;
}

.animation07 .line06 {
    animation: animation07_line01 0.5s ease-in 1.6s forwards;
}

@keyframes animation07_line_wrapper01 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation07_line01 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

@keyframes animation07_line_wrapper02 {
    0% {
        transform-origin: bottom;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
    100% {
        transform-origin: bottom;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
}

@keyframes animation07_line02 {
    0% {
        transform-origin: top;
        transform: scale3d(1, 0, 1);
        opacity: 1;
    }
    100% {
        transform-origin: top;
        transform: scale3d(1, 1, 1);
        opacity: 1;
    }
}

/*===================
animation08
====================*/

.animation08 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: animation08 1.5s ease-out 2.8s forwards;
    opacity: 0;

	.gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(0deg, #5C4963 0%, rgba(233, 162, 129, 0.2) 38.54%, rgba(187, 122, 121, 0) 100%)!important;
	z-index: 10;
	}
}

.animation08 div:nth-of-type(1) {
    width: 100%;
    height: 100%;
    /* background-image: url(${someImage}); */
    background: #242324;
}

.animation08 div:nth-of-type(2) {
    width: 100%;
    height: 25%;
    background: #75cfb9;
}

.animation08 div:nth-of-type(3) {
    width: 100%;
    height: 25%;
    background: #457ed4;
}

.animation08 div:nth-of-type(4) {
    width: 100%;
    height: 25%;
    background: #e8595f;
}

.animation08 div:nth-of-type(5) {
    width: 100%;
    height: 25%;
    background: #ffe08b;
}

@keyframes animation08 {
    0% {
        transform: translateY(-200vh);
        opacity: 1;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@media screen and (max-width: 750px) {
/*===================
animation02
====================*/
@keyframes animation02 {
    0% {
        transform: scale3d(0, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(1.2, 1.2, 1);
        opacity: 1;
    }
}
/*==============
green circle
==============*/
.green01 {
    width: 70vw;
    height: 70vw;
}
.green01::before {
    left: 35vw;
    width: 70vw;
    height: 70vw;
    transform-origin: left 35vw;
}
.green01::after {
    left: -35vw;
    width: 70vw;
    height: 70vw;
    transform-origin: right 35vw;
}
/*==============
navy circle
==============*/
.navy01 {
    width: 50vw;
    height: 50vw;
}
.navy01::before {
    left: 25vw;
    width: 50vw;
    height: 50vw;
    transform-origin: left 25vw;
}
.navy01::after {
    left: -25vw;
    width: 50vw;
    height: 50vw;
    transform-origin: right 25vw;
}
/*==============
yellow circle
==============*/
.yellow01 {
    width: 35vw;
    height: 35vw;
}
.yellow01::before {
    left: 17.5vw;
    width: 35vw;
    height: 35vw;
    transform-origin: left 17.5vw;
}
.yellow01::after {
    left: -17.5vw;
    width: 35vw;
    height: 35vw;
    transform-origin: right 17.5vw;
}
/*==============
blue circle
==============*/
.blue01 {
    width: 20vw;
    height: 20vw;
}
.blue01::before {
    left: 10vw;
    width: 20vw;
    height: 20vw;
    transform-origin: left 10vw;
}
.blue01::after {
    left: -10vw;
    width: 20vw;
    height: 20vw;
    transform-origin: right 10vw;
}
.blue00 {
    width: 7vw;
    height: 7vw;
}
/*==============
red circle
==============*/
.red00 {
    width: 6vw;
    height: 6vw;
}
/*===================
animation06
====================*/
@keyframes rhombus {
    0% {
        transform: scale3d(0, 0, 1);
        opacity: 1;
    }
    100% {
        transform: scale3d(20, 20, 1);
        opacity: 1;
    }
}
}
`;
