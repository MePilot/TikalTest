import style from './BarChart.module.scss'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchEpisodes} from '../redux/episodesSlice'
import {fetchCharacters2} from '../redux/characterSlice2'
const URL_SOME_CHARACTERS = 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode'

function BarChart() {
    const dispatch = useDispatch()
    const characters = useSelector((state)=>state.characters2)
    const episodes = useSelector((state)=>state.episodes)
    console.log(JSON.stringify(characters))
    
    useEffect(()=> {
        dispatch(fetchCharacters2(URL_SOME_CHARACTERS))
        dispatch(fetchEpisodes(URL_EPISODES))
    },[])
    
    return (
        !characters.loading && !characters.error && episodes.episodes_count>0 ? (
        <ul className={style.chart}>
            {
                 characters.characters && characters.characters.length>0 && characters.characters.map((char)=> {
                    return (
                        <li key={char.id}>
                            <span 
                            style={{height: char.episode.length/episodes.episodes_count*100}} 
                            title={`${char.name} (${char.episode.length})`}>
                            </span>
                        </li>
                    )
                })
            }
      </ul>
      ) : characters.loading || episodes.loading ? <div>Loading...</div> :  (characters.error || episodes.error) && <div>Error</div>
    );
  }
  
  export default BarChart;