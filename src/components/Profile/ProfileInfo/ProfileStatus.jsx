import {useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProfileStatus = (props) => {

  const baseStatus = !props.aboutMe ? "Статуса нет" : props.aboutMe;

  console.log(baseStatus)


  const [status, setStatus] = useState(baseStatus);
  const [toggle, setToggle] = useState(false);

  const changeActive = () => {
    if (!toggle) {
      setToggle(true);
      setStatus(baseStatus)
    } else {
      setToggle(false);
    }
  };

  const changeText = (event) => {
    setStatus(event.currentTarget.value);
  };

  const Enter = (event) => {
    if (event.key === "Enter") {
      setToggle(false);
      props.updateStatus(status);
    }
  };

  return (
    <>
      {toggle ? (
        <div>
          <input
            type="text"
            autoFocus={true}
            onBlur={changeActive}
            onChange={changeText}
            onKeyPress={Enter}
            value={status}
          />
        </div>
      ) : (
        <div>
          <span onDoubleClick={changeActive}>{baseStatus}</span>
        </div>
      )}

      {/*{props.aboutMe != null*/}
      {/*    ? props.aboutMe*/}
      {/*    : "Я пока не заполнил описание!"}*/}
    </>
  );
};

export default ProfileStatus;
