import style from './BarChart.module.scss'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCharacters2} from '../redux/characterSlice'

function BarChart() {
    const dispatch = useDispatch()
    const characters = useSelector((state)=>state.characters.characters2)
    console.log('BarChart')
    
    useEffect(()=> {
        dispatch(fetchCharacters2('https://rickandmortyapi.com/api/character/1,2,3,4,5'))
    },[])
    
    return (
        <ul className={style.chart}>
            {
                characters && characters.length && characters.map((char)=> {
                    return (
                        <li key={char.id}>
                            <span 
                            style={{height: char.episode.length/51*100}} 
                            title={`${char.name} (${char.episode.length})`}>
                            </span>
                        </li>
                    )
                })
            }
      </ul>
    );
  }
  
  export default BarChart;