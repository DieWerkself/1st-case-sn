import { useState } from "react";

const ProfileStatus = (props) => {
  const baseStatus = () => {
    if (props.aboutMe === "") {
      return "Статуса нет";
    } else {
      return props.aboutMe;
    }
  };

  const [status, setStatus] = useState(baseStatus);
  const [toggle, setToggle] = useState(false);

  const changeActive = () => {
    if (toggle) {
      setToggle(false);
      props.updateStatus(status);
    } else {
      setToggle(true);
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
          <span onDoubleClick={changeActive}>{status}</span>
        </div>
      )}

      {/*{props.aboutMe != null*/}
      {/*    ? props.aboutMe*/}
      {/*    : "Я пока не заполнил описание!"}*/}
    </>
  );
};

export default ProfileStatus;
