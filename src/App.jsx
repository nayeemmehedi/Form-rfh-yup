import React from "react";
import {
  Grid,
  Container,
  Typography,
  Paper,
  TextField,
  Checkbox,
  Button,
  Autocomplete,
} from "@mui/material";
import { useForm } from "react-hook-form";

import { styled } from "@mui/material/styles";

import "./App.css";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().required(),
    sex: yup.number().required(),
    agree: yup.string().required(),
    movie: yup.string().required(),

  })
  .required();


function App() {
  const label = { inputProps: { "aria-label": "Checkbox" } };

  const {
    register,
    handleSubmit,
   
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => console.log(data);

  return (
    <Container maxWidth="xs">
      <Typography textAlign={"center"}>Best Form</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TextField
              // defaultValue="test"
              type="name"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name?.message}
            ></TextField>
          </Grid>
         

          <Grid item xs={6}>
            <TextField
              // defaultValue="test"
              type="lastname"
              {...register("lastname", { required: true })}
              error={!!errors.lastname}
              helperText={errors.lastname?.message}
            ></TextField>
          </Grid>

          

          <Grid item xs={12}>
            <TextField
              fullWidth
              // defaultValue="test"
              type="age"
              {...register("age", { required: true })}
              error={!!errors.age}
              helperText={errors.age?.message.split(",")[0]  }
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              type="sex"
              {...register("sex", { required: true })}
              error={!!errors.sex}
              helperText={errors.sex?.message.split(",")[0]}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <Checkbox {...register("agree")}
             error={!!errors.agree}
             helperText={errors.agree?.message}
             />
            Accept turm and condition
          </Grid>

          <Grid>
            <Autocomplete
              disablePortal
              id="movie"
              options={top100Films}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  {...register("movie", { required: true })}
                  label="Movie"
                  error={!!errors.movie}
                  helperText={errors.movie?.message}
                />
              )}
            />
          </Grid>
          <br />

        </Grid>
        <Button
          color="success"
          fullWidth
          variant="outlined"
          type="submit"
          sx={{ marginTop:2 }}
        >
          Outlined
        </Button>
      </form>
    </Container>
  );
}

export default App;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];