import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { FaArrowCircleRight } from 'react-icons/fa';

export default function BtnPrimaryCTA({color, text, link, animation, styles}) {

  return (
        <Button className={`active:translate-y-0.5 ${styles}`}>
          <div className={`button py-8 px-10 ${color} ${animation}`}>
            <Link href={link} className="text-xl lg:text-2xl font-bold flex justify-center items-center">{text} <FaArrowCircleRight className="icon ml-2 transition duration-300 ease-in-out" /></Link>
            <div className='back' ></div>
          </div>
        </Button>
  );
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 10; */
  &.ani {
    transform: translateY(200%) rotate(0);
    animation: fallButton 1.2s linear;
  }

  .button {
    /* font-family: 'Yanone Kaffeesatz', sans-serif; */
    position: relative;
    /* width: calc(0.8 * 200px);
    height: calc(0.7 * 100px); */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    margin: 0 0.8rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 3px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0, 0.22, 0.3, 1);
    border-radius: 16px;
    &:active {
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.1);
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }

    a {
      color: #fff;
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    &._1 {
      background: #2980b9;
    }
    &._2 {
      background: #8e44ad;
    }
    &._3 {
      background: #16a085;
    }
    &._4 {
      background: #e74c3c;
    }

    .back {
      position: absolute;
      width: 0;
      height: 0;
      filter: url(#filter);
      border-radius: 50%;
      z-index: 5;
      transition: all 2.5s cubic-bezier(0.1, 0.22, 0.3, 1);
    }

    &._1 .back {
      left: -20%;
      top: -40%;
      background: #27ae60;
    }
    &._2 .back {
      right: -20%;
      top: -40%;
      background: #c0392b;
    }
    &._3 .back {
      left: -20%;
      bottom: -40%;
      background: #34495e;
    }
    &._4 .back {
      right: -20%;
      bottom: -40%;
      background: #2980b9;
    }

    &:hover .back {
      width: calc(2 * 200px);
      height: calc(2 * 100px);
    }

    &:hover {
      .icon {
        transform: translateX(6px);
      }
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
  .button {
    margin: 0.8rem 0;
  }

`;