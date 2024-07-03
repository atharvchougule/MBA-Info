import { useState } from 'react';
import { Box, Typography } from '@mui/material';

import EnquiryPopup from './EnquiryPopup';
import EnquireNow from './EnquireNow';
import './MainContent.css';

const MainContent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundImage: 'url(https://cncimages.b-cdn.net/distance-programs/wp-content/uploads/2023/12/new-banner.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'flex',
        color: 'white',
        textAlign: 'center',
        p: 2
      }}
    >
      <Typography variant="h4" component="h1">
        Top Online MBA Colleges In India 2024-25
      </Typography>
      <Typography variant="body1" component="p">
        Enhance Your Skills with India’s Online MBA Colleges. Explore Top Online MBA Colleges in India
      </Typography>
      <EnquireNow handleOpen={handleOpen} color="warning" name="Enquire Now" sx={{ mt: 2 }} />
      <EnquiryPopup open={open} handleClose={handleClose} />
    </Box>
  );
};

export default MainContent;
