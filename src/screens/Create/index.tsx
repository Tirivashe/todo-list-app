import { useState } from "react";
import { Screens } from "../../lib/types";
import Header from "../../components/Header";
import { Button, Group, Stack, Text, TextInput } from "@mantine/core";

type Props = {
  createTodo: (value: string) => void;
  currentScreen: Screens;
  goToHome: () => void;
};

const Create = ({ createTodo, currentScreen, goToHome }: Props) => {
  const [value, setValue] = useState("");
  const handleCreateTodo = () => {
    createTodo(value);
    goToHome();
  };
  return (
    <>
      <Header currentScreen={currentScreen} />
      <Stack component="form" py="md">
        <Text px="lg" component="label">
          Task Name
        </Text>
        <TextInput
          px="lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Group
          gap="md"
          style={{ position: "absolute", bottom: 0 }}
          w="100%"
          p="lg"
        >
          <Button flex={1} color="#0D2972" size="lg" onClick={handleCreateTodo}>
            Save
          </Button>
        </Group>
      </Stack>
    </>
  );
};

export default Create;
