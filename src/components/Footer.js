import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 mt-3">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            Storage
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            Textile
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            Lighting
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            Toys
          </a>
        </section>
        <section className="mb-4">
          <p className="foot-text">
            Save your time building your website from scratch. WoodMart comes
            with prebuilt demo websites that can be imported in one click.
          </p>
        </section>
        <section>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-google"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </section>
      </div>
      <div
        className="text-center p-3"
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} www.woodmart.com
      </div>
    </footer>
  );
};

export default Footer;
