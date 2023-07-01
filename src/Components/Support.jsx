import Support1 from "../assets/support-1.webp";
import Support2 from "../assets/support-2.webp";
import Support3 from "../assets/support-3.webp";
import Support4 from "../assets/support-4.webp";

function Support() {
  return (
    <div className="container supportContainer d-flex justify-content-center">
      <div className="row supportRow">
        <div className="supportItem col-lg-3 col-md-6 col-sm-12 d-flex">
          <div className="supportImage">
            <img src={Support1} alt="" />
          </div>
          <div className="supportText d-flex flex-column">
            <h3 className="fw-bold align-items-center">Free Shipping</h3>
            <p className="fw-bold opacity-75 align-items-center">
              Free shipping on all order
            </p>
          </div>
        </div>
        <div className="supportItem col-lg-3 col-md-6 col-sm-12 d-flex">
          <div className="supportImage">
            <img src={Support2} alt="" />
          </div>
          <div className="supportText">
            <h3 className="fw-bold">Support 24/7</h3>
            <p className="fw-bold opacity-75">Free shipping on all order</p>
          </div>
        </div>
        <div className="supportItem col-lg-3 col-md-6 col-sm-12 d-flex">
          <div className="supportImage">
            <img src={Support3} alt="" />
          </div>
          <div className="supportText">
            <h3 className="fw-bold">Money Return</h3>
            <p className="fw-bold opacity-75">Free shipping on all order</p>
          </div>
        </div>
        <div className="supportItem col-lg-3 col-md-6 col-sm-12 d-flex">
          <div className="supportImage">
            <img src={Support4} alt="" />
          </div>
          <div className="supportText">
            <h3 className="fw-bold">Order Discount</h3>
            <p className="fw-bold opacity-75">Free shipping on all order</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
