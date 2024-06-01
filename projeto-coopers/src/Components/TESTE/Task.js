import { Draggable } from "@hello-pangea/dnd"

export function Task(task, index) {
    // console.log(task.index)
    return (
        <Draggable
            key={task.task.id}
            draggableId={task.task.id}
            index={task.index}
        >
            {(provided)=>(
                <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                className="w-full bg-zinc-300 mb-2 last:mb-0 px-2 py-3 rounded border-[2px] border-zinc-400"
            >
                <p className="font-medium">{task.task.name}</p>
            </div>
            )}
        </Draggable>
    );
}