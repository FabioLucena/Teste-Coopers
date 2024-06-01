import React, { Fragment, useState, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
// import Window from "../Window/Window";
import TASK_TYPE from "../../constants/Types";

// const TaskCard = ({ task, indexTask, index, moveItem, status, handleDelete }) => {
const TaskCard = ({ item, index, moveItem, status }) => {
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: TASK_TYPE,
        hover(item, monitor) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }

            const hoveredRect = ref.current.getBoundingClientRect();
            const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
            const mousePosition = monitor.getClientOffset();
            const hoverClientY = mousePosition.y - hoveredRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveItem(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag( { type: TASK_TYPE, ...item, index , collect: monitor => ({
            isDragging: monitor.isDragging()
        })
});

    const [show, setShow] = useState(false);

    const onOpen = () => setShow(true);

    const onClose = () => setShow(false);

    drag(drop(ref));

    return (
        <Fragment>
            <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
            <div className={"color-bar"} style={{ backgroundColor: status.color }}/>
                <p className={"item-title"}>{item.title}</p>
                {/* <p className={"item-status"}>{item.icon}</p> */}
            </div>
            {/* <Window
                item={item}
                onClose={onClose}
                show={show}
            /> */}
        </Fragment>
    );
};

export default TaskCard;












// import React, { Fragment, useState, useRef } from "react";
// import { useDrag, useDrop } from "react-dnd";
// // import Window from "./Window"



// const TaskCard = ({ title, handleDelete, index, setActiveCard }) => {
//     return (
//         <article className='task_card' 
//         draggable 
//         onDragStart={()=> setActiveCard(index)}
//         onDragEnd={()=> setActiveCard(null)}
//         >
//             <p className='task_text'>{title}</p>

//             <div className='task_card_bottom_line'>
                
//                 <div
//                     className='task_delete'
//                     onClick={() => handleDelete(index)}
//                     >
//                     {/* <img src={deleteIcon} className='delete_icon' alt='' /> */}
//                 </div>
//             </div>
//         </article>
//     );
// };

// export default TaskCard;




{/* <div
                ref={ref}
                style={{ opacity: isDragging ? 0 : 1 }}
                className={"item"}
                onClick={onOpen}
            >
                <div className={"color-bar"} style={{ backgroundColor: "white" }}/>
                <p className={"item-title"}>{task}</p>
                {/* <p className={"item-status"}>{item.icon}</p> */}
            // </div>
            {/* <Window
                item={item}
                onClose={onClose}
                show={show}
            /> */}


// logica meu codigo


    //         const ref = useRef(null);
    // console.log(task)
    // const [, drop] = useDrop({
    //     accept: TASK_TYPE,
    //     hover(task, monitor) {
    //         if (!ref.current) {
    //             return
    //         }
    //         const dragIndex = indexTask;
    //         const hoverIndex = index;

    //         if (dragIndex === hoverIndex) {
    //             return
    //         }

    //         const hoveredRect = ref.current.getBoundingClientRect();
    //         const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
    //         const mousePosition = monitor.getClientOffset();
    //         const hoverClientY = mousePosition.y - hoveredRect.top;

    //         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //             return;
    //         }

    //         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //             return;
    //         }
    //         moveItem(dragIndex, hoverIndex);
    //         indexTask = hoverIndex;
    //     },
    // });

    // const [{ isDragging }, drag] = useDrag({ type: TASK_TYPE, ...task, index ,
    //     collect: monitor => ({isDragging: monitor.isDragging()
    //     })
    // });

    // const [show, setShow] = useState(false);

    // const onOpen = () => setShow(true);

    // const onClose = () => setShow(false);

    // drag(drop(ref));

