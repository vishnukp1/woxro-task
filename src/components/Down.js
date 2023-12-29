import React from "react";

const Down = () => {
  return (
    <div className="mx-5">
      <section className="d-flex text-center">
        <div className="Contribution_content">
          <h1>Our Contribution</h1>
          <p>
            Our core offering extends beyond mere profit generation; we
            emphasize the growth and active involvement of our user community.
            Collaborating with us represents an investment, rather than a mere
            expenditure. Our dedication to providing distinctive digital
            interactions guarantees unparalleled benefits for our clientele.
          </p>
        </div>
      </section>

      <div className="d-flex justify-content-center text-center">
        <div className="counting-Users">
          <div className="h1">5M</div>
          <div className="Users--content">Daily User Engagements</div>
        </div>
        <div className="counting-Revenue">
          <div className="h1">$100k</div>
          <div className="Users--content">Revenue Surge for a Platform</div>
        </div>
        <div className="counting-ROAS">
          <div className="h1">10X</div>
          <div className="Users--content">Daily User Engagements</div>
        </div>
      </div>

      <section className="d-flex flex-column text-center">
        <div className="ContactUs_content">
          <h1>Interested In Delving Deeper Into The Project?</h1>
          <p>
            If you'd like to explore further details about our initiatives or
            any of our affiliated brands, don't hesitate to connect. You can
            reach out to us via email at{" "}
            <span>
              <a href="">hello@abc.com</a>
            </span>{" "}
            or give us a call at +91 480 20802730.
          </p>
        </div>
        <div className="ContactUs_btns">
          <button className="btn border-white text-white">
            Ring us on Skype
          </button>
          <button className="btn bg-white">Contact Us</button>
        </div>
        <div className="h6">
          © 2019-2023 abcTechnology Solutions Pvt. Ltd. All Rights Reserved
        </div>
      </section>
    </div>
  );
};

export default Down;