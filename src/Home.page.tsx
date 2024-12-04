import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-2">
      <h1 className="text-xl text-teal-400">Home</h1>
    </div>
  )
}

export default Home;
