import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function TextComponent() {
  return (
    <div className="home-about max-w-[290px] lg:max-w-full mx-auto">
      <h2>Hello
      <ReactTypingEffect
          text="there!..."
          speed={60}
          eraseDelay={600}
          className="ml-1"
        />
      </h2>
      <h3>My name is <strong>Paulo
      <ReactTypingEffect
          text="Reizinho"
          speed={120}
          eraseDelay={700}
          className="ml-1"
        /></strong>
      </h3>
      <h3>I come from <strong>Gavião</strong>, 
        <ReactTypingEffect
          text="Portugal"
          speed={120}
          eraseDelay={700}
          className="ml-1"
        />
        </h3>
      <h3>I was born at 4th of January of
      <strong>
      <ReactTypingEffect
          text="1986"
          speed={120}
          eraseDelay={700}
          className="ml-1"
        /></strong>
      </h3>
      <h3>I live in <strong>Zurich</strong>, 
      <ReactTypingEffect
          text="Switzerland"
          speed={120}
          eraseDelay={700}
          className="ml-1"
        /> 
      </h3>
      {/* <div>
        <h2>Name:</h2>
        <ReactTypingEffect
          text="Paulo Ricardo Lopes Reizinho"
          speed={120}
          eraseDelay={700}
          className="info"
        />
      </div>
      <div>
        <h2>Origin:</h2>
        <ReactTypingEffect
          text="Gavião, Portugal"
          speed={120}
          eraseDelay={700}
          className="info"
        />
      </div>
      <div>
        <h2>Birth:</h2>
        <ReactTypingEffect
          text="04.01.1986"
          speed={120}
          eraseDelay={700}
          className="info"
        />
      </div>
      <div>
        <h2>Location:</h2>
        <ReactTypingEffect
          text="Zurich"
          speed={120}
          eraseDelay={700}
          className="info"
        />
      </div> */}
    </div>
  );
}
