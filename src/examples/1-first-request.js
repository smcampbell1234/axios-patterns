import { useEffect, useState } from 'react';
import axios from 'axios';

// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';
const urlGames = 'https://2gj35gsv40.execute-api.us-east-1.amazonaws.com/dev/games/list'

const FirstRequest = () => {
  const [games, setGames] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios(urlGames)
      console.log(response.data)
      setGames(response.data)
    } catch (error) {
      console.log("errorObj ...... ",error)
      console.log("error ...... ",error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div>
      <h2 className='text-center'>first request</h2>
      { !!games &&
        games.map((game,idx) => <h3 style={{"textAlign":"center", "margin":"20px"}} key={idx}>{game.away} @ {game.home} {game.spread}</h3>)
      }
    </div>
    )

};
export default FirstRequest;
