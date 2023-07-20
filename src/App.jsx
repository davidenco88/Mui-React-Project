// Import MUI Components
import { ThemeProvider } from '@mui/material';
import { Box, Stack } from '@mui/material';

// Import MUI Functions
import { createTheme } from '@mui/material';

// Import React Hooks
import { useState } from 'react';

// Import Project Components
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Rightbar from './components/Rightbar/Rightbar';
import Navbar from './components/Navbar/Navbar';
import Add from './components/Add/Add';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const appTheme = createTheme({
    palette: {
      mode: themeMode
    }
  });

  return (
    <ThemeProvider theme={appTheme}>
      <Box bgcolor="background.default" color="text.primary">
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setThemeMode={setThemeMode} themeMode={themeMode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
