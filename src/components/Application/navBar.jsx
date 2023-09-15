import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/navBar.css";

function Navbar(props) {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 250) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <>
      <nav className="Navbar">
        <div className="container">
          <div className={`Navbar ${show && "nav___color"}`}>
            <img
              className="logo-img"
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/981880f7-88a2-4f8d-a147-96b3c20cef13/d4kyd6l-0cec9156-c3b4-4599-9e0f-9de7c01dd336.png/v1/fit/w_300,h_309/transformers_icon_by_k_liss_d4kyd6l-300w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzA5IiwicGF0aCI6IlwvZlwvOTgxODgwZjctODhhMi00ZjhkLWExNDctOTZiM2MyMGNlZjEzXC9kNGt5ZDZsLTBjZWM5MTU2LWMzYjQtNDU5OS05ZTBmLTlkZTdjMDFkZDMzNi5wbmciLCJ3aWR0aCI6Ijw9MzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.h279HEURFfO9GD4VuXAS5PGmrKO9UVlIbRweC_j1b2U"
            />

            <ul className="nav-list">
              {/* <li>
                <a className="list" href="#">
                  Otobots Apparel
                </a>
              </li> */}

              <div className="button">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  {...props}
                >
                  <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  {...props}
                >
                  <path d="M17 18c-1.11 0-2 .89-2 2a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2M1 2v2h2l3.6 7.59-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 002 2h12v-2H7.42a.25.25 0 01-.25-.25c0-.05.01-.09.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 00-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z" />
                </svg>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
