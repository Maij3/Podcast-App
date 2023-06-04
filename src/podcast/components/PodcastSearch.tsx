import { Box, TextField } from "@mui/material";
import { useForm } from "../../hooks";
import useActions from "../../hooks/useActions";
import { useEffect } from 'react';

const initialValue = {
  search: "",
};
export const PodcastSearch = () => {
  const { search, onChange } = useForm(initialValue);
  const  { setSearch } = useActions();

  useEffect(()=>{
      setSearch(search.toLowerCase())  
    },[search])

  return (
    <Box
      width={"100%"}
      display={"flex"}
      justifyContent={"flex-end"}
      marginBottom={"100px"}
      marginTop={"40px"}
      alignItems={"center"}
    >
      <Box
        component={"span"}
        padding={"2px 5px"}
        borderRadius={"5px"}
        color={"white"}
        fontWeight={"bold"}
        bgcolor={"#27A4F2"}
        marginRight={"15px"}
      >
        100
      </Box>
      <TextField
        placeholder="Filter podcast..."
        variant="outlined"
        name="search"
        value={search}
        onChange={onChange}
      />
    </Box>
  );
};
