import React from "react";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function FormSearchPersona({
  search,
  handleChangeSearch,
  searchPerson,
}) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <FormControl fullWidth margin="normal">
        <TextField
          label="Telefono"
          variant="filled"
          value={search}
          onChange={handleChangeSearch}
        />
      </FormControl>
      <Button variant="contained" onClick={searchPerson}>
        Buscar
      </Button>
    </Stack>
  );
}
