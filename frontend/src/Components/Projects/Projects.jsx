import React, { useState } from "react";
import Modal from "../Modal/Modal.jsx";

import img1 from "../../assets/images/mvm.png";
import img3 from "../../assets/images/Тверской.jpg";
import Close from "../../assets/icons/close.svg";

import mvm1 from "../../assets/images/mvm_1.jpg"
import mvm2 from "../../assets/images/mvm_4.jpg"
import mvm3 from "../../assets/images/mvm_10.jpg"

import kolom1 from "../../assets/images/kolom1.jpg"
import kolom2 from "../../assets/images/kolom2.jpg"
import kolom3 from "../../assets/images/kolom3.jpg"


import nevz1 from "../../assets/images/nevz1.jpg"
import nevz2 from "../../assets/images/nevz2.jpg"
import nevz3 from "../../assets/images/nevz3.jpg"


import styles from "./Projects.module.css";
import classNames from "classnames";
import CarouselBox from "../СarouselBox/CarouselBox.jsx";

const Projects = () => {
  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);

  return (
    <section id="projects" className={styles.projects__block}>
      <div className="container">
        <h2 className={classNames("title", styles.title)}>Наши проекты</h2>
        <p className={styles.projects_subtitle}>с географией по всей стране</p>
        <div className={styles.projects_blocks}>
          <div className={classNames(styles.projects_block, styles.metrovagon)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={mvm1} ph2={mvm2} ph3={mvm3} name={"АО «МЕТРОВАГОНМАШ»"} />
            </div>

            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>АО «МЕТРОВАГОНМАШ»</h4>
              <p className={styles.projects_block_leader}>
                Руководитель проекта: Колдашов Сергей
              </p>
              <a href="tel:+79154200001">+7 (915) 420-00-01</a>
              <a href="mailto:s.koldashov@tmh.pro">s.koldashov@tmh.pro</a>
              <button
                id="1"
                className={styles.projects_block_button}
                onClick={() => setModalActive1(true)}
              >
                Подробнее
              </button>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.kolom)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={kolom1} ph2={kolom2} ph3={kolom3} name={"АО «Коломенский завод»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                АО «Коломенский завод»
              </h4>
              <p className={styles.projects_block_leader}>
                Руководитель проекта: Глазков Сергей
              </p>
              <a href="tel:+79663076062">+7 (966) 307-60-62</a>
              <a href="mailto:s.glazkov@tmh.pro">s.glazkov@tmh.pro</a>
              <button
                id="1"
                className={styles.projects_block_button}
                onClick={() => setModalActive2(true)}
              >
                Подробнее
              </button>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.tverskoi)}>
            <img
              className={styles.projects_img}
              src={img3}
              alt="Метровагонмаш"
            />
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                ОАО «Тверской <br /> вагоностроительный <br /> завод»
              </h4>
              <p className={styles.projects_block_leader}>
                Руководитель проекта: Жуков Алексей
              </p>
              <a href="tel:+79065559696">+7 (906) 555-96-96</a>
              <a href="mailto:a.zhukov@tmh.pro">a.zhukov@tmh.pro</a>
              <button
                id="1"
                className={styles.projects_block_button}
                onClick={() => setModalActive3(true)}
              >
                Подробнее
              </button>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.nevz)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={nevz1} ph2={nevz2} ph3={nevz3} name={"ОАО «Новочеркасский электровозостроительный завод»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                ОАО «Новочеркасский <br /> электровозостроительный <br /> завод»
              </h4>
              <p className={styles.projects_block_leader}>
                Руководитель проекта: Морозов Максим
              </p>
              <a href="tel:+79889977500">+7 (988) 997-75-00</a>
              <a href="mailto:m.morozov@tmh.pro">m.morozov@tmh.pro</a>
              <button
                id="1"
                className={styles.projects_block_button}
                onClick={() => setModalActive3(true)}
              >
                Подробнее
              </button>
            </div>
          </div>

        </div>

        <Modal active={modalActive1} setActive={setModalActive1}>
          <button
            className={styles.close}
            onClick={() => setModalActive1(false)}
          >
            <img src={Close} alt="" />
          </button>
          <div className={styles.modal_content}>
            <img
              className={styles.modal_img}
              src={img1}
              alt=""
              width="532px"
              height="305px"
            />
            <div
              className={classNames(styles.modal_info, styles.modal_metrovagon)}
            >
              <p className={styles.modal_text}>
                <b>Метровагонмаш</b> – одно из ведущих предприятий России в
                области транспортного машиностроения. Крупнейший в стране
                производитель вагонов метро. Предприятие специализируется на
                изготовлении подвижного состава для метрополитенов и железных
                дорог, запасных частей к выпускаемому подвижному составу,
                капитальном ремонте, модернизации и сервисном обслуживании.
              </p>
              &nbsp;
              <p className={styles.modal_text}>
                <b>Продукция и услуги</b>
              </p>
              &nbsp;
              <ul
                className={classNames(styles.modal_text_ul, styles.modal_list)}
              >
                <li>
                  Изготовление современных вагонов метро для метрополитенов
                </li>
                <li>
                  Изготовление рельсовых автобусов для городского, пригородного
                  и межрегионального сообщения
                </li>
                <li>
                  Проведение капитального ремонта и модернизации вагонов метро
                </li>
                <li>Сервисное обслуживание вагонов метро</li>
              </ul>
              &nbsp;
            </div>
          </div>
        </Modal>

        <Modal active={modalActive2} setActive={setModalActive2}>
          <button
            className={styles.close}
            onClick={() => setModalActive2(false)}
          >
            <img src={Close} alt="" />
          </button>
          <div className={styles.modal_content}>
            <img
              className={styles.modal_img}
              src={kolom2}
              alt=""
              width="532px"
              height="305px"
            />

            <div className={classNames(styles.modal_info, styles.modal_kolom)}>
              <p className={styles.modal_text}>
                <b>АО «Коломенский завод»</b> является единственным в России
                производителем и лидером в области производства современных
                магистральных пассажирских тепловозов, разработчиком и
                изготовителем нового поколения пассажирских электровозов и
                грузовых тепловозов для железных дорог России, стран СНГ и
                Балтики
              </p>
              &nbsp;
            </div>
          </div>
        </Modal>

        <Modal active={modalActive3} setActive={setModalActive3}>
          <button
            className={styles.close}
            onClick={() => setModalActive3(false)}
          >
            <img src={Close} alt="" />
          </button>
          <div className={styles.modal_content}>
            <img
              className={styles.modal_img}
              src={img3}
              alt=""
              width="532px"
              height="305px"
            />

            <div
              className={classNames(styles.modal_info, styles.modal_tverskoi)}
            >
              <p className={styles.modal_text}>
                <b>ОАО «Тверской вагоностроительный завод»</b> – современное
                высокотехнологичное производство, единственное в России
                предприятие по созданию различных типов пассажирских вагонов
                локомотивной тяги для скоростей движения до 200 км/ч. Завод
                специализируется на выпуске одно- и двухэтажных пассажирских
                вагонов, вагонов для международного сообщения, различных типов
                грузовых вагонов и вагонов спецназначения, тележек для
                подвижного состава магистральных железных дорог, а также
                электропоездов нового поколения, участвует в производстве
                вагонов метро и низкопольных трамваев
              </p>
              &nbsp;
            </div>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
