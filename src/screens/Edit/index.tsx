import { Button, Group, Stack, Text, TextInput } from "@mantine/core";
import { FC, useState } from "react";
import Header from "../../components/Header";
import { ITodo, Screens } from "../../lib/types";
import styles from "./styles.module.scss";

type Props = {
  todos: ITodo[];
  goToHome: () => void;
  updateTodo: (value: string, id: number) => void;
  deleteTodo: (id: number) => void;
  todoId: number;
  currentScreen: Screens;
};

const Edit: FC<Props> = ({
  todos,
  goToHome,
  currentScreen,
  updateTodo,
  deleteTodo,
  todoId,
}) => {
  const todoInfo = todos.find((todo) => todoId === todo.id);
  const [value, setValue] = useState(todoInfo?.task ?? "");

  const handleUpdateTodo = () => {
    updateTodo(value, todoId);
    goToHome();
  };

  const handleDeleteTodo = () => {
    deleteTodo(todoId);
    goToHome();
  };

  return (
    <>
      <Header currentScreen={currentScreen} />
      <Stack component="form" py="md">
        <Text px="lg" component="label" size="lg">
          Task Name
        </Text>
        <TextInput
          px="lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={styles.input}
        />
        <Group
          gap="md"
          style={{ position: "absolute", bottom: 0 }}
          w="100%"
          p="lg"
        >
          <Button
            onClick={handleDeleteTodo}
            color="#720D0D"
            size="lg"
            className={styles.deleteBtn}
          >
            Delete
          </Button>
          <Button flex={1} color="#0D2972" size="lg" onClick={handleUpdateTodo}>
            Save
          </Button>
        </Group>
      </Stack>
    </>
  );
};

export default Edit;
