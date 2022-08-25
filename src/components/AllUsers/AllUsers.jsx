import s from "./AllUsers.module.css";

const AllUsers = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 6) < 0) ? 0 : curP - 6;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);

    return (
        <div className={s.users}>
            {
                props.allUsers.map(u => <div className={s.user} key={u.id}>
                    <div className={s.leftBlock}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : props.defaultAvatar}/>
                        </div>
                        <div>
                            {u.followed
                                ?
                                <button className={s.buttonUser}
                                        onClick={() => {
                                            props.unfollow(u.id)
                                        }}>Unfollow
                                </button>
                                :
                                <button className={s.buttonUser}
                                        onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow
                                </button>}
                            {/*<button onClick={() => {props.follow(u.id)}}>{ u.followed ? 'Unfollow' : 'Follow'}</button>*/}
                        </div>
                    </div>
                    <div className={s.rightBlock}>
                        <div className={s.infoStatus}>
                            <div className={s.userName}>
                                <h4>{u.name}</h4>
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div className={s.location}>
                            <div>
                                {"u.location.country"}
                            </div>
                            <div>
                                {"u.location.city"}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
            <div className={s.pagination}>
                {
                    slicedPages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selected : s.nonselected}
                        onClick={() => {
                            props.onPageChanges(p)
                        }}
                    >
                        {p}
                    </span>
                })}
            </div>
        </div>
    )
}

export default AllUsers;

