import { useEffect } from "react";

import cppk from "../../assets/logo/CPPK logo.svg";
import mvm from "../../assets/logo/MVM logo.svg";
import kmz from "../../assets/logo/KMZ logo.svg";
import tvz from "../../assets/logo/TVZ logo.svg";
import nevz from "../../assets/logo/nevz.svg"
import csm from "../../assets/logo/csm.svg"
import dmz from "../../assets/logo/dmz.png"
import tmh from "../../assets/logo/tmh.jpg"

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
    <section id="customers" className="customers_block">
      <div className="container">
        <h2 className="title customers_title">Наши заказчики</h2>
      </div>

      <div className="customers_container">
        <div className="scroller" data-direction="left" data-speed="slow">
          <div className="scroller__inner">
            <a href="https://tmholding.ru/engineering/">
              <img className="tmh" src={tmh} alt="" />
            </a>
            <a href="https://www.nevz.com/">
              <img className="nevz" src={nevz} alt="" />
            </a>
            <a href="https://central-ppk.ru/new/">
              <img className="cppk" src={cppk} alt="" />
            </a>
            <a href="https://metrowagonmash.ru/">
              <img className="mvm" src={mvm} alt="" />
            </a>
            <a href="https://www.kolomnadiesel.com/">
              <img className="kmz" src={kmz} alt="" />
            </a>
            <a href="http://www.tvz.ru/">
              <img className="tvz" src={tvz} alt="" />
            </a>
            <a>
              <img className="csm" src={csm} alt="" width={"137px"} height={"137px"}/>
            </a>
            <a href="https://dmzavod.ru/">
              <img className="dmz" src={dmz} alt="" />
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
