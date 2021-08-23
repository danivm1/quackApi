import { useState } from 'react';
import axios from 'axios';
import './quack.css';

export default function Quack() {
     const [imgUrl, setImgUrl] = useState([]);
  
//   useEffect(()=>{

    async function getImg(){
        const response = await axios.get('https://cors-anywhere.herokuapp.com/https://random-d.uk/api/v2/quack')
        // console.log(response.data);
        setImgUrl(response.data);
    }
    
    console.log(imgUrl);
//   }, []);

//   return (
//     <div className="container">
//       <div className="lista-filmes">
//         {imgUrl.map((img)=>{
//           return(
//             <article>
//                 <strong> QUACK </strong>
//                 <img src={img.url}/>
//             </article> 
//           )
//         })}
//       </div>
//     </div>
//   );

    return (
      <div>
          <h1>The Quack Machine</h1>
          <button value="QUACK" onClick={getImg}>QUACK</button>
          <img src={imgUrl.url} alt=""/>
      </div>
  )

 }