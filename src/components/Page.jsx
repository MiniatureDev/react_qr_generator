import React, { useEffect, useState } from "react";
import QRCode from "./QRCode";

function Page() {
  const [hover, setHover] = useState(true);
  const [formHover, setFormHover] = useState(true);

  // for setting data entered by the user
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const [submitted, setSubmitted] = useState(false);

  useEffect(()=>{

  }, [])

  return (
    <div className="mx-5 my-5">
      <h1 className="text-center text-dark">
        Generate QR Code for Your Personal Information
      </h1>
      <h3
        className={
          hover
            ? "mt-3 mx-5 text-center bg-dark text-light rounded-3"
            : "mt-3 mx-5 text-center bg-warning text-black rounded-3"
        }
        onMouseMove={() => setHover(false)}
        onMouseOut={() => setHover(true)}
      >
        Entirely backend-free. Don't worry about your data being stored.
      </h3>
      <div className="row mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <main class="form-signin">
            <form
              className={
                formHover
                  ? "p-3 border border-dark border-3 rounded-3"
                  : "p-3 border border-dark border-3 rounded-3 bg-secondary text-white"
              }
              onMouseMove={() => setFormHover(false)}
              onMouseOut={() => setFormHover(true)}
              onSubmit={(e)=>{
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <h1 class="h3 mb-3 fw-normal text-center">
                Enter your details below
              </h1>

              <div className="container">
                <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-10">
                    <div className="">
                      <label htmlFor="name" className="col-md-4 form">
                        Enter name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        className="col-md-8"
                        onChange={(e)=>{
                          setName(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="bg-">
                      <label htmlFor="email" className="col-md-4 form">
                        Enter email address:
                      </label>
                      <input
                        type="email"
                        id="li_url"
                        placeholder="yourname@email.com"
                        className="col-md-8"
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="">
                      <label htmlFor="phone" className="col-md-4">
                        Enter phone number:{" "}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="071-2345689"
                        pattern="[0-9]{3}-[0-9]{7}"
                        className="col-md-8"
                        onChange={(e)=>{
                          setPhoneNumber(e.target.value)
                        }}
                        required
                      />
                    </div>
                    <div className="">
                      <label htmlFor="name" className="col-md-4 form">
                        Enter LinkedIn URL:
                      </label>
                      <input
                        type="text"
                        id="li_url"
                        placeholder="http://linkedin.com/in/yourname"
                        className="col-md-8"
                        onChange={(e)=>{
                          setLinkedin(e.target.value)
                        }}
                        required
                      />
                    </div>

                    <button
                      className="btn btn-outline-dark col-md-12 mt-4"
                      type="submit"
                    >
                      Generate QR Code &nbsp;
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-qr-code"
                        viewBox="0 0 18 18"
                      >
                        <path d="M2 2h2v2H2V2Z" />
                        <path d="M6 0v6H0V0h6ZM5 1H1v4h4V1ZM4 12H2v2h2v-2Z" />
                        <path d="M6 10v6H0v-6h6Zm-5 1v4h4v-4H1Zm11-9h2v2h-2V2Z" />
                        <path d="M10 0v6h6V0h-6Zm5 1v4h-4V1h4ZM8 1V0h1v2H8v2H7V1h1Zm0 5V4h1v2H8ZM6 8V7h1V6h1v2h1V7h5v1h-4v1H7V8H6Zm0 0v1H2V8H1v1H0V7h3v1h3Zm10 1h-1V7h1v2Zm-1 0h-1v2h2v-1h-1V9Zm-4 0h2v1h-1v1h-1V9Zm2 3v-1h-1v1h-1v1H9v1h3v-2h1Zm0 0h3v1h-2v1h-1v-2Zm-4-1v1h1v-2H7v1h2Z" />
                        <path d="M7 12h1v3h4v1H7v-4Zm9 2v2h-3v-1h2v-1h1Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-5"></div>
        <div className="col-md-2">
          {submitted?<QRCode data={{name, email, phoneNumber, linkedin}}/>:<></>}
        </div>
        <div className="col-md"></div>
      </div>
    </div>
  );
}

export default Page;
