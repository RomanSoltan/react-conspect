import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Player from "./Player/Player";
import ComponentA from "./ComponentA/ComponentA";
import ComponentB from "./ComponentB/ComponentB";
import MyComponent from "./MyComponent/MyComponent";

function App() {
  // useMemo
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );

  // useRef
  const [value, setValue] = useState(0);
  const btnRef = useRef();

  // Буде undefined на першому рендері
  // і посиланням на DOM-елемент всі наступні
  console.log("App: ", btnRef.current);

  useEffect(() => {
    // Ефект виконується після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("useEfect: ", btnRef.current);
  }, []);

  const handleClick = () => {
    // Кліки будуть після монтування,
    // тому завжди буде посиланням на DOM-елемент
    console.log("handleClick: ", btnRef.current);
  };

  return (
    <>
      <MyComponent />
      <ComponentA />
      <ComponentB />

      {/* Player */}
      <Player source="http://media.w3.org/2010/05/sintel/trailer.mp4" />

      {/* useMemo */}
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <ul>
        {filteredPlanets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>

      {/* useRef */}
      <button onClick={() => setValue(value + 1)}>
        Update value to trigger re-render
      </button>
      <button ref={btnRef} onClick={handleClick}>
        Button with ref
      </button>
    </>
  );
}

export default App;
