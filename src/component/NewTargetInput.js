import React from "react";

function NewTargetInput(props) {
  const {
    newMukkit,
    handleAddMukkit,
    handleNewMukkit,
    handlePressEnter
  } = props;

  return (
    <div>
      <input
        value={newMukkit}
        onChange={handleNewMukkit}
        onKeyDown={handlePressEnter}
        placeholder="다음 목표는?"
      />
      <button onClick={handleAddMukkit}>추가</button>
    </div>
  );
}

export default NewTargetInput;
