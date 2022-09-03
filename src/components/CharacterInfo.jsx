import style from './CharacterInfo.module.css'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux/characterSlice'
import { fetchLocations } from '../redux/locationsSlice'
const url = 'https://rickandmortyapi.com/api/character/?location.nagme=Earth'

function CharacterInfo() {
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters)
    const unpopular_character = useSelector((state) => state.characters.unpopular_character)
    const locations = useSelector((state) => state.locations)
    console.log(`CharInfo`)

    useEffect(() => {
        dispatch(fetchCharacters(url))
    }, [])

    useEffect(() => {
        if (unpopular_character) {
            dispatch(fetchLocations(unpopular_character?.location?.url))
        }
    }, [unpopular_character])

    return (
        !characters.loading && !characters.error && unpopular_character ? (
            
                <table className={style.char_table}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{unpopular_character?.name}</td>
                        </tr>
                        <tr>
                            <td>
                                Origin name
                            </td>
                            <td>
                                {unpopular_character?.origin?.name}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Origin dimension
                            </td>
                            <td>
                                {locations.location?.dimension ? locations.location?.dimension : locations.loading ? 'Loading dimension' : locations.error && 'Error' }
                            </td>
                        </tr>
                    </tbody>
                </table>
            
        ) : characters.loading ? <div>Loading</div> : characters.error && <div>Error</div>
    )
}

export default CharacterInfo;