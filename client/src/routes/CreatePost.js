import "./createpost.css"

export default function CreatePost() {
    return (
        <div className="loginbox">
            <h1 className="title">Create Blog</h1>
            <form>
                <p>Title</p>
                <input type="text" name="" placeholder="Enter Title" />

                <p>Description</p>
                <input type="text" name="" placeholder="Enter Description" />

                <input type="submit" name="" value="Submit" />

            </form>
        </div>

    )
}