import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveHobby } from "../../../actions/hobby";
import "./hobbyList.css";

function HobbyList(props) {
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();
  const { hobbyList } = props;

  const handleClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  return (
    <ul className="hobby-list">
      {hobbyList.map((hobby) => (
        <li
          key={hobby.id}
          className={hobby.id === activeId ? "active" : ""}
          onClick={() => handleClick(hobby)}
        >
          {hobby.title}
        </li>
      ))}
    </ul>
  );
}

export default HobbyList;
