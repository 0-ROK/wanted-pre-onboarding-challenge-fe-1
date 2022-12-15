import axios from "axios";
import { useEffect, useState } from "react";

export interface CreateTodoPayload {
  todo: string;
}

export interface ToDoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export const useTodo = () => {
  const createTodo = async (payload: CreateTodoPayload) => {
    try {
      const response = await axios.post("/todos", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          "Content-Type": "application/json",
        },
      });
      if (response.status !== 201) throw Error("실패");
      getTodos();
    } catch (error) {
      throw error;
    }
  };

  const [todos, setTodos] = useState<Array<ToDoItem>>([]);

  const getTodos = async () => {
    try {
      const response = await axios.get("/todos", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.status !== 200) throw Error("실패");
      setTodos(response.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  interface UpdateTodoPayload {
    todo: string;
    isCompleted: boolean;
  }

  const updateTodo = async (id: number, payload: UpdateTodoPayload) => {
    try {
      const response = await axios.put(`/todos/${id}`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.status !== 200) throw Error("실패");
      getTodos();
    } catch (error) {
      throw error;
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      const response = await axios.delete(`/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      });
      if (response.status !== 204) throw Error("실패");
      getTodos();
    } catch (error) {
      throw error;
    }
  };

  return { createTodo, getTodos, todos, updateTodo, deleteTodo };
};
