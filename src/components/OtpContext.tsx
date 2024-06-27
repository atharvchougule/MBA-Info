import React, { useState, createContext, ReactNode } from 'react';

interface OtpContextType {
  otpValid: boolean | null;
  setOtpValid: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const defaultOtpContext: OtpContextType = {
  otpValid: null,
  setOtpValid: () => {}
};

export const OtpContext = createContext<OtpContextType>(defaultOtpContext);

interface OtpProviderProps {
  children: ReactNode;
}

export const OtpProvider: React.FC<OtpProviderProps> = ({ children }) => {
  const [otpValid, setOtpValid] = useState<boolean | null>(null);

  return (
    <OtpContext.Provider value={{ otpValid, setOtpValid }}>
      {children}
    </OtpContext.Provider>
  );
};
