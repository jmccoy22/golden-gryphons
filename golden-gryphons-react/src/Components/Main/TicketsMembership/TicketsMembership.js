import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function TicketMembershipForm() {
  const [activeForm, setActiveForm] = useState('tickets');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [matchDateTime, setMatchDateTime] = useState(null);
  const [formData, setFormData] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission based on activeForm value
    if (activeForm === 'tickets') {
      // Handle ticket form submission
      // Here we are just simulating a submission with a timeout function
      setTimeout(() => {
        setSubmissionMessage('Your ticket/s have been sent to your email.');
      }, 2000);
    } else {
      // Handle membership form submission
      // Here we are just simulating a submission with a timeout function
      setTimeout(() => {
        setSubmissionMessage('Thank you, we will be in touch.');
      }, 2000);
    }
  };

  return (
    <div className="TicketsMembership">
      <section id ="tickets_membership">
      <h1 style={{ color: "#a18525" }}>Ticket & Membership</h1>
      <div className='back-to-top'>
      <a href="#navigation" className="back-to-top">Back to top</a>
      </div>
      <br/>
      <div className="form-tabs">
        <button className={activeForm === 'tickets' ? 'active' : ''} onClick={() => setActiveForm('tickets')}>Tickets</button>
        <button className={activeForm === 'membership' ? 'active' : ''} onClick={() => setActiveForm('membership')}>Membership</button>
      </div>
      <form onSubmit={handleSubmit}>
        {activeForm === 'tickets' && (
          <div>
            <br/>
            <label>
              Name:
              <input type="text" name="name" value={formData.name || ''} onChange={handleFormChange} required/>
            </label>
            <br/>
            <label>
              Email:
              <input type="email" name="email" value={formData.email || ''} onChange={handleFormChange} required />
            </label>
            <br/>
            <label>
              Number of Tickets:
              <input type="number" name="numberOfTickets" value={formData.numberOfTickets || ''} onChange={handleFormChange} min={1} max={10} required />
            </label>
            <br/>
            <label>
                Match Date and Time:
                <DatePicker
                  selected={matchDateTime}
                  onChange={date => setMatchDateTime(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                  placeholderText="Select match date and time"
                  name="matchDateTime"
                  required/>
            </label>
            <br/>
            <h3>Payment Details:</h3>
            <label>
              Card Number:
              <input type="text" name="cardNumber" value={formData.cardNumber || ''} onChange={handleFormChange} required />
            </label>
            <label>
              Expiration Date:
              <input type="text" name="expirationDate" value={formData.expirationDate || ''} onChange={handleFormChange} required/>
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" value={formData.cvv || ''} onChange={handleFormChange} required />
            </label>
            <br/>
            <br/>
            <button type="submit">Submit Ticket Form</button>
          </div>
        )}
        {activeForm === 'membership' && (
          <div>
            <br/>
            <label>
              Name:
              <input type="text" name="name" value={formData.name || ''} onChange={handleFormChange} required/>
            </label>
            <br/>
            <label>
              Email:
              <input type="email" name="email" value={formData.email || ''} onChange={handleFormChange} required />
            </label>
            <br/>
            <label>
              Date of Birth:
              <DatePicker
                selected={dateOfBirth}
                onChange={(date) => setDateOfBirth(date)}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                placeholderText="Select date"
                required/>
            </label>
            <br/>
            <label>
              <b>Type of Membership</b> 
              <br/>
              <select name="membershipType" value={formData.membershipType || ''} onChange={handleFormChange} required>
                <option value="">Select Membership Type</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Silver</option>
                <option value="VIP">Gold</option>
              </select>
            </label>
            <br/>
            <h3>Payment Details:</h3>
            <label>
              Card Number:
              <input type="text" name="cardNumber" value={formData.cardNumber || ''} onChange={handleFormChange} required />
            </label> 
            <label>
              Expiration Date:
              <input type="text" name="expirationDate" value={formData.expirationDate || ''} onChange={handleFormChange} required />
            </label>
            <label>
              CVV:
              <input type="text" name="cvv" value={formData.cvv || ''} onChange={handleFormChange} required />
            </label>
            <br/>
            <br/>
            <button type="submit">Submit Membership Form</button>
          </div>
        )}
      </form>
      <br/>
      {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
      </section>
    </div>
  );
}
export default TicketMembershipForm;