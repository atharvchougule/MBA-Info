import React, { useState, ChangeEvent, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { OtpContext } from './OtpContext';

interface OtpUIProps {
  confirmationResult: { confirm: (otp: string) => Promise<any> };
}

const OtpUI: React.FC<OtpUIProps> = ({ confirmationResult }) => {
  const { otpValid, setOtpValid } = useContext(OtpContext);
  const [otp, setOtp] = useState<string>('');
  const [otpCheck, setotpCheck] = useState<boolean | null>(null);


  const handleVerifyOtp = () => {
    confirmationResult.confirm(otp)
      .then(() => {
        setotpCheck(true);
        setOtpValid(true);
        console.log("OTP verified successfully");
      })
      .catch((error: any) => {
        setotpCheck(false);
        setOtpValid(false);
        console.error("Error verifying OTP", error);
      });
  };

  const handleOtpChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  return (
    <div>
      <TextField
        margin="dense"
        label="OTP"
        type="text"
        fullWidth
        variant="outlined"
        value={otp}
        onChange={handleOtpChange}
      />
      <Button 
        variant="contained"
        onClick={handleVerifyOtp}
      >
        Verify OTP
      </Button>
      {otpCheck === true && <p>OTP verified successfully!</p>}
      {otpCheck === false && <p>Invalid OTP. Please try again.</p>}
    </div>
  );
};

export default OtpUI;
