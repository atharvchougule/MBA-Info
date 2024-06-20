import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';
import React from 'react';
import Box from '@mui/material/Box';


interface TextDisplayProps {

    label : string ;
    sx?: SxProps<Theme>;

}

const TextDisplay: React.FC<TextDisplayProps> = ({ label , sx }) =>  {

return(
    <Box 
    sx={{... sx}}
    >
        {label}
    </Box>
);


};

export default TextDisplay ;