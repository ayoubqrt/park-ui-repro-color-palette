import { Button } from "./components/ui/button";
import { Flex } from "styled-system/jsx";

function App() {
  return (
    <div>
      <Flex gap="3">
        <Button colorPalette="red" variant="solid">
          Button
        </Button>
        <Button colorPalette="red" variant="subtle">
          Button
        </Button>
        <Button colorPalette="red" variant="outline">
          Button
        </Button>
        <Button colorPalette="red" variant="ghost">
          Button
        </Button>
      </Flex>
    </div>
  );
}

export default App;
