import { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import Draggable from "react-draggable";

const testArr = [
  {
    position: {
      x: 100,
      y: 200,
    },
    people: 4,
  },
];

export default function LayoutTablesPage() {
  const [items, setItems] = useState([...testArr]);

  // handeling new item
  const handleAddItem = () => {
    const newItem = {
      position: {
        x: 0,
        y: 0,
      },
      people: 5,
    };
    setItems([...items, newItem]);
  };

  // function while dragging
  const dragHanlde = (mouse, el) => {
    console.log(`x: ${el.x}, y: ${el.y}`);
  };

  // handeling element when stop dragging
  const handleDragChange = (e, el) => {
    console.log(`x: ${el.x}, y: ${el.y} - stop`);
    const index = parseInt(el.node.getAttribute(["data-index"]));
    const currentItems = [...items];
    currentItems[index].position = {
      x: el.x,
      y: el.y,
    };
    setItems(currentItems);
  };

  return (
    <Container>
      <Button onClick={handleAddItem}>Přidat stůl</Button>
      <Box sx={{ width: "100%", height: 500, position: "relative" }}>
        {items.map((item, index) => (
          <Draggable
            bounds="parent"
            grid={[25, 25]}
            onDrag={dragHanlde}
            position={item.position}
            onStop={handleDragChange}
            key={index}
          >
            <Box
              data-index={index}
              sx={{
                width: 100,
                height: 100,
                bgcolor: "black",
                position: "absolute",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                "&>*": {
                  color: "white",
                },
              }}
            >
              <Typography variant="h4">{item.people}</Typography>
              <Typography>míst{item.people <= 4 && "a"}</Typography>
            </Box>
          </Draggable>
        ))}
      </Box>
    </Container>
  );
}
