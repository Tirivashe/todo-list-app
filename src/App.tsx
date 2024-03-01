import { Affix, Button } from "@mantine/core";
import Ad from "./components/Ad";
import Header from "./components/Header";
import { useState } from "react";
import { ITodo, Screens } from "./lib/types";
import TodoList from "./components/TodoList";
import Edit from "./screens/Edit";
import Create from "./screens/Create";

function App() {
  const [screen, setScreen] = useState<Screens>(Screens.Home);
  const [todoId, setTodoId] = useState(0);
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, task: "Go to the gym", completed: true },
    { id: 2, task: "Play Paddle With Friends", completed: false },
    { id: 3, task: "Burger BBQ with Family", completed: false },
  ]);

  const toggleTodoCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    setTodos([...updatedTodos]);
  };

  const updateTodo = (value: string, id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.task = value;
      return todo;
    });
    setTodos([...updatedTodos]);
  };

  const createTodo = (value: string) => {
    const newTodo: ITodo = {
      id: todos.length + 1,
      task: value,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  const goToEdit = (id: number) => {
    setTodoId(id);
    setScreen(Screens.Edit);
  };

  if (screen === Screens.Edit) {
    return (
      <Edit
        currentScreen={screen}
        goToHome={() => setScreen(Screens.Home)}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        todos={todos}
        todoId={todoId}
      />
    );
  }

  if (screen === Screens.Create) {
    return (
      <Create
        currentScreen={screen}
        goToHome={() => setScreen(Screens.Home)}
        createTodo={createTodo}
      />
    );
  }

  return (
    <>
      <Header currentScreen={screen} />
      <Ad />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Button onClick={() => setScreen(Screens.Create)}>+</Button>
      </Affix>
      <TodoList
        todos={todos}
        setTodos={toggleTodoCompleted}
        goToEdit={goToEdit}
      />
    </>
  );
}

export default App;
