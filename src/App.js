
import './App.css';
import Axios from 'axios'
import { YOUR_APP_ID, YOUR_APP_KEY  } from './constants';
import Card from './Card';
import { useState } from 'react';


function App() {
 
  const [apiData, setApiData] =useState([]);
  const [searchValue, setSearchValue] = useState("")
  const [foodType, setFoodType] = useState("")
  const[mealtype,setMealType] = useState('breakfast')

  const url = `https://api.edamam.com/search?q=${searchValue}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=100&calories=591-722&mealtype=${mealtype}`
  // function sample(){
  //   console.log("hellooo")
  // }


  const getReceipeInfo = async() =>{
    var result = await Axios.get(url);
    setApiData(result.data.hits)
  }

  return (
    <div className='container'>
      <h1>Food Receipe</h1>
      <form className='form-container'>

        <select className='select-box' onChange={(e)=>setMealType(e.target.value)}>
          <option>breakfast</option>
          <option>lunch</option>
          <option>dinner</option>
          <option>snacks</option>
        </select>
        
        <input type="text" placeholder='enter food type' className='search_field' onChange={(e) => {setSearchValue(e.target.value)}}/>
        <input type="button" value="Search" className='submit_btn' onClick={getReceipeInfo}/>
      </form>

      <div className='card-container'>
      {apiData.map(val => {
        return <Card image ={val.recipe.image} label={val.recipe.label}/> }
      )}
      </div>
    </div>
  );
}

export default App;
