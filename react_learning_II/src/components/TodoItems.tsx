import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onCompleted: (id: number, completed: boolean) => void;
}


const TodoItems = ({ todo, onCompleted }: TodoItemProps) => {



    return (
        <div className="">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-400 bg-white hover:bg-slate-50">
                <input type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompleted(todo.id, e.target.checked)}
                    className="scale-125" />
                <span className={todo.completed ? "line-through text-gray-500" : ""}>{todo.title}</span>
            </label>
        </div>
    )
}

export default TodoItems
