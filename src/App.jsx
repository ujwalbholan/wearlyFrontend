import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="p-1.5 flex flex-col justify-center items-center gap-2">
        <h1 className="font-bold ">welcome to wearly</h1>
        <Button className='bg-gray-700 shadow-2xl rounded-b-md text-white p-2 '>click me</Button>
      </div>
    </>
  );
}

export default App;
