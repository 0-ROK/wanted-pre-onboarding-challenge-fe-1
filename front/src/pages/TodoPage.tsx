import {
  Button,
  Card,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import { useTodo } from "../hooks/useTodo";
import AddTodo from "../modules/AddTodo";

const TodoPage = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const { todos, createTodo, updateTodo } = useTodo();
  const [editTodo, setEditTodo] = useState<string>("");

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
        <AddTodo createTodo={createTodo} />
        <List
          sx={{ width: "100%", height: "100%", bgcolor: "background.paper" }}
        >
          {todos.map((todo) => {
            return (
              <ListItem
                key={todo.id}
                secondaryAction={
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      updateTodo(todo.id, {
                        todo: editTodo,
                        isCompleted: todo.isCompleted,
                      });
                    }}
                  >
                    수정
                  </Button>
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
                        updateTodo(todo.id, {
                          todo: todo.todo,
                          isCompleted: !todo.isCompleted,
                        });
                      }}
                      // inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    // id={todo.id}
                    primary={`Line item ${todo.todo}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Card>
    </div>
  );
};
export default TodoPage;
