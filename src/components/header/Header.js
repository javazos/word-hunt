import React from "react";
import "./Header.css";
import categories from "../../data/category";

import { 
  createTheme,
  TextField,
  ThemeProvider,
} from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";

function Header({ category, setcategory, word, setWord, LightMode }) {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode?"#000":'#fff',
      },
      mode: LightMode?'light':"dark",
    },
  });

  const handleChange = (language) =>{
      setcategory(language)
      setWord("")
  }
  return (
    <div className="header">
      <span className="title">{word?word:"Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="standard-basic"
            label="Search a Word"
            label="Standard"
            value={word}
            onChange={e=>setWord(e.target.value)}
          />
          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            helperText="Please select your language"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
