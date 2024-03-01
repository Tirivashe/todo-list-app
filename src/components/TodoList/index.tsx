import { FC } from "react";
import { ITodo } from "../../lib/types";
import { Stack } from "@mantine/core";
import Todo from "../Todo";

type Props = {
  todos: ITodo[];
  setTodos: (id: number) => void;
  goToEdit: (id: number) => void;
};

const TodoList: FC<Props> = ({ todos, setTodos, goToEdit }) => {
  return (
    <Stack align="center" py="lg">
      {todos.map((todo, idx) => (
        <Todo key={idx} todo={todo} setTodos={setTodos} goToEdit={goToEdit} />
      ))}
    </Stack>
  );
};

export default TodoList;
