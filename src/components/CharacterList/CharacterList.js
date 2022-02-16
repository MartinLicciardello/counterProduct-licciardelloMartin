import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Link } from 'react-router-dom';
import './CharList.css';
const CharacterList = () => {

  const [characters, setCharacters] = useState([]);

    useEffect(() => {
      axios('https://api.github.com/users').then((res) => setCharacters(res.data));
    }, []);


  // return (
    
  //   <div>{characters.map((char) => {
  //     return(
  //       <div>
  //         <Link to= {`/detail/${char.char.id}`} //faltan comillas
  //             <CharacterCard data={char}/>
  //         </Link>
  //       </div>
  //     )
  //   })}</div>
  // )



          return (
            <>
                <div className='List'>
                    {characters.map((char) => {
                      return (
                        <div key={char.id}>
                          <Link to={`/detail/${char.id}`} className='Link'>
                            <CharacterCard data={char} />
                          </Link>
                        </div>
                      );
                    })}
                </div>
              )
            </>
          );
        };


export default CharacterList