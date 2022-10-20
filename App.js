import { useState, useEffect } from "react";
import './App.css';
import MovieDisplay from './Components/MovieDisplay';
import Form from './Components/Form';
import './Components/makeup.css';

function App() {
 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df176923demsh5f730fa30e042d4p10d7eejsn579e2301e1f5',
      'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
    }
  };

    const [MakeUp, setMakeUp] = useState(null);
    const getMakeUp = async (searchTerm) => {
      try {
        // get MakeUp&save response to state
        const response = await fetch(`https://sephora.p.rapidapi.com/products/search?q=${searchTerm}&pageSize=60&currentPage=1`, options);
  
        const data = await response.json();
        // Set Response to state
        console.log(data)
        console.log(data.products[0].brandName)
      

        setMakeUp({
          name: data.products[0].brandName,
          productname: data.products[0].displayName,
          image: data.products[0].heroImage,

        });
  
      } catch (e) {

        // console.error(e);
      }
    };

    useEffect(() => {
      getMakeUp("Lipstick");
    }, []);
  

    
  return (
    <div className="App">
      <MovieDisplay MakeUp={MakeUp} />
      <Form MakeUpsearch={getMakeUp} />


    </div>
  );
}

export default App;
