import  { useState } from 'react';
import React from 'react';
import { Button, Collapse, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './DropDown.css';


interface DropDownProps{
    label1 : string ;
    label2 : string ;
}

const DropDown: React.FC<DropDownProps> = ({label1 , label2}) => {

    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
      setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div className="dropdown" >
        <Button
            variant="text"
            onClick={handleToggle} 
            style={{ cursor: 'pointer' }}
            endIcon={
                <Typography component="span" fontWeight="bold" className={`icon ${expanded  ? 'icon-expanded' : ''}`}>
                  {expanded ? <ExpandMoreIcon /> : <ExpandMoreIcon />}
                </Typography>
              }
            sx={{ 
                width: '97%' , 
                height: '50px' ,
                color:'black' , 
                fontWeight:'bold',
                backgroundColor: '#ede7f6',
                textAlign: 'left', // Align text to the left
                justifyContent: 'flex-start', // Ensure text starts from the left edge
                paddingLeft: '16px', // Add padding for left alignment

            }}
        >
            {label1}
        </Button>
        <Collapse in={expanded}>
            <div className="dropdown-content">
                <Typography variant="body1" sx={{textAlign:'left' }}>
                    {label2}
                </Typography>
            </div>
        </Collapse>
    </div>
    );

};

export default DropDown ;