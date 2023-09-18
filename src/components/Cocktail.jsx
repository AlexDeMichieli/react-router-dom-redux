import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

const Cocktail = () => {
    const [cocktail, setCocktail] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const search = params.i

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${search}`)
                const data = await response.json()
                setCocktail(data.drinks)
            } catch (error) {
                console.log(error)
            }
        }
        getData()

    }, [search])

    return (
        <div>
            {cocktail && cocktail.map((cocktail, index) => {
                return (
                    <div key={index}>
                        <p className='text-xl'>{cocktail.strDrink}</p>
                        <p className='text-md'>{cocktail.strInstructions}</p>
                        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <button>ADD FAV!</button>
                    </div>
                );
            })}



        </div>
    )
}

export default Cocktail