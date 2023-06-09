import React from "react";

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="word">LOADING...</div>
      <div className="overlay"></div>
      <div class="clock"></div>
    </div>
  );
}

export default LoadingScreen;
