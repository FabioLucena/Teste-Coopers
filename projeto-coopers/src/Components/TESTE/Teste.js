import { useState } from "react";
import { Task } from "./Task";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { Container_Teste } from "./styled";

const Teste = () => {


  const [tasks, setTasks] = useState([
    {
      id: "0",
      name: "Estudar react com typescript",
      status: "todo"
    },
    {
      id: "1",
      name: "Inscrever no canal do Sujeito Programador",
      status: "todo"
    },
    {
      id: "2",
      name: "Pagar o aluguel",
      status: "todo"
    },
  ],[
    {
      id: "0",
      name: "jantar",
      status: "done"
    },
    {
      id: "1",
      name: "me lascar",
      status: "done"
    },
    {
      id: "2",
      name: "Pagar o aluguel",
      status: "done"
    },
  ]
)

  const [tasks2, setTasks2] = useState([
    {
      id: "0",
      name: "jantar"
    },
    {
      id: "1",
      name: "me lascar"
    },
    {
      id: "2",
      name: "Pagar o aluguel"
    },
  ])





  function reorder(list, startIndex, endIndex) {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result;
  }

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  };

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(tasks[sInd], source.index, destination.index);
      const newState = [...tasks];
      newState[sInd] = items;
      setTasks(newState);
    } else {
      const result = move(tasks[sInd], tasks[dInd], source, destination);
      const newState = [...tasks];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setTasks(newState.filter(group => group.length));
    }
  }


    // console.log(result.destination.index)
    // const items = reorder(tasks, result.source.index, result.destination.index)
    // setTasks(items)
  

  // console.log(tasks)
  

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setTasks([...tasks, []]);
        }}
      >
        Add new group
      </button>
      <button
        type="button"
        onClick={() => {
          setTasks([...tasks]);
        }}
      >
        Add new item
      </button>
      <div style={{ display: "flex" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          {tasks?.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  
                  {...provided.droppableProps}
                >
                  {el?.map((item, index) => (
                    
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-around"
                            }}
                          >
                            {item.title}
                            <button
                              type="button"
                              onClick={() => {
                                const newState = [...tasks];
                                newState[ind].splice(index, 1);
                                setTasks(
                                  newState.filter(group => group.length)
                                );
                              }}
                            >
                              delete
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </DragDropContext>
      </div>
    </div>
  );
}
export default Teste;






//DEU BOA O DRAG NAS PROPRIAS TABELAS MAS NAO PARA OUTRAS
// let id2List = {
//   droppable: 'tasks',
//   droppable2: 'tasks2'
// }

// const getList = (id) => {
//   return id2List[id]
// }

// // DragEnd
// function onDragEnd(result) {
//   // const { source, destination } = result
//   console.log((result.source.droppableId))

//   if (!result.destination) {
//     return
//   }
//   console.log(result.destination.droppableId)

//   if (result.source.droppableId === result.destination.droppableId) {
//     // identifica qual lista deve reorganizar
//     let list = result.source.droppableId
//     console.log(typeof (list))
//     let listToGet = list === 'tasks' ? tasks : tasks2
//     console.log(listToGet, result.source.index, result.destination.index)
//     //reorganiza a lista
//     const tasks3 = reorder(listToGet, result.source.index, result.destination.index)
//     console.log(tasks3)

//     // se for a lista 1, aplica
//     if (result.source.droppableId === id2List.droppable) {
//       setTasks(tasks3)
//     }
//     //se for a lista 2, aplica
//     if (result.source.droppableId === id2List.droppable2) {
//       setTasks2(tasks3)
//     }


//   } else {
//     const result = move(
//       this.getList(result.source.droppableId),
//       this.getList(result.destination.droppableId),
//       result.source,
//       result.destination
//     );

//     this.setState({
//       tasks: result.droppable,
//       tasks2: result.droppable2
//     });
//   }


// return (
//   <div className="w-full h-screen flex flex-col items-center px-4 pt-52">
//     <h1 className="font-bold text-4xl text-white mb-4">Tarefas</h1>


//     <form className="w-full max-w-2xl mb-4 flex" onSubmit={handleAddTask}>
//       <input
//         type="text"
//         placeholder="Digite o nome da tarefa..."
//         className="flex-1 h-10 rounded-md px-2"
//         value={newTast}
//         onChange={(event) => setNewTask(event.target.value)}
//       />
//       <button
//         type="submit"
//         className="bg-blue-500 ml-4 rounded-md px-4 text-white font-medium"
//       >
//         Add
//       </button>
//     </form>

//     {/* tentativa de draggabble entre tabelas */}
//     <DragDropContext onDragEnd={onDragEnd}>
//       <Droppable droppableId={'tasks'} type="list" direction="vertical">
        
//         <Container_Teste>
//           <div className="bg-zinc-100 p-3 rounded-md w-full max-w-2xl">
//             <DragDropContext onDragEnd={onDragEnd}>
//               <Droppable droppableId={'tasks'} type="list" direction="vertical">
//                 {(provided) => (
//                   <article
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                   >
//                     {tasks?.map((task, index) => (
//                       <Task key={task.id} task={task} index={index} />
//                     ))}
//                     {provided.placeholder}
//                   </article>
//                 )}
//               </Droppable>
//             </DragDropContext>
//           </div>

//           <div className="bg-zinc-100 p-3 rounded-md w-full max-w-2xl">
//             <DragDropContext onDragEnd={onDragEnd}>
//               <Droppable droppableId="tasks2" type="list" direction="vertical">
//                 {(provided) => (
//                   <article
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                   >
//                     {tasks2?.map((task, index) => (
//                       <Task key={task.id} task={task} index={index} />
//                     ))}
//                     {provided.placeholder}
//                   </article>
//                 )}
//               </Droppable>
//             </DragDropContext>
//           </div>
//         </Container_Teste>
//       </Droppable>
//     </DragDropContext>
//   </div >
// )
// }