import React, { useEffect, useState } from "react";
import NewTargetInput from "./NewTargetInput";
import Place from "./Place";
import "./List.css";

function List() {
  const [mukkit, setMukkit] = useState([]);
  const [newMukkit, setNewMukkit] = useState("");

  useEffect(() => {
    const local = { ...localStorage };

    /* 초기 데이터 삽입 
    if (Object.keys(local).length === 0) {
      const first = "네스트 가스트로바";
      localStorage.setItem("0", { name: first, isVisited: true });
    }
    */

    if (mukkit.length === 0) {
      let tempArray = [];
      for (let i = 0; i < Object.keys(local).length; i++) {
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        tempArray.push({ key: key, value: value });
      }

      setMukkit(tempArray);
    }
  }, [mukkit.length]);

  //신규 입력란 변경 이벤트 핸들러
  const handleNewMukkit = e => {
    setNewMukkit(e.target.value);
  };

  //추가 버튼 클릭 이벤트 핸들러
  const handleAddMukkit = e => {
    if (newMukkit === null || newMukkit === "") {
      alert("가고 싶은 곳의 이름을 입력해주세요!");
      return false;
    }

    const local = { ...localStorage };
    const length = Object.keys(local).length;

    let tempArray = [];
    for (let i = 0; i < length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      tempArray.push({ key: key, value: value });
    }

    const targetMukkit = { name: newMukkit, isVisited: false };
    localStorage.setItem(`${length}`, JSON.stringify(targetMukkit));

    tempArray.push({
      key: `${length}`,
      value: targetMukkit
    });
    setMukkit(tempArray);
    setNewMukkit("");
  };

  //신규 입력란 엔터키 입력 이벤트 핸들러
  const handlePressEnter = e => {
    if (e.keyCode === 13) handleAddMukkit();
  };

  return (
    <div>
      <div className="addBox">
        <NewTargetInput
          newMukkit={newMukkit}
          handleAddMukkit={handleAddMukkit}
          handleNewMukkit={handleNewMukkit}
          handlePressEnter={handlePressEnter}
        />
      </div>
      <div className="listBox">
        {mukkit.map((row, index) => {
          return <Place key={index} mukkit={row} setMukkit={setMukkit} />;
        })}
      </div>
    </div>
  );
}

export default List;
