import { useState, FormEvent } from "react";
import { Container_List } from "./Styled";
import TaskForm from "../Task Form/TaskForm";
import TaskColumn from "../Task Column/TaskColumn";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import  statuses   from "../../constants/statuses.js";
import DropWrapper from "../DropWrapper/DropWrapper.jsx";
import TaskCard from "../Task Card/TaskCard.js";
 
const ToDoList = () => {

// const [tasks, setTasks] = useState([[
//     {id: 1, title: "estudar", status: "todo"}, 
//     {id: 2, title: "se arrumar", status: "todo"}, 
//     {id: 3, title: "Jantar", status: "done"}]])

const tasks = [
    {id: 1, title: "estudar", status: "todo"}, 
    {id: 2, title: "se arrumar", status: "todo"}, 
    {id: 3, title: "Jantar", status: "done"}]

const [items, setItems] = useState(tasks);    

//   console.log(tasks)
// const handleDelete = (taskIndex) => {
//     const newTasks = items.filter((task, index) => index !== taskIndex);
//     setTasks(newTasks);
//   };

const onDrop = (item, monitor, status) =>{  
    const mapping = statuses.find(si => si.status === status);
    console.log("aqui",item)
    setItems(prevState => {
        const newItems = prevState
            .filter(i => i.id !== item.id)
            .concat({ ...item, status });
        return [ ...newItems ];
    });
}  

const moveItem = (dragIndex, hoverIndex) => {
    const item = items[dragIndex];
    setItems(prevState => {
        const newItems = prevState.filter((i, idx) => idx !== dragIndex);
        newItems.splice(hoverIndex, 0, item);
        return  [ ...newItems ];
    });
};

const getToDoTask= () =>{
    return tasks[0]?.filter(i=> i.status === "todo").map((task) => task)
}

const getDoneTask= () =>{
    return tasks[0]?.filter(i=> i.status === "done").map((task) => task)
}

// console.log(getToDoTask())

// let largura = window.screen.width
// console.log("largura", largura)

    return (
        <Container_List>
            {statuses.map((s, idx) => {
                return (
                    <div  className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status.toUpperCase()}</h2>
                        <DropWrapper onDrop={onDrop} status={s.status}>
                            <TaskColumn>
                                {tasks
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <TaskCard key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </TaskColumn>
                           
                        </DropWrapper>
                    </div>
                );
            })}
        </Container_List>
    )
}

export default ToDoList;





{/* <section className="bg-zinc-100 p-3 rounded-md w-full max-w-2xl">
<DragDropContext onDragEnd={onDragEnd}>
    <Droppable droppableId="tasks" type="list" direction="vertical">
        {(provided) => (
            <article ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                    <Task key={task.id} task={task} index={index}/>
                ))}

                {provided.placeholder}
            </article>
        )}
    </Droppable>
</DragDropContext>
</section> */}




{/* <DropWrapper onDrop={onDrop} >
<TaskColumn 
    title={"To do"}
    tasks={getToDoTask()}
    status={"todo"}
    handleDelete={handleDelete}
    moveItem={moveItem}
/>
<TaskColumn
    title={"Done"}
    tasks={getDoneTask()}
    status={"Done"}
    handleDelete={handleDelete}
    moveItem={moveItem}
/>
</DropWrapper> */}


{/* <TaskColumn 
key = {idx}
title={s.status.toUpperCase()}
tasks={s.status === "todo"? getToDoTask() : getDoneTask()}
status={"todo"}
handleDelete={handleDelete}
moveItem={moveItem}
/> */}