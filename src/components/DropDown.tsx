import  { useState } from 'react';
import React from 'react';
import { Button, Collapse, Typography , Box} from '@mui/material';
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
        <Box display="flex" justifyContent="center">
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
                textAlign: 'left', 
                justifyContent: 'flex-start', 
                paddingLeft: '10px',
                paddingRight: '10px',
                fontSize:{ xs: '10px', md: '15px' , lg: '17px'}

            }}
        >
            {label1}
        </Button>
        </Box>
        <Collapse in={expanded}>
            <div className="dropdown-content">
                <Typography variant="body1" sx={{textAlign:'left' , paddingLeft: 2 , margin : 1 }}>
                    {label2}
                </Typography>
            </div>
        </Collapse>
    </div>
    );

};

export default DropDown ;