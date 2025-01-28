import { useRef } from "react";

const Player = ({ source }) => {
  const playerRef = useRef();
  const play = () => playerRef.current.play();
  const pause = () => playerRef.current.pause();

  return (
    <div>
      <video ref={playerRef} src={source}>
        Sorry, your browser does not support embedded videos.
      </video>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
};
export default Player;
