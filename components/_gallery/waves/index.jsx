import styled from "styled-components";

export default function WavesComponent() {

  return (
    <Container>
      <Ocean>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </Ocean>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Ocean = styled.div`
  height: 5%;
  width:100%;
  position:absolute;
  bottom:0;
  left:0;
  background: #0f2027;

.wave {
  /* background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg) repeat-x;  */
  background-image: url('/wave.svg');
  background-repeat: repeat-x;
  position: absolute;
  bottom: 0;
  width: 6400px;
  height: 198px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
}

.wave:nth-of-type(2) {
  top: -170px;
  animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
  opacity: 1;
}

.wave:nth-of-type(3) {
  top: -150px;
  animation: wave 7s cubic-bezier( 0.46, 0.45, 0.73, 0.53) -.125s infinite, swell 6s ease -1.15s infinite;
  opacity: 1;
}

.wave:nth-of-type(3) {
  top: -150px;
  animation: wave 7s cubic-bezier( 0.26, 0.55, 0.63, 0.53) -.125s infinite, swell 6s ease -1.15s infinite;
  opacity: 1;
}

@keyframes wave {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
}

@keyframes swell {
  0%, 100% {
    transform: translate3d(0,-25px,0);
  }
  50% {
    transform: translate3d(0,5px,0);
  }
}
`;