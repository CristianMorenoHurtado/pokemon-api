import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const PokeTypes = ({ onInputChange }) => {
    const [types, setTypes] = useState([])

    useEffect(() => {
        const getTypes = async () => {
            try {
                const { data } = await axios
                    ({
                        url: "https://api.pokemontcg.io/v2/types",
                        method: "get",
                        headers: {
                            "X-Api-Key": "3971cd93-82ff-4624-b839-51ae3e21bed4",
                        }
                    })
                setTypes(data.data)
            } catch (error) {
                console.error(error)
            }
        }
        console.log(types)
        getTypes()
    }, [])

    return (
        <div className="container">
            <div className="types__row">
                {types.map(type => (
                        <>
                            <label 
                                key={type} 
                                className="type__label" 
                            >                               
                                <span>{type}</span>
                                <input 
                                    type="checkbox" 
                                    className="type__input" 
                                    name="pokemonType"
                                    value={type} 
                                    onChange={onInputChange} 
                                />
                            </label>
                        </>

                ))
                }
            </div>
        </div>

    )
}

PokeTypes.propTypes = {
    onInputChange: PropTypes.func
}

export default PokeTypes
