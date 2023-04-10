import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function LeftPart() {
  return (
    <div className="home-about">
      <div>
        <h2>Name:</h2>
        {/* <h3>Paulo Ricardo Lopes Reizinho</h3> */}
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
      </div>
    </div>
  );
}
