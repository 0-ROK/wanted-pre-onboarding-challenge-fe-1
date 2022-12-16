import { Button, Input, ListItem, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import { CreateTodoPayload } from "../hooks/useTodo";

interface AddTodoProps {
  createTodo: (payload: CreateTodoPayload) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ createTodo }) => {
  const [addTask, setAddTask] = useState("");

  return (
    <ListItem
      secondaryAction={
        <Button
          variant="contained"
          onClick={(e) => {
            e.preventDefault();
            createTodo({ todo: addTask });
            setAddTask("");
          }}
          // disabled={!addTask}
        >
          추가하기
        </Button>
      }
      disablePadding
      style={{ display: "flex" }}
    >
      <ListItemButton>
        <Input
          style={{ width: "90%" }}
          value={addTask}
          onChange={(e) => setAddTask(e.target.value)}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default AddTodo;
