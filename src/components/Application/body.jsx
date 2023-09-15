import React, { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./css/body.module.css";
import { productDisplay } from "./data/data";
import Modal from "react-modal";
import { Login } from "./userLogin/userLogin";
import { Register } from "./userLogin/userRegister";
import UserLogin from "../../userLog";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "opacity 1s ease-in-out",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Modal.setAppElement("#root");

function Body() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {productDisplay.map((item) => (
        <div key={item.id} className={classes.cardcontainer}>
          <div className={classes.card}>
            <a onClick={openModal}>
              <img className={classes.img} src={item.image} alt="" />
            </a>
            <div className={classes.content}></div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <button className={classes.button} onClick={closeModal}>
          X
        </button>

        <UserLogin />
      </Modal>
    </>
  );
}

export default Body;
