import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">Email</span>{" "}
        <a href="mailto:cyn19870@gmail.com">cyn19870@gmail.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">Llámame</span>{" "}
        <a href="Tel: +216 21 184 010">+51 902669524</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-linkedin position-absolute"></i>
        <span className="d-block">LINKEDIN</span><a href="https://www.linkedin.com/in/cynthiaqm/" target="blank">https://www.linkedin.com/in/cynthiaqm/</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-github position-absolute"></i>
        <span className="d-block">GITHUB</span><a href="https://github.com/xynth14" target="blank">https://github.com/xynth14/</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
