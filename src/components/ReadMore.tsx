import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

interface ReadMoreButtonProps {
  textsToShowInitially: string[];
  textsToShowOnExpand: string[];
}

const ReadMore: React.FC<ReadMoreButtonProps> = ({ textsToShowInitially, textsToShowOnExpand }) => {
  const [showAllText, setShowAllText] = useState(false);

  const toggleShowAllText = () => {
    setShowAllText(!showAllText);
  };

  return (
    <>
      {showAllText ? (
        textsToShowInitially.concat(textsToShowOnExpand).map((text, index) => (
          <Typography key={index} variant="body1" sx={{marginBottom: 2 }}>
            <span style={{ paddingLeft: '10px' }}>• </span>{text}
          </Typography>
        ))
      ) : (
        // Show only initial texts when showAllText is false
        textsToShowInitially.map((text, index) => (
          <Typography key={index} variant="body1" sx={{marginBottom: 2 }}>
             <span style={{ paddingLeft: '10px' }}>• </span>{text}
          </Typography>
        ))
      )}

      {textsToShowOnExpand.length > 0 && (
        <Button onClick={toggleShowAllText} color="primary">
          {showAllText ? 'Read Less' : 'Read More'}
        </Button>
      )}
    </>
  );
};

export default ReadMore;
