import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { TYPE_OF_QUESTIONS } from "../constantes/TypeOfQuestions";

export default function TypeOfQuestions() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
      }}
    >
      <nav aria-label="Types of questions">
        <List>
          {TYPE_OF_QUESTIONS.map((item, index) => (
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    fontWeight: "700",
                    fontSize: 16,
                    color: "#353535",
                  }}
                  secondary={item.description}
                  secondaryTypographyProps={{
                    fontWeight: "400",
                    fontSize: 14,
                    color: "#A9A9A9",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
