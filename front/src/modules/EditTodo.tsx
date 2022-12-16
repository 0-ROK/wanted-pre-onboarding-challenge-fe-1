import { Button, Input, ListItem, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import { ToDoItem, UpdateTodoPayload } from "../hooks/useTodo";

interface EditTodoProps {
  todoItem: ToDoItem;
  setEditTodoItem: (state: ToDoItem | false) => void;
  updateTodo: (id: number, payload: UpdateTodoPayload) => void;
}

const EditTodo: React.FC<EditTodoProps> = ({
  todoItem,
  setEditTodoItem,
  updateTodo,
}) => {
  const [editText, setEditText] = useState(todoItem.todo);
  return (
    <ListItem
      secondaryAction={
        <>
          <Button
            color="secondary"
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              setEditText("");
              setEditTodoItem(false);
            }}
          >
            취소
          </Button>
          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              updateTodo(todoItem.id, {
                todo: editText,
                isCompleted: todoItem.isCompleted,
              });
              setEditText("");
              setEditTodoItem(false);
            }}
            disabled={!editText}
          >
            제출
          </Button>
        </>
      }
      disablePadding
      style={{ display: "flex" }}
    >
      <ListItemButton>
        <Input
          style={{ width: "90%" }}
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default EditTodo;
