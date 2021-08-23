import { useState } from 'react';
import axios from 'axios';
import './quack.css';

export default function Quack() {
    const [imgUrl, setImgUrl] = useState([]);

    async function getImg(){
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://random-d.uk/api/v2/quack')
        // console.log(response.data);
        setImgUrl(response.data);
    }
    
    console.log(imgUrl);


    return (
      <div>
          <h1>The Quack Machine</h1>
          <button value="GET QUACKED" onClick={getImg}>GET QUACKED</button>
          <img className="img" src={imgUrl.url} alt=""/>
      </div>
  )
}