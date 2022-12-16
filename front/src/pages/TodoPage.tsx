import { Card } from "@mui/material";
import { useState } from "react";
import { ToDoItem, useTodo } from "../hooks/useTodo";
import AddTodo from "../modules/AddTodo";
import EditTodo from "../modules/EditTodo";
import TodoList from "../modules/TodoList";

const TodoPage = () => {
  const { todos, createTodo, updateTodo, deleteTodo } = useTodo();
  const [editTodoItem, setEditTodoItem] = useState<ToDoItem | false>(false);

  return (
    <div className="App-header" style={{ display: "flex" }}>
      <Card
        style={{
          padding: 30,
          height: "80%",
          width: "60%",
          justifyContent: "center",
        }}
      >
        {editTodoItem ? (
          <EditTodo
            todoItem={editTodoItem}
            setEditTodoItem={setEditTodoItem}
            updateTodo={updateTodo}
          />
        ) : (
          <>
            <AddTodo createTodo={createTodo} />
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              setEditTodoItem={setEditTodoItem}
            />
          </>
        )}
      </Card>
    </div>
  );
};
export default TodoPage;
