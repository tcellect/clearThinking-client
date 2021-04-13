import React from 'react'
import { AppBar, InputBase, Button } from "@material-ui/core"
import SearchIcon from '@material-ui/icons/Search';

export default function Form(props) {
    return (
        <form onSubmit={(e) => props.handleSubmit(e)}>
        <AppBar position="static" color="inherit">
            <InputBase 
            id="base-input"
            placeholder={'your sentence'}
            onChange={(e) => props.setBias({...props.bias, biasText: e.target.value})}
            endAdornment={
              <Button type="submit" variant="contained" color="primary" disableElevation startIcon={<SearchIcon />}>
                find
              </Button>
            }
            >
            </InputBase>
        </AppBar>
      </form>
    )
}
