import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'

const SearchResults = () => {
    const [cocktails, setCocktails] = useState([])
    const params = useParams()
    const navigate = useNavigate()
    const search = params.i

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
                const data = await response.json()
                setCocktails(data.drinks)
            } catch (error) {
                console.log(error)
            }
        }
        getData()

    }, [search])

    const handleSearch = (cocktail) => {
        navigate(`/cocktail/${encodeURIComponent(cocktail)}`)
    }


    return (
        <div className="grid-cols-12">
            {cocktails && cocktails.map((cocktail, index) => {
                console.log(cocktail)
                return (
                    <div className="col-span-3" key={index}>
                        <img style={{ "width": "200px" }} src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                        <button onClick={() => handleSearch(cocktail.idDrink)}>{cocktail.strDrink}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults