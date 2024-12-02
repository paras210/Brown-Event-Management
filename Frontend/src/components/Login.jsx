import React from "react";
import Footer from "./Footer";



export default function Login() {
    return (
        <>


            <div
                style={{
                    width: "100%",
                    height: "100vh",
                    background: "linear-gradient(to right, rgb(37 22 14), #8a5a44)",
                    paddingTop: "15px",

                }}>

                <div
                    className="navbar fs-1 d-flex justify-content-center fw-bold shadow-lg"
                    style={{
                        padding: "30px",
                        // marginTop:"5px",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg, #4e342e, #6d4c41)",
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4)",
                        maxWidth: "90%",
                        margin: "auto",
                        fontFamily: "'Playfair Display', serif",
                        textAlign: "center",
                        letterSpacing: "1px",
                        color: "#fff",
                    }}
                >
                    EventSync
                </div>
                
                <div class=" fixed-top " >
                    <button class="custom-button m-3 position-relative z-1000 " style={{ bottom: "20px", left: "20px", }}>
                        <span class="arrow">&larr;</span>
                        Go Back
                    </button>
                </div>



                <div className="container mt-5">
                    <h1 className="px-5 py-3 text-center text-white">Log In</h1>
                    <div className="input-group mb-4 justify-content-center">
                        <div className="form-floating w-25">
                            <input
                                type="text"
                                className="form-control fs-3 inpfoc"
                                id="floatingInputGroup1"
                                placeholder="Username"
                            />
                            <label htmlFor="floatingInputGroup1">Username</label>
                        </div>
                    </div>
                    <div className="input-group mb-4 justify-content-center">
                        <div className="form-floating w-25">
                            <input
                                type="email"
                                className="form-control fs-3 inpfoc"
                                id="floatingInputGroup2"
                                placeholder="Email"
                            />
                            <label htmlFor="floatingInputGroup2">Email</label>
                        </div>
                    </div>
                    <div className="input-group mb-4 justify-content-center">
                        <div className="form-floating w-25">
                            <input
                                type="password"
                                className="form-control fs-3 inpfoc"
                                id="floatingInputGroup3"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingInputGroup3">Password</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 w-50 mx-auto">
                        <button
                            className="btn btn-brown fw-bold py-2"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </div>




            </div>
            <Footer />
        </>
    );
};