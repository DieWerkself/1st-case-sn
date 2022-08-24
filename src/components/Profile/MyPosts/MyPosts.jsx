import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

    let postsElements = props.posts
        .map( p => <Post message={p.text} key={p.id} count={p.count} /> );

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewText(text);
    }


    return (
        <div className={s.MyPosts}>
            <h4>My posts</h4>
            <div className={s.NewPost}>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newText}
                        placeholder='Напиши здесь сообщение'
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
