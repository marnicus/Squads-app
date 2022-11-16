import Button from "@mui/material/Button";
import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Menu } from "@mui/material";
import CreateRoom from "../core/rooms/CreateRoom";
import CreateUser from "../core/rooms/CreateUser";



const CreateMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return <React.Fragment>
        <Button
            color="inherit"
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            <AddIcon />
            Create Menu
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <CreateRoom />
            <CreateUser />

        </Menu>
    </React.Fragment>
}

export default CreateMenu;