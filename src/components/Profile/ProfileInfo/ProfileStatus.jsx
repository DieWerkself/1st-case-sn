import {useState} from "react";

const ProfileStatus = (props) => {
    const [status, setStatus] = useState(props.aboutMe)
    const [toggle, setToggle] = useState(false)

    const changeActive = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    const changeText = (event) => {
        setStatus(event.currentTarget.value);
    }

    const Enter = (event) => {
        if (event.key === 'Enter') {
            setToggle(false)
        }
    }

    return (
        <>
            {toggle ?
                <div>
                    <input
                        type="text"
                        autoFocus={true}
                        onBlur={changeActive}
                        onChange={changeText}
                        onKeyPress={Enter}
                        value={status}/>
                </div>
                :
                <div>
                    <span  onDoubleClick={changeActive}>{status}</span>
                </div>
            }


            {/*{props.aboutMe != null*/}
            {/*    ? props.aboutMe*/}
            {/*    : "Я пока не заполнил описание!"}*/}
        </>)
}

export default ProfileStatus;