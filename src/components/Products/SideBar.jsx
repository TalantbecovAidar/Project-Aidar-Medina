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
    <Grid item md={10}  >
      <Paper elevation={5} sx={{ p: 2 }} >
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
        
      </Paper>
      <Grid  className="search">
          <FormControl sx={{color:"white", marginLeft:"40px", }}>
            <FormLabel sx={{color:"white"}}>Type</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)} >
              <FormControlLabel value="all" control={<Radio sx={{color:"white"}}/>} label="все" ></FormControlLabel>
              <FormControlLabel value="завтраки" control={<Radio sx={{color:"white"}}/>}  label="завтраки" ></FormControlLabel>
              <FormControlLabel value="вторые блюда" control={<Radio  sx={{color:"white"}}/>}  label="вторые блюда" ></FormControlLabel>
              <FormControlLabel value="десерты" control={<Radio  sx={{color:"white"}}/>}  label="десерты" ></FormControlLabel>
              <FormControlLabel value="салаты" control={<Radio  sx={{color:"white"}}/>}  label="салаты" ></FormControlLabel>
            </RadioGroup>
          </FormControl>

          <FormControl sx={{color:"white"}} >
            <FormLabel sx={{color:"white"}}>Price</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("price_lte", e.target.value)} >
              <FormControlLabel value="all" control={<Radio  sx={{color:"white"}}/>} label="все" ></FormControlLabel>
              <FormControlLabel value="100" control={<Radio sx={{color:"white"}}/>}  label="меньше чем 100" ></FormControlLabel>
              <FormControlLabel value="600" control={<Radio sx={{color:"white"}}/>}  label="меньше чем 600" ></FormControlLabel>
              <FormControlLabel value="1300" control={<Radio  sx={{color:"white"}}/>}  label="меньше чем 1300" ></FormControlLabel>
            </RadioGroup>
          </FormControl>
        </Grid>
    </Grid>
  );
};

export default SideBar;