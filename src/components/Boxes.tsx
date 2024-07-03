import  { useState } from 'react';
import { Box , Grid} from '@mui/material';
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
    <Grid container spacing={0}>
      <Grid item xs={12} md={12} lg={12}>
        <Box 
      sx={{
        
        display: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        height: { xs: '35vh', md: '35vh' , lg: '45vh' },
        
        backgroundColor:'#142d4c',  
        backgroundSize: { xs: 'auto', md: 'contain' , lg: 'auto' },
        backgroundRepeat: 'no-repeat',
        color: 'white',
        textAlign: 'center',
        p:1
      }}
    >
    <TextDisplay label = 'Hurry Up , Last Chance For Admission In 2024-25 Batch' sx={{fontSize:{ xs: '20px', md: '27px' , lg: '35px'},fontWeight: 'bold',margin: 1, textAlign: 'center', color: 'white',}}/>
    <TextDisplay label = 'Boost your career with recognized Online MBA Colleges In India.' sx={{fontSize: { xs: '16px', md: '20px' , lg: '28px'},margin: 6, textAlign: 'center', color: 'white',}}/>


      <EnquireNow variant='contained' handleOpen={handleOpen} color="warning" name="Enquire Now" sx={{ position: 'auto',justifyContent: 'center',}}/>
      <EnquiryPopup open={open} handleClose={handleClose} />  
    </Box>
    </Grid>
    </Grid>
  );
};

export default Boxes;
