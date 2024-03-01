import { Center, Group, Text } from "@mantine/core";
import styles from "./styles.module.scss";

const Ad = () => {
  return (
    <Group className={styles.root} align="center" px="lg">
      <Text>Go Pro Upgrade Now</Text>
      <Center className={styles.price}>
        <Text>$1</Text>
      </Center>
    </Group>
  );
};

export default Ad;
