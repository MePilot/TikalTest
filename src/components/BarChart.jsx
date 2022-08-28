import style from './BarChart.module.scss'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchEpisodes} from '../redux/episodesSlice'
import {fetchCharacters2} from '../redux/characterSlice'
const URL_SOME_CHARACTERS = 'https://rickandmortyapi.com/api/character/1,2,3,4,5'
const URL_EPISODES = 'https://rickandmortyapi.com/api/episode'

function BarChart() {
    const dispatch = useDispatch()
    const characters = useSelector((state)=>state.characters.characters2)
    const episodes_count = useSelector((state)=>state.episodes.episode_count)
    
    useEffect(()=> {
        dispatch(fetchCharacters2(URL_SOME_CHARACTERS))
        dispatch(fetchEpisodes(URL_EPISODES))
    },[])
    
    return (
        !characters.loading && !characters.error ? (
        <ul className={style.chart}>
            {
                episodes_count>0 && characters && characters.length && characters.map((char)=> {
                    return (
                        <li key={char.id}>
                            <span 
                            style={{height: char.episode.length/episodes_count*100}} 
                            title={`${char.name} (${char.episode.length})`}>
                            </span>
                        </li>
                    )
                })
            }
      </ul>
      ) : characters.loading ? <div>Loading</div> : characters.error && <div>error</div>
    );
  }
  
  export default BarChart;