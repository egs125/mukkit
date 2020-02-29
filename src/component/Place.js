import React from "react";
import "./Place.css";

function Place(props) {
  const { mukkit, setMukkit } = props;

  //방문 버튼 클릭 이벤트 핸들러
  const handleVisit = key => {
    let selected = JSON.parse(localStorage.getItem(key));
    selected.isVisited = true;
    localStorage.setItem(`${key}`, JSON.stringify(selected));

    const local = { ...localStorage };

    let tempArray = [];
    for (let i = 0; i < Object.keys(local).length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      tempArray.push({ key: key, value: value });
    }
    setMukkit(tempArray);
  };

  //삭제 버튼 클릭 이벤트 핸들러
  const handleDelete = key => {
    localStorage.removeItem(key);
    const local = { ...localStorage };

    let tempArray = [];
    for (let i = 0; i < Object.keys(local).length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      tempArray.push({ key: key, value: value });
    }
    setMukkit(tempArray);
  };

  return (
    <div className="place">
      <h4 className={`placeName ${mukkit.value.isVisited ? "visited" : ""}`}>
        # {mukkit.value.name}
        <div className="btnGroup">
          {!mukkit.value.isVisited && (
            <button className="visitBtn" onClick={e => handleVisit(mukkit.key)}>
              ✔︎
            </button>
          )}
          <button className="deleteBtn" onClick={e => handleDelete(mukkit.key)}>
            ✘
          </button>
        </div>
      </h4>
    </div>
  );
}

export default Place;
