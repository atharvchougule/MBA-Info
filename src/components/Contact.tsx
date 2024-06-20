import { Box , Typography } from "@mui/material";

const Contact = () => {

    return (

        <Box
        sx={{
          backgroundColor: "#142d4c",
          height: "160px",
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column', // Added to align items vertically
          padding: '20px', // Added padding for spacing
          color: 'white', // Added text color for Typography
        }}
      >
        <Typography variant="body2" align="center">
          © 2024 All rights reserved College N Courses | All Logos and College / Institute / University Names are copyright / trademark of their respective Companies / Organizations.
        </Typography>
      </Box>

    );

};

export default Contact ;