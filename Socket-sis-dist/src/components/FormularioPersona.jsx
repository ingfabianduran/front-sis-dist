import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormSearchPersona from "./FormSearchPersona";
import socketIo from "socket.io-client";
import swal from "sweetalert2";

export default function FormularioPersona() {
  const [ciudades, setCiudades] = React.useState([]);
  const [nombre, setNombre] = React.useState("");
  const [direccion, setDireccion] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [ciudad, setCiudad] = React.useState("");
  const [search, setSearch] = React.useState("");
  const socket = socketIo.connect("http://localhost:3000");

  React.useEffect(() => {
    socket.on("listCities", (res) => {
      setCiudades(res);
    });
  }, []);

  const registerPersona = () => {
    socket.emit("newPerson", {
      nombre,
      direccion,
      telefono,
      ciudad,
    });
    socket.on("newRegisterPerson", (res) => {
      swal.fire(res);
      setNombre("");
      setDireccion("");
      setTelefono("");
      setCiudad("");
    });
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchPerson = () => {
    socket.emit("searchPerson", {
      telefono: search,
    });
    socket.on("resSearchPerson", (res) => {
      swal.fire(res);
    });
  };

  return (
    <Card>
      <CardContent>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Nombre"
            variant="filled"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Direccion"
            variant="filled"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Telefono"
            variant="filled"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <Select
            id="demo-simple-select-label"
            variant="filled"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          >
            {ciudades.map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>
      <Stack
        padding={1}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button variant="contained" onClick={registerPersona}>
          Registrar
        </Button>
        <FormSearchPersona
          search={search}
          handleChangeSearch={handleChangeSearch}
          searchPerson={searchPerson}
        ></FormSearchPersona>
      </Stack>
    </Card>
  );
}
