// Import MUI Components
import { Box } from '@mui/material';

// Import Project Components
import Post from '../Post/Post';

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
}
