import React, { useContext } from "react";
import { CartContext } from "../ContextApi/Context";
import modalImg from "../../assets/Group.png";
import { NavLink, useNavigate } from "react-router-dom";
function Modal({ totalCost, handleButton }) {
  const { clearStorage } = useContext(CartContext);
  const navigate = useNavigate();

  const clearData = () => {
    navigate("/");
    clearStorage();
  };
  const disabledBtn = () => {
    handleButton();
    {
      document.getElementById("my_modal_1").showModal();
    }
  };
  return (
    <div>
      <button className="" onClick={disabledBtn}>
        Purchase
      </button>
      <div>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <img src={modalImg} className="text-center mx-auto py-5" alt="" />
            <h3 className="font-bold text-black text-2xl">Buy Now</h3>
            <p className="py-4 text-black text-lg">
              total Price is ${totalCost}
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn" onClick={clearData}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
}

export default Modal;
