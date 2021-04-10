import { Button, Text, useColorMode } from "@chakra-ui/react";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Text>Hello, world</Text>
      <Button onClick={toggleColorMode}>Toggle color mode</Button>
    </>
  );
};

export default Index;
