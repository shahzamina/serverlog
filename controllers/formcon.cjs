const ThreeFilterForm = require('../models/form.cjs');
const FilterForm = require('../models/ser.cjs');
//const sendEmail = require('../utils/sendmail.cjs');
const fillCon=async(req,res)=>{
  try {
    const {firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer, partDescription, } = req.body;
console.log('req',req)
    const newForm = new ThreeFilterForm({firstName,lastName,companyName,email,phoneNumber,part,modality,manufacturer, partDescription,});
await newForm.save();

//      const subject = 'New Contact Form Submission';
//         const html = `
//             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//         <h2 style="color: #0056b3;">New Contact Submission</h2>
//         <p><strong> Name:</strong> ${firstName}  ${lastName}</p>
        
//         <p><strong>Company Name:</strong> ${companyName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phoneNumber}</p>
//         <p><strong>Part:</strong> ${part}</p>
//         <p><strong>Modality:</strong> ${modality}</p>
//         <p><strong>Manufacturer:</strong> ${manufacturer}</p>
//         <p><strong>Part Description:</strong> ${partDescription}</p>
//         <hr/>
//         <p style="font-size: 13px; color: #888;">This message was generated automatically from your website form.</p>
//       </div>
          
         
//         `;

      
//     // **CHANGE MADE HERE:** Sending the notification to the desired sales email.
//    await sendEmail({
//   to: 'info@infinitymedical.co', // <-- YOUR SALES EMAIL
//   subject: subject, // not subjectAdmin
//   text: `New contact form submission from ${firstName} ${lastName}`,
//   html: html,       // not htmlAdmin
// });

//     console.log("✅ Notification Email sent to Sales Team!");

//      const subjectClient = 'Thank You for Contacting Us!';
//     const htmlClient = `
//         <h3>Dear ${firstName},</h3>
//         <p>Thank you for submitting your contact form. We have successfully received your inquiry and will get back to you shortly.</p>
//         <p>Here is a summary of the information you provided:</p>
//         <ul>
    
//             <li><strong>Email:</strong> ${email}</li>
//             <li><strong>Phone:</strong> ${phoneNumber}</li>
//         <li><strong>Phone:</strong> ${part}</li>
//         <li><strong>Phone:</strong> ${modality}</li>
//         <li><strong>Phone:</strong> ${manufacturer}</li>
//             <li><strong>Your Comment:</strong> ${partDescription || 'N/A'}</li>
//         </ul>
//         <p>Best Regards,</p>
//         <p>The Infinity Global</p>
//     `;

//     // Sending the confirmation to the client's submitted email.
//     await sendEmail({
//       to: email, // <-- Client's Email Address
//       subject: subjectClient,
//       text: `Thank you, ${firstName} ${lastName}. We received your contact form.`,
//       html: htmlClient,
//     });
//     console.log("✅ Confirmation Email sent to Client!");
    



    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: 'Server error while submitting form' });
  }
};


const fill=async(req,res)=>{
  try {
    const {firstName,lastName,companyName,email,phoneNumber, partDescription, } = req.body;

    const newForm = new FilterForm({firstName,lastName,companyName,email,phoneNumber, partDescription,});
await newForm.save();

    
//    const subject = 'New Contact Form Submission';
//         const html = `
//             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//         <h2 style="color: #0056b3;">New Contact Submission</h2>
//         <p><strong> Name:</strong> ${firstName}  ${lastName}</p>
        
//         <p><strong>Company Name:</strong> ${companyName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      
//         <p><strong>Part Description:</strong> ${partDescription}</p>
//         <hr/>
//         <p style="font-size: 13px; color: #888;">This message was generated automatically from your website form.</p>
//       </div>
          
         
//         `;

      
//     // **CHANGE MADE HERE:** Sending the notification to the desired sales email.
//    await sendEmail({
//   to: 'info@infinitymedical.co', // <-- YOUR SALES EMAIL
//   subject: subject, // not subjectAdmin
//   text: `New contact form submission from ${firstName} ${lastName}`,
//   html: html,       // not htmlAdmin
// });

//     console.log("✅ Notification Email sent to Sales Team!");

//      const subjectClient = 'Thank You for Contacting Us!';
//     const htmlClient = `
//         <h3>Dear ${firstName},</h3>
//         <p>Thank you for submitting your contact form. We have successfully received your inquiry and will get back to you shortly.</p>
//         <p>Here is a summary of the information you provided:</p>
//         <ul>
    
//             <li><strong>Email:</strong> ${email}</li>
//             <li><strong>Phone:</strong> ${phoneNumber}</li>
      
//             <li><strong>Your Part Description:</strong> ${partDescription || 'N/A'}</li>
//         </ul>
//         <p>Best Regards,</p>
//         <p>The Infinity Global</p>
//     `;

//     // Sending the confirmation to the client's submitted email.
//     await sendEmail({
//       to: email, // <-- Client's Email Address
//       subject: subjectClient,
//       text: `Thank you, ${firstName} ${lastName}. We received your contact form.`,
//       html: htmlClient,
//     });
//     console.log("✅ Confirmation Email sent to Client!");
    
     

    res.status(201).json({ message: 'Form submitted successfully', data: newForm });
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ message: 'Server error while submitting form' });
  }
};





module.exports={fill,fillCon}