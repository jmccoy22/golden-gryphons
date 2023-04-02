import React, { useState } from "react";
import Modal from "react-modal";

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="footer">
      <small>&copy; 2023 Golden Grphyons</small>
      <br/>
      <button onClick={openModal} style={{border: "none", textDecoration: "underline", cursor: "pointer", color: "#0000EE", background: "none"}}>Privacy Policy</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Privacy Policy</h2>
        <p>Golden Gryphons Netball understand the importance of protecting your privacy. We are stronly committed to protecting the security of the personal information provided to us.
            We acknowledge that the success of our business is largely dependent upon your participation and that of other individuals with whom we conduct business. 
            Any information collected will be managed with a high degree of integrity and care.
            Our aim is to comply at all times with the privacy laws that apply to us. If you have a comment, query or complaint regarding a privacy matter, we encourage you to contact us.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}