import commentService from "../../services/commentService"

export default function CommentCreate({email, gameId}){

    const commentAction = async (formData) => {
        const comment = formData.get('comment')
        console.log(comment);
        
        await commentService.create(email, gameId, comment)
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={commentAction}>
                <textarea name="comment" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}