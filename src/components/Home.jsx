import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [ingredient, setIngredient] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if (ingredient.trim() !== '') {
            navigate(`/search/${encodeURIComponent(ingredient)}`)
        }
    }

    return (
        <div>
            <p className="text-3xl font-bold underline">
                Cocktail Search
            </p>
            <input
                type="text"
                placeholder='Search for a cocktail'
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Home