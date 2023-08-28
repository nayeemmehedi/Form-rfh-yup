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
// "_id": "64c0b25574e9738715b37480",
// "name": "Product 27",
// "details": "Details of Product 27",
// "ojon": "kg",
// "price": 72,
// "__v": 0,
// "createdAt": "2023-07-26T05:42:45.383Z",
// "updatedAt": "2023-07-27T02:53:02.580Z",
// "status": "in-stock"

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    details: yup.string().required(),
    ojon: yup.string().required(),
    price: yup.number().required(),
    status: yup.string().required(),
   

  })
  .required();


function Form({product}) {
  const label = { inputProps: { "aria-label": "Checkbox" } };

  const {
    register,
    handleSubmit,
   
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const onSubmit = (data) => product(data);

  return (
    <Container maxWidth="xs">
      <Typography textAlign={"center"}>Best Form</Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={1}>
          <Grid item xs={6}>

            <TextField
              // defaultValue="test"
              placeholder="name"
              type="name"
              {...register("name", { required: true })}
              error={!!errors.name}
              helperText={errors.name?.message}
            ></TextField>
          </Grid>
         

          <Grid item xs={6}>
            <TextField
              // defaultValue="test"
              placeholder="details"
              type="details"
              {...register("details", { required: true })}
              error={!!errors.details}
              helperText={errors.details?.message}
            ></TextField>
          </Grid>

          

          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="ojon"
              // defaultValue="test"
              type="ojon"
              {...register("ojon", { required: true })}
              error={!!errors.ojon}
              helperText={errors.ojon?.message }
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
             placeholder="price"
              fullWidth
              type="price"
              {...register("price", { required: true })}
              error={!!errors.price}
              helperText={errors.sex?.message.split(",")[0]}
            ></TextField>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="status"
              // defaultValue="test"
              type="status"
              {...register("status", { required: true })}
              error={!!errors.status}
              helperText={errors.status?.message }
            ></TextField>
          </Grid>


      

         
        </Grid>
        <Button
          fullWidth
          variant="outlined"
          type="submit"
          sx={{ marginTop:2 }}
          error={!!errors.price}
        >
          Outlined
        </Button>
      </form>
    </Container>
  );
}

export default Form;

const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];