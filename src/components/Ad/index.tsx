import { Center, Group, Image, Text } from "@mantine/core";
import styles from "./styles.module.scss";

const Ad = () => {
  return (
    <Group className={styles.root} align="center" px="xl">
      <Image src="/src/assets/trophy.svg" alt="trophy" />
      <Text size="lg" color="#071D55" className={styles.text} fw={"bold"}>
        Go Pro Upgrade Now
      </Text>
      <Center className={styles.price}>
        <Text>$1</Text>
      </Center>
    </Group>
  );
};

export default Ad;
