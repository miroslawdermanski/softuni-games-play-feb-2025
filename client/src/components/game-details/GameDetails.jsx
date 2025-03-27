import { useContext, useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import gameService from "../../services/gameService"
import CommentsShow from "../comments-show/CommentsShow"
import CommentCreate from "../comments-create/CommentCreate"
import commentService from "../../services/commentService"
import { UserContext } from "../../contexts/UserContext"

export default function GameDetails(){

    const {gameId} = useParams()
    const {email} = useContext(UserContext)
    const [game, setGame] = useState({})
    const [comments, setComments] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        gameService.getOne(gameId)
        .then(result => {
            setGame(result)
        })

        commentService.getAll(gameId)
        .then(setComments)
    }, [gameId])
    
    const gameDeleteHandler = async () => {
        const deletionConfirmed = confirm(`Are you sure you want to delete ${game.title} ?`)

        if(!deletionConfirmed){
            return;
        }

        await gameService.delete(gameId)
        navigate('/games')
    }

    return (

        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <CommentsShow comments={comments} />

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <button 
                        onClick={gameDeleteHandler} 
                        className="button"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <CommentCreate email={email} gameId={gameId} />

        </section>
    )
}