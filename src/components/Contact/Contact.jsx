import React from 'react'
import './Contact.css'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e3fa6ac5-b15e-4946-a62c-807552838137");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};




  return (
    <div className='contact'>
        <h1>Contact Me</h1>
      <form onSubmit={onSubmit}>
        <label>Your Name</label>
        <input type="text" name='name' placeholder='Enter Your Name' required />
        <label>Email</label>
        <input type="email" name='email' placeholder='Enter your email' required />
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your phone number' required />
        <label>Write your message here</label>
        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn'>Send Message</button>
      </form>
      <span>{result}</span>
    </div>
  )
}

export default Contact
