import  { useState } from 'react';
import { Box } from '@mui/material';
import EnquiryPopup from './EnquiryPopup';
import EnquireNow from './EnquireNow';
import './Boxes.css'
import TextDisplay from './TextDisplay';


const Boxes = () => {

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
        justifyContent: 'center',
        alignItems: 'center',
        height: '45vh',
        backgroundColor:'#142d4c',  
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        p:1
      }}
    >
    <TextDisplay label = 'Hurry Up , Last Chance For Admission In 2024-25 Batch' sx={{fontSize: '35px',fontWeight: 'bold',margin: 1, textAlign: 'center', color: 'white',}}/>
    <TextDisplay label = 'Boost your career with recognized Online MBA Colleges In India.' sx={{fontSize: '28px',margin: 6, textAlign: 'center', color: 'white',}}/>


      <EnquireNow handleOpen={handleOpen} color="warning" name="Enquire Now" sx={{ position: 'auto',justifyContent: 'center',}}/>
      <EnquiryPopup open={open} handleClose={handleClose} />  
    </Box>
  );
};

export default Boxes;
