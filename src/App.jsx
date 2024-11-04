// import { useState } from 'react'
import './App.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
		<>
			<div className="container--app">
				<Navbar />
				<ItemListContainer />
			</div>
		</>
  );
}

export default App
