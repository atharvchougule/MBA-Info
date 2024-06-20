// EnquireButton.tsx

import React from 'react';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';


interface EnquireNowProps {
  handleOpen: () => void;
  sx?: SxProps<Theme>;
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' ;
  name:string ;
}

const EnquireNow: React.FC<EnquireNowProps> = ({ handleOpen , color = 'primary' , name , sx }) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={handleOpen}
      sx={{ ...sx}}
    >
      {name}
    </Button>
  );
};

export default EnquireNow;
