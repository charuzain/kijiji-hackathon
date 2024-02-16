import React, { useState } from "react";
import "./EscrowService.scss";

const EscrowService = () => {
  const [transactionStatus, setTransactionStatus] = useState("pending");
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleConfirmTransaction = () => {
    // Simulate confirming the transaction
    setTransactionStatus("confirmed");
  };

  const handleReleaseFunds = () => {
    // Simulate releasing the funds to the seller
    setTransactionStatus("funds_released");
  };

  const handleCommentSubmit = () => {
    // Prevent submitting empty comments
    if (!commentInput.trim()) return;

    // Add the new comment to the comments array
    setComments([...comments, commentInput]);
    setCommentInput(""); // Clear the input box after submitting
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
                {comment}
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

// import React, { useState } from "react";
// import "./EscrowService.scss";

// const EscrowService = () => {
//   const [transactionStatus, setTransactionStatus] = useState("pending");

//   const handleConfirmTransaction = () => {
//     // Simulate confirming the transaction
//     setTransactionStatus("confirmed");
//   };

//   const handleReleaseFunds = () => {
//     // Simulate releasing the funds to the seller
//     setTransactionStatus("funds_released");
//   };

//   return (
//     <div className="escrow-container">
//       <h1 className="escrow-header">Escrow Service</h1>
//       <p className="escrow-description">
//         Funds are securely held until both parties confirm the transaction is
//         satisfactory.
//       </p>
//       {transactionStatus === "pending" && (
//         <button className="escrow-button" onClick={handleConfirmTransaction}>
//           Confirm Transaction
//         </button>
//       )}
//       {transactionStatus === "confirmed" && (
//         <button className="escrow-button" onClick={handleReleaseFunds}>
//           Release Funds to Seller
//         </button>
//       )}
//       {transactionStatus === "funds_released" && (
//         <p>Funds have been released to the seller.</p>
//       )}
//     </div>
//   );
// };

// export default EscrowService;
