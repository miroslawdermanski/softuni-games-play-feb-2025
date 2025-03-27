import gameService from "../../services/gameService.js"
import { useEffect, useState } from "react"
import GameItem from "./catalog-item/GameItem"

export default function Catalog(){

    const [games, setGames] = useState([])

    useEffect(() => {
        gameService.getAll()
        .then(result => {         
            setGames(result)
        })
    }, [])

    return (

        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0
                ? games.map(game => <GameItem key={game._id} {...game} />)
                : <h3 className="no-articles">No articles yet</h3>}

        </section>
    )
}