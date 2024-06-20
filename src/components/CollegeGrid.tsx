
import { useState } from 'react';
import { Grid, Box ,Typography} from '@mui/material';
import EnquiryPopup from './EnquiryPopup';
import EnquireNow from './EnquireNow';


const CollegeGrid = () => {

    

  const [open ,setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

  return (
    <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center'}}>
      <Grid container spacing={0} sx={{ maxWidth: '100%' , width: '100%' }}>
        {/* Title Row */}
        <Grid item xs={12} sx={{justifyContent: 'center'}}>
          <Grid container sx={{ backgroundColor: 'black', color: 'white' }}>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                College
            </Typography>
            
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Key Features
            </Typography>
            
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Free Counseling
            </Typography>
            
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Fees
            </Typography>
            
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1, paddingRight: 0 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
            Contact Us
            </Typography>
            
            </Grid>
            
            
          </Grid>
        </Grid>
        
        {/* Data Rows */}
        <Grid item xs={12}>
          <Grid container sx={{ backgroundColor: 'white' }}>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            Symbiosis College of Distance Learning
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
              <Box component="ul" sx={{ margin: 0, paddingLeft: 2 }}>
                <li>Was established in the year 2001 and the university has been approved by AICTE.</li>
                <li>SCDL is one of the largest universities in India which offers UG, PG, Diploma, and Certificate courses in the distance learning mode.</li>
              </Box>
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
              
                <EnquireNow
                  handleOpen={handleOpen}
                  color="primary"
                  name="Get Free Career Counseling"
                  sx={{ justifyContent: 'center' }}
                />
              
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            ₹ 27,000/- (Apx./Year)
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 , paddingRight: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <EnquireNow
                  handleOpen={handleOpen}
                  color="primary"
                  name="Download Brochure"
                  sx={{ justifyContent: 'center' }}
                />
              <EnquireNow
                handleOpen={handleOpen}
                color="primary"
                name="Enquire Now"
                sx={{ justifyContent: 'center' }}
              />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container sx={{ backgroundColor: 'white' }}>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            Amity University Distance
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
              <Box component="ul" sx={{ margin: 0, paddingLeft: 2 }}>
                <li>Approved by UGC, AICTE, AIU, ACU, NAAC</li>
                <li>The hi-tech laboratories of the university provide budding professionals with ideal training grounds.</li>
                <li>Eligibility: Candidates must have completed Graduation Degree and a zeal to learn about Entrepreneurship.</li>
              </Box>
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
              
                <EnquireNow
                  handleOpen={handleOpen}
                  color="primary"
                  name="Get Free Career Counseling"
                  sx={{ justifyContent: 'center' }}
                />
              
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            ₹ 1.27 Lac/- (Apx./Year)
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 , paddingRight: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <EnquireNow
                  handleOpen={handleOpen}
                  color="primary"
                  name="Download Brochure"
                  sx={{ justifyContent: 'center' }}
                />
              <EnquireNow
                handleOpen={handleOpen}
                color="primary"
                name="Enquire Now"
                sx={{ justifyContent: 'center' }}
              />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        
        <Grid item xs={12}>
          <Grid container sx={{ backgroundColor: 'white' }}>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            Lovely Professional University
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
              <Box component="ul" sx={{ margin: 0, paddingLeft: 2 }}>
                <li>LPU is one of the famous private universities situated in Jalandhar of Punjab.</li>
                <li>LPU has gained approval from the University Grants Commission, Distance Education Bureau, AIU, National Council for Teacher Education (NCTE), Pharmacy Council of India (PCI), Council of Architecture (COA), and The Institute of Engineers (India).</li>
              </Box>
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
              
                <EnquireNow
                  handleOpen={handleOpen}
                  color="primary"
                  name="Get Free Career Counseling"
                  sx={{ justifyContent: 'center' }}
                />
              
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            ₹ 25,000/- (Apx./Year)
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 , paddingRight: 0 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
                <EnquireNow
                  handleOpen={handleOpen}
                  color="primary"
                  name="Download Brochure"
                  sx={{ justifyContent: 'center' }}
                />
              <EnquireNow
                handleOpen={handleOpen}
                color="primary"
                name="Enquire Now"
                sx={{ justifyContent: 'center' }}
              />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        

        {/* Enquiry Popup */}
        <EnquiryPopup open={open} handleClose={handleClose} />

      </Grid>
    </Box>
  );
};

export default CollegeGrid;
