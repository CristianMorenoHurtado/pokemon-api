import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import axios from 'axios'
import PokeTypes from './PokeTypes'

const Home = ({ setCards }) => {
    const [searchTypes, setSearchTypes] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleOnSubmit = async e => {
        e.preventDefault();

        setCards([])
        if (searchTerm) {
            try {
                const { data } = await axios
                    ({
                        url: (`https://api.pokemontcg.io/v2/cards?q=name:${searchTerm}`),
                        method: "get",
                        headers: {
                            "X-Api-Key": "3971cd93-82ff-4624-b839-51ae3e21bed4",
                        }
                    })
                setCards(data.data)

            } catch (err) {
                console.error(err)
            }
        }


        else {
            try {
                const { data } = await axios
                    ({
                        url: (`https://api.pokemontcg.io/v2/cards?q=types:${searchTypes}`),
                        method: "get",
                        headers: {
                            "X-Api-Key": "3971cd93-82ff-4624-b839-51ae3e21bed4",
                        }
                    })
                setCards(data.data)

            } catch (err) {
                console.error(err)
            }
        }


    }

    const handleTypeChange = e => {
        const { value, checked } = e.target

        if (checked) {
            setSearchTypes(current => [...current, value])
        } else {
            setSearchTypes(searchTypes.filter(type => type !== value))
        }

    }

    useEffect(() => {
        const getSearch = async () => {
            try {
                const { data } = await Axios
                    ({
                        url: "https://api.pokemontcg.io/v2/cards?pageSize=50",
                        method: "get",
                        headers: {
                            "X-Api-Key": "3971cd93-82ff-4624-b839-51ae3e21bed4",
                        }
                    })

                setCards(data.data)
            } catch (err) {
                console.error(err)
            }
        }

        getSearch()
    }, []);



    return (

        <div className="search__container" id="home">
            <div className="row">
                <form className="search__form" onSubmit={handleOnSubmit}>
                    <div>
                        <input className="search__input" type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Charizard" />
                    </div>
                    <button className="btn">
                        Search
                    </button>
                    <PokeTypes onInputChange={handleTypeChange} />
                </form>
            </div>
        </div>
    )

}

Home.propTypes = {
    setCards: PropTypes.func
}

export default Home
