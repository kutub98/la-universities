import "./App.css";
import LayOut from "./Components/LayOut/LayOut";
import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="">
   <Toaster />
    <LayOut></LayOut>
    </div>
  );
}

export default App;
