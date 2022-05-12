import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HobbyList from "../components/Home/HobbyList";
import casual from "casual-browserify";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

function HomePage() {
  const hobbyList = useSelector((state) => state.hobby.list);
  // const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  console.log(hobbyList);
  const handleAddHobbyClick = () => {
    //Random a hobby object: id + title
    const newHobby = {
      id: casual.uuid,
      title: casual.title,
    };

    //dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  // const handleHobbyClick = (hobby) => {
  //   const action = setActiveHobby(hobby);
  //   dispatch(action);
  // };
  return (
    <div className="home-page">
      <h1>REDUX HOOKS - Home Page</h1>
      {/* use package casual to random object */}
      {/* to prevent error npm i casual-browserify, import casual from casual-browserify */}
      <button onClick={handleAddHobbyClick}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        // activeId={activeId}
        // onHobbyClick={handleHobbyClick}
      />
    </div>
  );
}

export default HomePage;
