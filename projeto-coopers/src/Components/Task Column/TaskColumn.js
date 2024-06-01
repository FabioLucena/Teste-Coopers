import React, { useState } from "react";
import TaskCard from "../Task Card/TaskCard";
import DropArea from "./DropArea.jsx"



// const TaskColumn = ({ title, tasks, status, handleDelete, moveItem }) => {
const TaskColumn = ({  isOver, children  }) => {
// let task = tasks? tasks : []
// console.log(tasks)
const className = isOver ? " highlight-region" : "";
    return (
        <div className={`col${className}`}>
            {children}
        </div>
      
    );
};

export default TaskColumn;




// <section className='task_column'>
// <h2 className='task_column_heading'>{title}</h2>


//        {tasks?.map((task, index)=>
//            <TaskCard
//                key={task.index}
//                task={task.title}
//                indexTask={task.index}
//                index={index}
//                moveItem={moveItem}
//                status={task.status}
//                handleDelete={handleDelete}
               
               
//            />
//        )}   
       

// </section>