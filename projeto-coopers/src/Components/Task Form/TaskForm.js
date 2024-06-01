import React, { useState, useEffect } from "react";


const TaskForm = ({ setTasks }) => {
    const [taskData, setTaskData] = useState({
      task: "",
      status: "todo"
    });
  
   

 // Recebimento dos dados do formulário, desconstruindo e.target e colocoando-o
 //   
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setTaskData((prev) => {
          return { ...prev, [name]: value };
        });
      };
  
   
  // função para envio do formulário para taskData e adiconá-lo à setTasks
  // que é um setter que vem como props para o TaskForm, logo depois taskData é resetado.
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(taskData);
      setTasks((prev) => {
        return [...prev, taskData];
      });
      setTaskData({
        task: "",
        status: "todo"
      });
    };

    return (
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            value={taskData.task}
            className="task_input"
            placeholder="Enter your task"
            onChange={handleChange}
          />
  
          <div className="task_form_bottom_line">
            
  
            <div>
              <select
                name="status"
                value={taskData.status}
                className="task_status"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    );
  };
  
  export default TaskForm;