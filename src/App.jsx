import { useState } from 'react'
import './index.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {puppyList} from './data.js'
import './App.css'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  console.log("puppyList: ", puppyList);

  const handleClick = (puppyId) => {
    setFeatPupId(puppyId);
  };

  // function handleClick() {
  //   // <p onClick={} key={puppy.id}>{puppy.name}</p>
  //   console.log("puppy id: ", puppy.id);
  // }

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <div className="App">
      {puppies.map((puppy) => (
        <p onClick={() => handleClick(puppy.id)} key={puppy.id}>
          {puppy.name}
        </p>
      ))}

      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

  // return (
  //   <div className="App">
  //     {puppies.map((puppy) => {
  //       return (
  //         <p onClick={handleClick} key={puppy.id}>
  //           {puppy.name}
  //         </p>
  //       );
  //     })}
  //      featuPupID && <p>{ featPupId }</p> 
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     {
  //       puppies.map((puppy) => {
  //            return <p key={puppy.id}>{puppy.name}</p>;
  //          })
  //      }
  //   </div>
  // );

    

export default App
