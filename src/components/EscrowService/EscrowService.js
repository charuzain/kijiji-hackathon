import React, { useState } from "react";
import "./EscrowService.scss";

const EscrowService = () => {
  const [transactionStatus, setTransactionStatus] = useState("pending");
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    name: "",
    expiryDate: "",
    safeCode: "",
  });

  const handleConfirmTransaction = () => {
    setTransactionStatus("awaiting_payment");
  };

  const handlePaymentDetailsChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleConfirmPayment = () => {
    setTransactionStatus("confirmed");
  };

  const handleReleaseFunds = () => {
    setTransactionStatus("funds_released");
  };

  const handleCommentSubmit = () => {
    if (!commentInput.trim()) return;
    const newComment = {
      text: commentInput,
      username: "DefaultUser: ",
    };
    setComments([...comments, newComment]);
    setCommentInput("");
  };

  return (
    <div className="escrow__container">
      <h1 className="escrow__header">Escrow Service</h1>
      <p className="escrow__description">
        Funds are securely held until both parties confirm the transaction is
        satisfactory.
      </p>
      {transactionStatus === "pending" && (
        <button className="escrow__button" onClick={handleConfirmTransaction}>
          Confirm Transaction
        </button>
      )}
      {transactionStatus === "awaiting_payment" && (
        <div className="payment__form">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={paymentDetails.cardNumber}
            onChange={handlePaymentDetailsChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            value={paymentDetails.name}
            onChange={handlePaymentDetailsChange}
          />
          <input
            type="text"
            name="expiryDate"
            placeholder="Expiry Date MM/YY"
            value={paymentDetails.expiryDate}
            onChange={handlePaymentDetailsChange}
          />
          <input
            type="text"
            name="safeCode"
            placeholder="Security Code"
            value={paymentDetails.safeCode}
            onChange={handlePaymentDetailsChange}
          />
          <button
            className="payment__confirm-button"
            onClick={handleConfirmPayment}
          >
            Confirm Payment
          </button>
        </div>
      )}
      {transactionStatus === "confirmed" && (
        <button className="escrow__button" onClick={handleReleaseFunds}>
          Release Funds to Seller
        </button>
      )}
      {transactionStatus === "funds_released" && (
        <>
          <p className="escrow__content">
            Funds have been released to the seller.
          </p>
          <div className="comments">
            <h2 className="comments__title">Comments</h2>
            {comments.map((comment, index) => (
              <div key={index} className="comments__comment">
                <p className="comments__userName">{comment.username}</p>
                <p className="comments__text">{comment.text}</p>
              </div>
            ))}
            <input
              type="text"
              className="comments__input"
              placeholder="Leave a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
            <button className="comments__button" onClick={handleCommentSubmit}>
              Submit Comment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EscrowService;
