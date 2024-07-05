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
        height: { xs: '38vh', md: '40vh' , lg: '60vh'},
        backgroundImage: 'url(https://cncimages.b-cdn.net/distance-programs/wp-content/uploads/2023/12/new-banner.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'flex',
        color: 'white',
        textAlign: 'center',
        p: 2,
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" component="h1" sx={{fontSize:{ xs: '22px', md: '38px' , lg: '50px'} ,margin: {xs:4 , md:9 , lg:9}, fontWeight: 'bold' , maxWidth: '90%',  wordWrap: 'break-word'}}>
        Top Online MBA Colleges In India 2024-25
      </Typography>
      <Typography variant="body1" component="p" sx={{margin: 3 ,wordWrap: 'break-word'}}>
        Enhance Your Skills with India’s Online MBA Colleges. Explore Top Online MBA Colleges in India
      </Typography>
      <EnquireNow handleOpen={handleOpen} variant='contained' color="warning" name="Enquire Now" sx={{ mt: 2 }} />
      <EnquiryPopup open={open} handleClose={handleClose} />
    </Box>
  );
};

export default MainContent;
