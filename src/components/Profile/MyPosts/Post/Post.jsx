import s from './Post.module.css';

const Post = (props) => {
    return (
                    <div className={s.item}>
                        <img src='https://cdn-icons-png.flaticon.com/512/168/168719.png'/>
                        {props.message}
                        <div>
                            <span>Like: {props.count}</span>
                        </div>
                    </div>
    );
}

export default Post;
