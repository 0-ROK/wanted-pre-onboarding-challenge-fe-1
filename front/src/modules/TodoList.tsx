import {
  Button,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { ToDoItem } from "../hooks/useTodo";

interface TodoListProps {
  todos: Array<ToDoItem>;
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  return (
    <List sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}>
      {todos.map((todo) => {
        return (
          <ListItem
            key={todo.id}
            secondaryAction={
              <>
                <Button
                  variant="outlined"
                  onClick={(e) => {
                    e.preventDefault();
                    // updateTodo(todo.id, {
                    //   todo: editTodo,
                    //   isCompleted: todo.isCompleted,
                    // });
                  }}
                >
                  수정
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    deleteTodo(todo.id);
                  }}
                >
                  삭제
                </Button>
              </>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              // onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.isCompleted}
                  tabIndex={-1}
                  disableRipple
                  onChange={(e) => {
                    e.preventDefault();
                    // updateTodo(todo.id, {
                    //   todo: todo.todo,
                    //   isCompleted: !todo.isCompleted,
                    // });
                  }}
                />
              </ListItemIcon>
              <ListItemText primary={`Line item ${todo.todo}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
