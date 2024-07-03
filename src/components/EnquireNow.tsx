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
  variant?: 'text' | 'contained' | 'outlined' ;
}

const EnquireNow: React.FC<EnquireNowProps> = ({ handleOpen , color = 'primary' , name , sx , variant }) => {
  return (
    <Button
      size="small"
      color={color}
      onClick={handleOpen}
      sx={{ ...sx}}
      variant={variant}
    >
      {name}
    </Button>
  );
};

export default EnquireNow;
