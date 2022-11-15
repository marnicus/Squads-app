import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

import MySearch from './MySearch';
import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import CreateModal from './CreateMenu';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const MyAppBar = () => {
  return (
    <Box id="appBarBox" sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} position="static" color="secondary" enableColorOnDark>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <MySearch />
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}></Box>
          <Box >
            <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          </Box>

          <CreateModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;