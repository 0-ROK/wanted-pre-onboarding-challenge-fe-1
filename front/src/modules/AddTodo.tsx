import {
  Button,
  IconButton,
  Input,
  ListItem,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import { CreateTodoPayload, useTodo } from "../hooks/useTodo";

interface AddTodoProps {
  createTodo: (payload: CreateTodoPayload) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ createTodo }) => {
  const [addTask, setAddTask] = useState("");

  return (
    <ListItem
      secondaryAction={
        <Button
          onClick={(e) => {
            e.preventDefault();
            createTodo({ todo: addTask });
            setAddTask("");
          }}
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
