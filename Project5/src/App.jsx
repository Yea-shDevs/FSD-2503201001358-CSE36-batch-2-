
import './App.css'
import Header from"./component/header" 
import {Footer, Contact} from "./component/footer";
import {About, Contact} from "./component/info";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{padding: "20px", fontfamily: "Arial"}}>
      <h1>Import and export Components Example</h1>
      <Header/>
      <About/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
