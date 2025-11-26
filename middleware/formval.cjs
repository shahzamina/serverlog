const validateForm = (req, res, next) => {
  const {firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer} = req.body;

  // Check required fields
  if (
    !firstName || !lastName || !companyName || !email || !phoneNumber || !part || !modality || !manufacturer
  ) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  // Phone number validation (basic: digits only, 7–15 characters)
  const phoneRegex = /^\d{7,15}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ message: 'Invalid phone number format.' });
  }

  next();
};


const validate = (req, res, next) => {
  const {firstName,lastName,companyName,email,phoneNumber,partDescription} = req.body;

  // Check required fields
  if (
    !firstName || !lastName || !companyName || !email || !phoneNumber || !partDescription
  ) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  // Phone number validation (basic: digits only, 7–15 characters)
  const phoneRegex = /^\d{7,15}$/;
  if (!phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ message: 'Invalid phone number format.' });
  }

  next();
};

module.exports = {validate,validateForm}
