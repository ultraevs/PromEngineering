import { useEffect } from "react";

import mpt from "../../assets/logo/MPT logo.svg";
import rrl from "../../assets/logo/russian railways logo.svg";
import cppk from "../../assets/logo/CPPK logo.svg";
import mvm from "../../assets/logo/MVM logo.svg";
import kmz from "../../assets/logo/KMZ logo.svg";
import tvz from "../../assets/logo/TVZ logo.svg";

import "./Customers.css";

const Customers = () => {
  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }

  return (
    <section className="customers_block">
      <div className="container">
        <h2 className="customers_title">Наши заказчики</h2>
      </div>

      <div className="customers_container">
        <div className="scroller" data-direction="left" data-speed="slow">
          <div className="scroller__inner">
            <a href="https://www.minpromtorg.gov.ru/">
              <img src={mpt} alt="" />
            </a>
            <a href="https://www.rzd.ru/">
              <img src={rrl} alt="" />
            </a>
            <a href="https://central-ppk.ru/new/">
              <img src={cppk} alt="" />
            </a>
            <a href="https://metrowagonmash.ru/">
              <img src={mvm} alt="" />
            </a>
            <a href="https://www.kolomnadiesel.com/">
              <img src={kmz} alt="" />
            </a>
            <a href="http://www.tvz.ru/">
              <img src={tvz} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
