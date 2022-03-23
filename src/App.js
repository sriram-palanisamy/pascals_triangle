import "./styles.css";
import {useEffect, useState} from 'react';
import {pascalTriangle} from './genPascalTri';
export default function App() {
  const [triangle, setTri] = useState([]);
  useEffect(()=>{
    setTri(pascalTriangle(5));
  },[])
console.log(triangle)
  return (
    <div className="App">
      <h1>Pascal's Triangle</h1>
      {
        triangle.map((row)=>{
          return <div className="row">
            {row.map(col=>{
              return <span className="col">{col}</span>
            })
          }</div>
        })
      }
    </div>
  );
}
