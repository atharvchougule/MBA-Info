import React, { useState, ChangeEvent, useRef, FormEvent  } from 'react';
import { Dialog, DialogTitle, DialogContent ,DialogActions, Button, TextField, Checkbox, FormControlLabel,MenuItem} from '@mui/material';
import emailjs from '@emailjs/browser';


interface EnquiryPopupProps {
  open: boolean;
  handleClose: () => void;
}

const EnquiryPopup: React.FC<EnquiryPopupProps> = ({ open, handleClose }) => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    agree: false,
    specialization: ''
  });

  

   
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'agree' ? checked : value
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.agree) {
      sendEmail(e);
      console.log('Form Data Submitted', formData);
      handleClose();
    } else {
      alert('You must agree to the terms and conditions');
    }
  };

  const options = [
    { value: 'Supply Chain Managementale', label: 'Supply Chain Managementale' },
    { value: 'Human Resource Management', label: 'Human Resource Management' },
    { value: 'International Business Banagement', label: 'International Business Management' },
    { value: 'Hospital Management', label: 'Hospital Management' },
    { value: 'Healthcare Management', label: 'Healthcare Management' },
  ];


  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_ei6xkf9', 'template_57go0sk', form.current, 'SYKQkbSvXr04jFs23')
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          }
        );
    }

  };



  return (
    
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'center', fontWeight: '730', fontSize: '1.5rem' }}>
        <span>
        Enquire Now
        </span>

        </DialogTitle>
      <DialogContent>
      <form ref={form} onSubmit={handleSubmit}>
      
        <TextField
          margin="dense"
          label="Name"
          type="text"
          fullWidth
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="Phone"
          type="tel"
          fullWidth
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          label="City"
          type="text"
          fullWidth
          variant="outlined"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <TextField
        select
        margin="dense"
        label="Select Specialization"
        fullWidth
        variant="outlined"
        name="specialization"
        value={formData.specialization}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
        <FormControlLabel
          control={
            <Checkbox
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
          }
          label="I Agree to collegencourses's Terms and Conditions & Privacy Policys"
        />
      
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
      </form>
      </DialogContent>
    </Dialog>
    
  );
};

export default EnquiryPopup;
