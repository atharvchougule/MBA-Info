import ReadMore from './ReadMore';

import { Grid, Box } from '@mui/material';



const ReadMoreGrid = () => {
    const initialTexts1 = [
        "Online Mba Fees",
        "Distance Mba",
        "Online Mba Programs In India",
        "Mba Distance Colleges In India"
       
    ];
    const initialTexts2 = [
        "Online Bba Courses",
        "Online Bba Programs",
        "Online Executive Bba",
        "Best Online Bba"
       
    ];
    const initialTexts3 = [
        "Bca Correspondence",
        "Distance Bca",
        "Bca In Distance Mode",
        "Bca Correspondence Course Fees"
       
    ];

    const textsToExpand1 = [
        "Narsee Monjee Mba Distance",
        "Symbiosis Online Mba Fees",
        "Best Colleges For Distance Mba In India",
        "Top 10 Distance Mba Colleges In India",
        "Distance Mba From  IIM",
        " IIM Ahmedabad Online Mba Fees",
        "Distance Mba Colleges In Pune",
        "Mba Courses For Working Professionals",
        "Which University Is Best For Online Mba",
        "Distance Mba Colleges In Ahmedabad",
        " IIM Indore Distance Mba Fees",
        "Distance Mba In Pune",
        "Online Mba",
        "  IIM Online Mba",
        "Best Distance Mba Colleges In India With Fees",
        "Online Mba Universities In India",
        "Mba Distance Colleges In India",
        "Online Mba Fees",
        "Distance Mba",
        "Distance Mba Colleges",
        "Online Mba",
        "Distance Learning Mba",
        "Online Mba Colleges In India",
        "Top Online Mba Colleges In India",
        "Online Mba Programs In India",
        "Online Mba Programs Fees",
        "Best Online Mba Colleges",
        "Online Mba Fees In India",
        "Online Mba Colleges",
        "Online Mba Program",
        "Part Time Mba Colleges",
        " IIM Ahmedabad Online Mba Fees",
        "Colleges For Distance Mba In India",
        "Working Mba Programs",
        "Distance Mba Colleges In India",
        "Online Mba In It",
        "Online Mba College In Pune",
        "Distance Mba In Pune",
        "Online Mba College In Mumbai",
        "ITM Online Mba",
        "Best Distance Mba Colleges In India",
        "Online Mba India",
        "Online Mba In Ahmedabad",
        " IIM Ahmedabad Distance Mba",
        "Mba Course Online In India",
        "Online Mba University"
    ];
    const textsToExpand2 = [

        "Bba Degree Online",
        "Bba Finance Online",
        "Online Bba For Working Professionals",
        "Best Online Bba Programs",
        "Online Bba Colleges",
        "Master Of Business Administration Online",
        "Bba Healthcare Management Online",
        "Best Online Bba Courses",
        "Online Bba In Hospital Management",
        "1 Year Online Bba",
        "Bba Project Management Online",
        "Online Distance Bba",
        "One Year Online Bba",
        "Bba Hr Online Courses",
        "Top Online Bba Programs",
        "1 Year Executive Bba Online",
        "Online Bba International Business",
        "Online Bba Ignou Admission",
        "Study Bba Online",
        "Executive Bba Programs Online",
        "Part-time Online Bba",
        "Online Executive Bba For Working Professionals",
        "Bba Online Distance Learning",
        "Best Online Bba For Working Professionals",
        "Online Bba Programs For Working Professionals",
        "Executive Bba Online Courses",
        "Online Bba Courses For Working Professionals",
        "Online Bba Marketing Programs",
        "Distance Bba",
        "Bba Distance Education",
        "Distance Learning Bba",
        "Distance Bba Colleges",
        "Distance Bba Course",
        "Best Colleges For Distance Bba",
        "Best Distance Bba",
        "Executive Bba Distance Learning",
        "Online Distance Bba",
        "Best University For Distance Bba",
        "Ignou Bba Distance Learning",
        "Bba Distance Learning Colleges",
        "Distance Bba Programs",
        "Bba Hr Distance Education",
        "Best Bba Distance Education",
        "Best University For Bba Distance Education",
        "Top Distance Bba Colleges",
        "Distance Learning Bba Courses",
        "Ugc Approved Distance Bba",
        "Best Bba Colleges For Distance Learning",
        "Distance Bba For Working Professionals",
        "Distance Bba Degree",
        "Distance Bba In Hospital Management",
        "Bba Online Distance Learning",
        "Bba Through Distance Education",
        "Distance Bba In Operations Management",
        "Top Universities For Distance Bba",
        "Distance Bba In Marketing",
        "Bba In Distance Mode",
        "Ignou Distance Bba Courses",
        "Ignou University Distance Education Bba",
        "Correspondence Bba",
        "Bba Correspondence Course",
        "Best Bba Correspondence Colleges",
        "Bba Correspondence Colleges Near Me",
        "Best Correspondence Bba",
        "Executive Bba Correspondence",
        "Part-time Bba",
        "Part-time Bba Courses",
        "Part-time Executive Bba",
        "Part-time Online Bba",
        "Part-time Bba With Placement"
       
    ];
    const textsToExpand3 = [
        "Distance Bca University",
        "Best Bca Distance Learning",
        "Bca Distance Course Fees",
        "Correspondence Bca After Diploma",
        "Bca Course Online Admission",
        "Bca Course In Online",
        "Bca Distance Education",
        "Online Bca Course",
        "Bca Correspondence Course",
        "Online Course For Bca",
        "Bca Course Distance Education",
        "Bca Distance Education Fees",
        "Distance Bca Admission",
        "Bca Online Course Fees",
        "Bca Distance Education University",
        "Distance Bca Course",
        "Bca Through Distance Education",
        "Bca Correspondence Fees",
        "Online Course Bca",
        "Best University For Bca Distance Education",
        "Online Bca Degree Course",
        "Correspondence Bca From Ignou",
        "Bca Course Correspondence",
        "Bca Course Distance Learning",
        "Bca Distance Education Near Me",
        "Best Online Course For Bca Students"
       
    ];
    return(
        <div>
            <Box sx={{ padding: 4, display: 'flex', justifyContent: 'center'}}>
                <Grid container spacing={0} sx={{ maxWidth: '100%' , width: '100%'  }}>
                    <Grid item xs={4}>
                        <Grid container sx={{  color: 'orange' }}>
                          <Grid item xs={12} sx={{  padding: 1 }}>
                          DISTANCE MBA COLLEGES
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container sx={{ color: 'orange' }}>                          
                          <Grid item xs={12} sx={{  padding: 1 }}>
                          ONLINE BBA
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container sx={{ color: 'orange' }}>
                          
                          <Grid item xs={12} sx={{  padding: 1 , paddingRight: 0 }}>
                          BCA DISTANCE LEARNING
                          </Grid>

                        </Grid>
                    </Grid>

                    {/* rows Row */}
                    <Grid item xs={4}>
                        <Grid container sx={{  }}>
                          <Grid item xs={12} sx={{  padding: 1 }}>
                          <ReadMore textsToShowInitially={initialTexts1}  textsToShowOnExpand = {textsToExpand1}  />
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container sx={{  }}>                          
                          <Grid item xs={12} sx={{  padding: 1 }}>
                          <ReadMore textsToShowInitially={initialTexts2}  textsToShowOnExpand = {textsToExpand2}  />
                          </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container sx={{  }}>
                          <Grid item xs={12} sx={{  padding: 1 , paddingRight: 0 }}>
                          <ReadMore textsToShowInitially={initialTexts3}  textsToShowOnExpand = {textsToExpand3}  />
                          </Grid>

                        </Grid>
                    </Grid>
  
                </Grid>
            </Box>

    </div>
    );
};

export default ReadMoreGrid ;