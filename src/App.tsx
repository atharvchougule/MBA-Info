import React, { useState } from 'react';
import Menubar from './components/MenuBar';
import MainContent from './components/MainContent';
import EnquiryPopup from './components/EnquiryPopup';
import EnquireNow from './components/EnquireNow';
import 'bootstrap/dist/css/bootstrap.css';
import TextDisplay from './components/TextDisplay';
import CollegeGrid from './components/CollegeGrid';
import Boxes from './components/Boxes';
import DropdownBox from './components/DropDownBox';
import ReadMoreGrid from './components/ReadMoreGrid';
import Contact from './components/Contact';
import BackToTopButton from './components/BackToTop';
import './App.css';
import UTMParameters from './components/UtmParameters';

const App: React.FC = () => {
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

export default App;
