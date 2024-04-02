import React, { useState } from "react";
import Modal from "../Modal/Modal.jsx";


import img1 from "../../assets/images/Метровагонмаш.png";
import img2 from "../../assets/images/Коломенский.jpg";
import img3 from "../../assets/images/Тверской.jpg";
import Close from "../../assets/icons/close.svg";

import styles from "./Projects.module.css";
import classNames from "classnames";

const Projects = () => {
  const [modalActive1, setModalActive1] = useState(false);
  const [modalActive2, setModalActive2] = useState(false);
  const [modalActive3, setModalActive3] = useState(false);

  return (
    <section id="projects" className={styles.projects__block}>
      <div className="container">
        <h2 className={classNames("title", styles.title)}>Наши проекты</h2>
        <p className={styles.projects_subtitle}>С географией по всей стране</p>
        <div className={styles.projects_blocks}>
          <div className={classNames(styles.projects_block, styles.metrovagon)}>
            <img className={styles.projects_img} src={img1} alt="Метровагонмаш" />
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>Метровагонмаш</h4>
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
            <img className={styles.projects_img} src={img2} alt="Метровагонмаш" />
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                Коломенский <br /> вагноностроительный <br /> завод
              </h4>
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
            <img className={styles.projects_img} src={img3} alt="Метровагонмаш" />
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                Тверской <br /> вагоностроительный <br /> завод
              </h4>
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
          <div className={styles.modal_info}>
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
            <ul className={classNames(styles.modal_text_ul, styles.modal_list)}>
              <li>Изготовление современных вагонов метро для метрополитенов</li>
              <li>
                Изготовление рельсовых автобусов для городского, пригородного и
                межрегионального сообщения
              </li>
              <li>
                Проведение капитального ремонта и модернизации вагонов метро
              </li>
              <li>Сервисное обслуживание вагонов метро</li>
            </ul>
            &nbsp;
            <img src={img1} alt="" width='100%'/>
          </div>
        </Modal>

        <Modal active={modalActive2} setActive={setModalActive2}>
          <button
            className={styles.close}
            onClick={() => setModalActive2(false)}
          >
            <img src={Close} alt="" />
          </button>
          <div className={styles.modal_info}>
            <p className={styles.modal_text}>
              <b>АО «Коломенский завод»</b> является единственным в России
              производителем и лидером в области производства современных
              магистральных пассажирских тепловозов, разработчиком и
              изготовителем нового поколения пассажирских электровозов и
              грузовых тепловозов для железных дорог России, стран СНГ и Балтики
            </p>
            &nbsp;
            <img src={img2} alt="" width='100%'/>
          </div>
        </Modal>

        <Modal active={modalActive3} setActive={setModalActive3}>
          <button
            className={styles.close}
            onClick={() => setModalActive3(false)}
          >
            <img src={Close} alt="" />
          </button>
          <div className={styles.modal_info}>
            <p className={styles.modal_text}>
              <b>ОАО «Тверской вагоностроительный завод»</b> – современное
              высокотехнологичное производство, единственное в России
              предприятие по созданию различных типов пассажирских вагонов
              локомотивной тяги для скоростей движения до 200 км/ч. Завод
              специализируется на выпуске одно- и двухэтажных пассажирских
              вагонов, вагонов для международного сообщения, различных типов
              грузовых вагонов и вагонов спецназначения, тележек для подвижного
              состава магистральных железных дорог, а также электропоездов
              нового поколения, участвует в производстве вагонов метро и
              низкопольных трамваев
            </p>
            &nbsp;
            <img src={img3} alt="" width='100%'/>
          </div>
        </Modal>
      </div>
    </section>
  );
};

export default Projects;
