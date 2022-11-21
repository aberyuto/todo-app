import React from "react";

export const TodoList = ({ taskList, setTaskList }) => {
  const handleDelete = (id) => {
    //filter関数tureなら残す,falseなら除外
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  const handleCompleted = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            //trueからfalseに変換
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };
  return (
    <div className="todoList">
      <div className="todos">
        {taskList.map((task, index) => (
          <div
            className={`todo ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="todoText">
              <span>{task.text}</span>
            </div>
            <div className="icons">
              <button onClick={() => handleCompleted(task.id)}>
                <i className="fas fa-check"></i>
              </button>
              <button onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
