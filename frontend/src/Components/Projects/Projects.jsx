import React, { useState } from "react";

import mvm1 from "../../assets/images/mvm_1.jpg"
import mvm2 from "../../assets/images/mvm_4.jpg"
import mvm3 from "../../assets/images/mvm_10.jpg"

import kolom1 from "../../assets/images/kolom1.jpg"
import kolom2 from "../../assets/images/kolom2.jpg"
import kolom3 from "../../assets/images/kolom3.jpg"

import tvz1 from "../../assets/images/tvz1.jpg"
import tvz2 from "../../assets/images/tvz2.jpg"
import tvz3 from "../../assets/images/tvz3.jpg"

import nevz1 from "../../assets/images/nevz1.jpg"
import nevz2 from "../../assets/images/nevz2.jpg"
import nevz3 from "../../assets/images/nevz3.jpg"

import dmz1 from "../../assets/images/dmz1.jpg"
import dmz2 from "../../assets/images/dmz2.jpg"
import dmz3 from "../../assets/images/dmz3.jpg"

import bmz1 from "../../assets/images/bmz1.jpg"
import bmz2 from "../../assets/images/bmz2.jpg"
import bmz3 from "../../assets/images/bmz3.jpg"

import cppk1 from "../../assets/images/cppk1.jpeg"
import cppk2 from "../../assets/images/cppk2.jpeg"
import cppk3 from "../../assets/images/cppk3.jpeg"

import tmx1 from "../../assets/images/tmx1.jpg"
import tmx2 from "../../assets/images/tmx2.jpg"
import tmx3 from "../../assets/images/tmx3.jpg"

import tmx_p1 from "../../assets/images/tmx_p1.jpeg"
import tmx_p2 from "../../assets/images/tmx_p2.jpg"
import tmx_p3 from "../../assets/images/tmx_p3.jpg"

import mvm_s1 from "../../assets/images/mvm_s1.jpg"
import mvm_s2 from "../../assets/images/mvm_s2.jpg"
import mvm_s3 from "../../assets/images/mvm_s3.jpg"

import oervz1 from "../../assets/images/oervz1.jpg"
import oervz2 from "../../assets/images/oervz2.png"
import oervz3 from "../../assets/images/oervz3.jpg"

import svarmash1 from "../../assets/images/svarmash1.jpg"
import svarmash2 from "../../assets/images/svarmash2.jpg"
import svarmash3 from "../../assets/images/svarmash3.jpg"

import styles from "./Projects.module.css";
import classNames from "classnames";
import CarouselBox from "../СarouselBox/CarouselBox.jsx";

const Projects = () => {
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
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.tverskoi)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={tvz1} ph2={tvz2} ph3={tvz3} name={"ОАО «Тверской вагоностроительный завод»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                ОАО «Тверской <br /> вагоностроительный завод»
              </h4>
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
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.dmz)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={dmz1} ph2={dmz2} ph3={dmz3} name={"АО «Демиховский машиностроительный завод»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                АО «Демиховский <br /> машиностроительный завод»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.bmz)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={bmz1} ph2={bmz2} ph3={bmz3} name={"АО «Брянский машиностроительный завод»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                АО «Брянский <br /> машиностроительный завод»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.cppk)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={cppk1} ph2={cppk2} ph3={cppk3} name={"АО «Центральная пригородная пассажирская компания»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                АО «Центральная пригородная <br /> пассажирская компания»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.tmx_i)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={tmx1} ph2={tmx2} ph3={tmx3} name={"«ТМХ инжиниринг»"} />
            </div>
            <div className={classNames(styles.projects_block_info, styles.projects_block_info_tmx)}>
              <h4 className={styles.projects_block_name}>
                «ТМХ инжиниринг»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.tmx_p)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={tmx_p2} ph2={tmx_p1} ph3={tmx_p3} name={"«ТМХ пассажирский транспорт»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                «ТМХ <br /> пассажирский транспорт»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.metrovagon)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={mvm_s1} ph2={mvm_s2} ph3={mvm_s3} name={"«Метровагонмаш-сервис»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                АО «Метровагонмаш-сервис»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.oervz)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={oervz1} ph2={oervz2} ph3={oervz3} name={"АО «Октябрьский электровагоноремонтный завод»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                АО «Октябрьский <br /> электровагоноремонтный <br /> завод»
              </h4>
            </div>
          </div>

          <div className={classNames(styles.projects_block, styles.svarmash)}>
            <div className={styles.projects_img}>
              <CarouselBox ph1={svarmash1} ph2={svarmash2} ph3={svarmash3} name={"ОАО «ЦЕНТРОСВАРМАШ»"} />
            </div>
            <div className={styles.projects_block_info}>
              <h4 className={styles.projects_block_name}>
                ОАО «ЦЕНТРОСВАРМАШ»
              </h4>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
