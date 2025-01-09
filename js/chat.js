// Keep only WhatsApp button styles and functionality
const chatStyles = document.createElement("style");
chatStyles.textContent = `
  /* WhatsApp Button Styles */
  .whatsapp-btn {
    position: fixed;
    right: 25px;
    bottom: 25px;
    z-index: 999;
    background-color: #25d366;
    color: white;
    border-radius: 50px;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    animation: pulse 2s infinite;
  }

  .whatsapp-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    background-color: #22bf5b;
  }

  .whatsapp-icon {
    font-size: 24px;
  }

  .whatsapp-text {
    font-size: 14px;
    font-weight: 500;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
    70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
  }

  @media (max-width: 768px) {
    .whatsapp-text {
      display: none;
    }
    
    .whatsapp-btn {
      padding: 12px;
    }
  }
`;

// Create WhatsApp button
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/94705924395"; // Replace with your number
whatsappBtn.className = "whatsapp-btn";
whatsappBtn.target = "_blank";
whatsappBtn.innerHTML = `
  <i class="fab fa-whatsapp whatsapp-icon"></i>
  <span class="whatsapp-text">Chat on WhatsApp</span>
`;

document.head.appendChild(chatStyles);
document.body.appendChild(whatsappBtn);
