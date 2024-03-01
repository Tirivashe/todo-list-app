import { FC } from "react";
import { ITodo } from "../../lib/types";
import { Button, Group, Radio, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import styles from "./styles.module.scss";

type Props = {
  todo: ITodo;
  setTodos: (id: number) => void;
  goToEdit: (id: number) => void;
};

const Todo: FC<Props> = ({
  todo: { id, completed, task },
  setTodos,
  goToEdit,
}) => {
  return (
    <Group align="center" justify="center" p="md" className={styles.root}>
      <Radio
        className={styles.radio}
        onClick={() => setTodos(id)}
        checked={completed}
        icon={IconCheck}
        iconColor="#399649"
        color="#53DA69"
        size="lg"
      />
      <Text data-completed={completed} className={styles.task} flex={1}>
        {task}
      </Text>
      <Button
        variant="outline"
        size="md"
        color="#071D55"
        onClick={() => goToEdit(id)}
      >
        Edit
      </Button>
    </Group>
  );
};

export default Todo;
