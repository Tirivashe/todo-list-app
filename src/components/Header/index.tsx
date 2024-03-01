import { Avatar, Center, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import styles from "./styles.module.scss";
import { Screens } from "../../lib/types";

const Header = ({ currentScreen }: { currentScreen: Screens }) => {
  const screens = {
    [Screens.Home]: HomeHeader,
    [Screens.Edit]: EditHeader,
    [Screens.Create]: CreateHeader,
  };
  return (
    <Group component="header" className={styles.root} px="lg">
      {screens[currentScreen]()}
    </Group>
  );
};

const HomeHeader = () => {
  return (
    <>
      <Stack justify="flex-start" h="inherit%" py="md">
        <Avatar color="cyan" radius="xl">
          MK
        </Avatar>
      </Stack>
      <Stack flex={1} gap={5} h="inherit" py="md">
        <Text>Hello Jon</Text>
        <Title order={2}>What are your plans today?</Title>
      </Stack>
    </>
  );
};
const EditHeader = () => {
  return (
    <Center h="inherit" w="100%">
      <Title>Edit</Title>
    </Center>
  );
};
const CreateHeader = () => {
  return (
    <Center h="inherit" w="100%">
      <Title>Create</Title>
    </Center>
  );
};

export default Header;
