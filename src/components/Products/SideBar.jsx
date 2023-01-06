import { FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/productsContext";

const SideBar = () => {
  const {fetchByParams} = useProducts()
  const [searchParams, setSearchParams] = useSearchParams()

  const [search, setSearch] = useState(searchParams.get("q") || "")

  useEffect(()=>{
    setSearchParams({
      q: search,
    })
  }, [search])

  return (
    <Grid item md={3}>
      <Paper elevation={5} sx={{ p: 2 }}>
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Grid>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)} >
              <FormControlLabel value="все" control={<Radio/>} label="все " ></FormControlLabel>
              <FormControlLabel value="завтраки" control={<Radio/>}  label="завтраки" ></FormControlLabel>
              <FormControlLabel value="вторые блюда" control={<Radio/>}  label="вторые блюда" ></FormControlLabel>
              <FormControlLabel value="десерты" control={<Radio/>}  label="десерты" ></FormControlLabel>
              <FormControlLabel value="салаты" control={<Radio/>}  label="салаты" ></FormControlLabel>
            </RadioGroup>
          </FormControl>

          <FormControl>
            <FormLabel>Price</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("price_lte", e.target.value)} >
              <FormControlLabel value="все" control={<Radio/>} label="все" ></FormControlLabel>
              <FormControlLabel value="100" control={<Radio/>}  label="меньше чем 100" ></FormControlLabel>
              <FormControlLabel value="600" control={<Radio/>}  label="меньше чем 600" ></FormControlLabel>
              <FormControlLabel value="1300" control={<Radio/>}  label="меньше чем 1300" ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SideBar;