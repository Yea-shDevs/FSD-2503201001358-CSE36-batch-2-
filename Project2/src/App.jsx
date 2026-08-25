import { useState } from "react";
import Welcome from "./welcome"
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <h1>Main APP component</h1>
    <Welcome/>
   </div>
  );
}

export default App;
