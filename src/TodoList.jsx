import React, { useState } from 'react';
export default function TodoList() {
  const [activity, setActivity] = useState('');
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      console.log(updatedList);
      setActivity('');
      return updatedList;
    });
  }
  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i != id;
    });
    setlistData(updatedListData);
  }
  function removeAll() {
    setlistData([]);
  }
  return (
    <div className="container">
      <div className="header">to-do list</div>
      <input
        type="text"
        placeholder="add activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity} className="button">
        Add
      </button>
      <p className="List-heading">Here is your list :{')'}</p>
      {listData != [] &&
        listData.map((data, i) => {
          return (
            <>
              <p key={i}>
                <div className="listData">{data}</div>
                <button
                  className="btn-position"
                  onClick={() => removeActivity(i)}
                >
                  remove(-)
                </button>
              </p>
            </>
          );
        })}
      {listData.length >= 1 && <button onClick={removeAll}>Remove All</button>}
    </div>
  );
}
