import React, { useState } from 'react';
import Menubar from './MenuBar';
import MainContent from './MainContent';
import EnquiryPopup from './EnquiryPopup';
import EnquireNow from './EnquireNow';
import 'bootstrap/dist/css/bootstrap.css';
import TextDisplay from './TextDisplay';
import CollegeGrid from './CollegeGrid';
import Boxes from './Boxes';
import DropdownBox from './DropDownBox';
import ReadMoreGrid from './ReadMoreGrid';
import Contact from './Contact';
import BackToTopButton from './BackToTop';
import '../App.css';
import UTMParameters from './UtmParameters';

const Index: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  return (
    <div>
      <UTMParameters />
      <Menubar />
      <EnquireNow variant='contained' handleOpen={handleOpen} color="primary" name="Enquire Now" sx={{ position: 'fixed',justifyContent: 'center', bottom: '50%', right: -50,  transform: 'rotate(90deg)',zIndex: 1000,}}/>
      <BackToTopButton/>
      <MainContent />
      <EnquiryPopup open={open} handleClose={handleClose} />
      <TextDisplay label = 'Admissions Open For Online MBA 2024-25 Batch' sx={{fontSize:{ xs: '25px', md: '38px' , lg: 'h3.fontsize'},fontWeight: 'bold',margin: 5, textAlign: 'center', color: 'black',}}/>
      <TextDisplay label = 'Explore the Top Online MBA Colleges In India. Select and choose the most suitable course for you.UGC-DEB / AICTE Recognized Courses.' sx={{fontSize:{ xs: '18px', md: '25px' , lg: 'h5.fontsize'},margin: 3, textAlign: 'center', color: 'black',}}/>
      <CollegeGrid/>
      <Boxes/>
      <TextDisplay label = ' Correspondence Course FAQ’s' sx={{fontSize: 'h4.fontSize',margin: 3,fontWeight: 'bold', textAlign: 'left', color: 'black',}}/>
      <DropdownBox/>
      <TextDisplay label = 'TOP QUERY' sx={{fontSize: 'h4.fontSize',fontWeight:'bold',margin:2, textAlign: 'left', color: 'black',paddingLeft:3}}/>
      <ReadMoreGrid/>
      <Contact/>
    </div>
  );
};

export default Index;
