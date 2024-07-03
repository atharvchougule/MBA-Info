import { useState } from 'react';
import { Grid, Box, Typography, Card, CardContent, useMediaQuery } from '@mui/material';
import EnquiryPopup from './EnquiryPopup';
import EnquireNow from './EnquireNow';

const CollegeGrid = () => {
  const [open, setOpen] = useState(false);
  const isMediumScreen = useMediaQuery('(max-width: 1200px)');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={0} justifyContent="center">
        {isMediumScreen ? (
          <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ color: 'primary.dark', textAlign: 'center', marginBottom: 2 }}>
                  Symbiosis College of Distance Learning
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Get Free Career Counseling"
                    variant="contained"
                    sx={{ justifyContent: 'center', alignContent: 'center' }}
                  />
                </Box>
                <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2, marginBottom: 2 }}>₹ 27,000/- (Apx./Year)</Typography>
                <Typography variant="body2" color="text.secondary" sx={{}}>
                  <ul>
                    <li>Was established in the year 2001 and the university has been approved by AICTE.</li>
                    <br />
                    <li>SCDL is one of the largest universities in India which offers UG, PG, Diploma, and Certificate courses in the distance learning mode.</li>
                  </ul>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 , gap:2 }}>
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Download Brochure"
                    variant="outlined"
                    sx={{ justifyContent: 'center' }}
                  />
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Enquire Now"
                    variant="contained"
                    sx={{ justifyContent: 'center' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ color: 'primary.dark', textAlign: 'center', marginBottom: 2 }}>
                  Amity University Distance
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Get Free Career Counseling"
                    variant="contained"
                    sx={{ justifyContent: 'center', alignContent: 'center' }}
                  />
                </Box>
                <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2, marginBottom: 2 }}>₹ 1.27 Lac/- (Apx./Year)</Typography>
                <Typography variant="body2" color="text.secondary" sx={{}}>
                  <ul>
                    <li>Approved by UGC, AICTE, AIU, ACU, NAAC</li>
                    <br />
                    <li>The hi-tech laboratories of the university provide budding professionals with ideal training grounds.</li>
                    <br/>
                    <li>Eligibility: Candidates must have completed Graduation Degree and a zeal to learn about Entrepreneurship.</li>
                  </ul>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, gap:2 }}>
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Download Brochure"
                    variant="outlined"
                    sx={{ justifyContent: 'center' }}
                  />
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Enquire Now"
                    variant="contained"
                    sx={{ justifyContent: 'center' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)' }}>
              <CardContent>
                <Typography variant="h5" component="h2" sx={{ color: 'primary.dark', textAlign: 'center', marginBottom: 2 }}>
                Lovely Professional University
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 2 }}>
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Get Free Career Counseling"
                    variant="contained"
                    sx={{ justifyContent: 'center', alignContent: 'center' }}
                  />
                </Box>
                <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2, marginBottom: 2 }}>₹ 25,000/- (Apx./Year)</Typography>
                <Typography variant="body2" color="text.secondary" sx={{}}>
                  <ul>
                    <li>LPU is one of the famous private universities situated in Jalandhar of Punjab.</li>
                    <br />
                    <li>LPU has gained approval from the University Grants Commission, Distance Education Bureau, AIU, National Council for Teacher Education (NCTE), Pharmacy Council of India (PCI), Council of Architecture (COA), and The Institute of Engineers (India).</li>
                  </ul>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 4, gap:2 }}>
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Download Brochure"
                    variant="outlined"
                    sx={{ justifyContent: 'center' }}
                  />
                  <EnquireNow
                    handleOpen={handleOpen}
                    color="primary"
                    name="Enquire Now"
                    variant="contained"
                    sx={{ justifyContent: 'center' }}
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
          </Grid>
        ) : (
          <>
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
                  variant="contained"
                  handleOpen={handleOpen}
                  color="warning"
                  name="Get Free Career Counseling"
                  sx={{ justifyContent: 'center' }}
                />
              
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            ₹ 27,000/- (Apx./Year)
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 , paddingRight: 0 }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
                <EnquireNow
                variant="contained"
                  handleOpen={handleOpen}
                  color="secondary"
                  name="Download Brochure"
                  sx={{ justifyContent: 'center' }}
                />
              <EnquireNow
              variant="contained"
                handleOpen={handleOpen}
                color="secondary"
                name="Enquire Now"
                sx={{ justifyContent: 'center', marginRight: 1 }}
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
                variant="contained"
                  handleOpen={handleOpen}
                  color="warning"
                  name="Get Free Career Counseling"
                  sx={{ justifyContent: 'center' }}
                />
              
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            ₹ 1.27 Lac/- (Apx./Year)
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 , paddingRight: 0 }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
                <EnquireNow
                variant="contained"
                  handleOpen={handleOpen}
                  color="secondary"
                  name="Download Brochure"
                  sx={{ justifyContent: 'center' }}
                />
              <EnquireNow
              variant="contained"
                handleOpen={handleOpen}
                color="secondary"
                name="Enquire Now"
                sx={{ justifyContent: 'center', marginRight: 1 }}
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
                variant="contained"
                  handleOpen={handleOpen}
                  color="warning"
                  name="Get Free Career Counseling"
                  sx={{ justifyContent: 'center' }}
                />
              
            </Grid>
            <Grid item xs={2} sx={{ border: 1, borderColor: 'grey.400', padding: 1 }}>
            ₹ 25,000/- (Apx./Year)
            </Grid>
            <Grid item xs={3} sx={{ border: 1, borderColor: 'grey.400', padding: 1 , paddingRight: 0 }}>
            <Box sx={{ display: 'flex', gap: 4 }}>
                <EnquireNow
                variant="contained"
                  handleOpen={handleOpen}
                  color="secondary"
                  name="Download Brochure"
                  sx={{ justifyContent: 'center'}}
                />
              <EnquireNow
              variant="contained"
                handleOpen={handleOpen}
                color="secondary"
                name="Enquire Now"
                sx={{ justifyContent: 'center' , marginRight: 1 }}
              />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        </>
        )}

        {/* Enquiry Popup */}
        <EnquiryPopup open={open} handleClose={handleClose} />
      </Grid>
    </Box>
  );
};

export default CollegeGrid;
