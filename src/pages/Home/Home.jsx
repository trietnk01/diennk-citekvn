import React from "react";
import "assets/frontpage/frontpage-main.scss";
import Logo from "assets/images/logo.svg";
import HomeIcon from "assets/images/home-icon.svg";
import { Link } from "react-router-dom";
import PCITCloud from "assets/images/pc-it-cloud.svg";
import Accounting from "assets/images/accounting.svg";
import HRAdmin from "assets/images/hr-admin.svg";
import SaleAdmin from "assets/images/sales-youtube.svg";
import VectorDown from "assets/images/vector-down.svg";
import clsx from "clsx";
function Home() {
  const [tabName, setTabName] = React.useState("now");
  const [isShowLanguage, setIsShowLanguage] = React.useState(false);
  const [languageName, setLanguageName] = React.useState("EN");
  const handleClickTab = (title) => () => {
    setTabName(title);
  };
  function handleClickLanguage() {
    setIsShowLanguage(!isShowLanguage);
  }
  const handleChooseLanguage = (title) => () => {
    setLanguageName(title);
    setIsShowLanguage(false);
  };
  return (
    <div className="font-frontpage-global">
      <div className="relative banner">
        <div className="big-screen flex flex-wrap justify-end mx-auto h-full">
          <div className="header-right"></div>
        </div>
        <div className="absolute w-full top-0 left-0 z-30">
          <div className="big-screen flex flex-wrap justify-end mx-auto">
            <div className="header-top">
              <div className="header-wrapper flex flex-wrap justify-between items-center mx-auto">
                <div className="header-top-item flex justify-between flex-wrap items-center relative">
                  <button type="button" className="header-top-item__text text-white" onClick={handleClickLanguage}>
                    {languageName}
                  </button>
                  <img src={VectorDown} className="vector-down" />
                  {isShowLanguage && (
                    <div className="absolute box-language left-0 flex flex-col">
                      <button type="button" className="language-item block w-full text-left text-white" onClick={handleChooseLanguage("EN")}>
                        English
                      </button>
                      <button type="button" className="language-item block w-full text-left text-white" onClick={handleChooseLanguage("VN")}>
                        Vietnamese
                      </button>
                    </div>
                  )}
                </div>
                <div className="header-top-item flex justify-between flex-wrap items-center relative">
                  <button className="header-top-item__text text-white" to="/">
                    Company
                  </button>
                  <img src={VectorDown} className="vector-down" />
                </div>
                <div className="header-top-item flex justify-between flex-wrap items-center relative">
                  <button className="header-top-item__text text-white" to="/">
                    Partner Market Place
                  </button>
                  <img src={VectorDown} className="vector-down" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slogan-asia-it absolute top-0 left-0 z-10 w-full h-full">
          <div className="kairos-container flex flex-wrap items-center justify-start h-full mx-auto">
            <div className="banner-slogan-left">
              Asia IT
              <br />
              Market Place
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full z-20">
          <div className="kairos-container logo-wrapper flex mx-auto justify-between flex-wrap">
            <div className="col-left">
              <div className="logo-home-text flex flex-wrap justify-between">
                <Link to="/">
                  <img src={Logo} />
                </Link>
                <div className="home-text-icon flex flex-wrap justify-between items-center">
                  <img src={HomeIcon} className="home-icon" />
                  <Link to="/" className="banner-text-home">
                    Home
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-right">
              <div className="menu flex flex-wrap justify-between">
                <div className="menu-item">
                  <Link className="text-white" to="/">
                    Auto Homepage
                  </Link>
                </div>
                <div className="menu-item">
                  <Link className="text-white" to="/">
                    Sales
                  </Link>
                </div>
                <div className="menu-item">
                  <Link className="text-white" to="/">
                    CRM
                  </Link>
                </div>
                <div className="menu-item">
                  <Link className="text-white" to="/">
                    Eletronic office
                  </Link>
                </div>
                <div className="menu-item">
                  <Link className="text-white" to="/">
                    Cloud ERP
                  </Link>
                </div>
                <div className="menu-item">
                  <Link className="text-white" to="/">
                    SSL
                  </Link>
                </div>
              </div>
              <ul className="tab-now-future m-top-100 text-center">
                <li className="inline-block">
                  <button type="button" className={clsx("text-white", tabName === "now" ? "active" : "")} onClick={handleClickTab("now")}>
                    Now
                  </button>
                </li>
                <li className="inline-block">
                  <button type="button" className={clsx("text-white", tabName === "future" ? "active" : "")} onClick={handleClickTab("future")}>
                    Future
                  </button>
                </li>
              </ul>

              {tabName === "now" ? (
                <div className="now-future-panel m-top-30 flex flex-wrap justify-between mx-auto">
                  <div className="now-future-item">
                    <div className="now-future-item__number text-center">6</div>
                    <div className="now-future-item__text text-white text-center">
                      different
                      <br />
                      IT Software
                      <br />
                      Networks
                    </div>
                  </div>
                  <div className="now-future-item">
                    <div className="now-future-item__number text-center">32</div>
                    <div className="now-future-item__text text-white text-center">partners</div>
                  </div>
                  <div className="now-future-item">
                    <div className="now-future-item__number text-center">4</div>
                    <div className="now-future-item__text text-white text-center">countries</div>
                  </div>
                </div>
              ) : (
                <div className="now-future-panel m-top-30 flex flex-wrap justify-between mx-auto">
                  <div className="now-future-item">
                    <div className="now-future-item__number text-center">12</div>
                    <div className="now-future-item__text text-white text-center">
                      different
                      <br />
                      IT Software
                      <br />
                      Networks
                    </div>
                  </div>
                  <div className="now-future-item">
                    <div className="now-future-item__number text-center">43</div>
                    <div className="now-future-item__text text-white text-center">partners</div>
                  </div>
                  <div className="now-future-item">
                    <div className="now-future-item__number text-center">56</div>
                    <div className="now-future-item__text text-white text-center">countries</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="background-pink p-top-40 p-bottom-40 big-screen mx-auto text-center">
        <p style={{ fontSize: "24px", lineHeight: "32px", color: "#181949" }}>
          You are now viewing an <strong>IT Software</strong> that has been verified by <strong>over 1 million users.</strong>
        </p>
      </div>
      <div className="big-screen mx-auto p-top-80 cloud-service text-center">
        <p style={{ fontSize: "48px", lineHeight: "65px", color: "#181949" }}>
          <strong>IT CLOUD SEA’S IT SERVICE</strong>
        </p>
      </div>
      <div className="big-screen mx-auto">
        <div className="box-wrapper p-top-80 p-bottom-80 mx-auto flex flex-wrap justify-between">
          <div className="w-3/5">
            <img src={PCITCloud} />
          </div>
          <div className="flex w-2/5 flex-col items-center justify-center">
            <div className="text-center job-name">ASSETS</div>
            <div className="job-lst">
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">Inventory Management</div>
                <div className="job-position w-3/5 text-white m-top-16 text-center">G-Book</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-light-gray mx-auto big-screen p-top-80 p-bottom-80">
        <div className="box-wrapper flex-wrap  mx-auto flex justify-between">
          <div className="flex w-3/5 flex-col items-center justify-center">
            <div className="text-center job-name">Accounting</div>
            <div className="job-lst">
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">Accounting</div>
                <div className="job-position text-white m-top-16 text-center">G-Book</div>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img src={Accounting} />
          </div>
        </div>
      </div>
      <div className="big-screen mx-auto">
        <div className="box-wrapper p-top-80 p-bottom-80 mx-auto flex flex-wrap justify-between">
          <div className="w-3/5">
            <img src={HRAdmin} />
          </div>
          <div className="flex w-2/5 flex-col items-center justify-center">
            <div className="text-center job-name">HR & Admin</div>
            <div className="job-lst">
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">Webmail</div>
                <div className="job-position text-white m-top-16 text-center">E-office</div>
              </div>
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">E- Apporval</div>
                <div className="job-position text-white m-top-16 text-center">E-office</div>
              </div>
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">E- Document</div>
                <div className="job-position text-white m-top-16 text-center">E-office</div>
              </div>
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">E- Check in.out</div>
                <div className="job-position text-white m-top-16 text-center">E-office</div>
              </div>
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">Co-work/Project</div>
                <div className="job-position text-white m-top-16 text-center">E-office</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-light-gray mx-auto big-screen p-top-80 p-bottom-80">
        <div className="box-wrapper   mx-auto flex justify-between flex-wrap">
          <div className="flex w-3/5 flex-col items-center justify-center">
            <div className="text-center job-name">Sales</div>
            <div className="job-lst">
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">Create Homepage Youtube & Instagram</div>
                <div className="job-position text-white m-top-16 text-center">Fieldmake</div>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img src={SaleAdmin} />
          </div>
        </div>
      </div>
      <div className="big-screen mx-auto">
        <div className="box-wrapper p-top-80 p-bottom-80 mx-auto flex flex-wrap justify-between">
          <div className="w-3/5">
            <img src={PCITCloud} />
          </div>
          <div className="flex w-2/5 flex-col items-center justify-center">
            <div className="text-center job-name">Customer</div>
            <div className="job-lst">
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">Customer Request Management</div>
                <div className="job-position w-3/5 text-white m-top-16 text-center">OQUFIE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background-light-gray mx-auto big-screen p-top-80 p-bottom-80">
        <div className="box-wrapper mx-auto flex flex-wrap justify-between">
          <div className="flex w-3/5 flex-col items-center justify-center">
            <div className="text-center job-name">Security</div>
            <div className="job-lst">
              <div className="job-item flex flex-col items-center">
                <div className="text-center job-description m-top-16">SSL server</div>
                <div className="job-position text-white m-top-16 text-center">SECTIGO</div>
              </div>
            </div>
          </div>
          <div className="w-2/5">
            <img src={SaleAdmin} />
          </div>
        </div>
      </div>
      <div className="big-screen mx-auto p-top-120 p-bottom-120 background-light-green">
        <div className="wrapper-content-bottom mx-auto flex justify-between flex-wrap">
          <a onClick={(event) => event.preventDefault()} className="content-bottom-item cursor-pointer">
            <div className="title">Free Test</div>
            <div className="description">Organize across all apps by hand</div>
            <div className="flex detail m-top-20 items-center">
              <div className="price" style={{ fontSize: "64px" }}>
                0
              </div>
              <div className="unit-detail">
                <div className="unit">$</div>
                <div className="per-month">Per Month</div>
              </div>
            </div>
          </a>
          <a onClick={(event) => event.preventDefault()} className="content-bottom-item cursor-pointer">
            <div className="title">Low Price</div>
            <div className="description">Monthly Fixed Amount</div>
            <div className="flex flex-wrap detail m-top-20 items-center">
              <div className="price" style={{ fontSize: "36px" }}>
                200.000
              </div>
              <div className="unit-detail 3-10">
                <div className="unit">$</div>
                <div className="per-month">Per Month</div>
              </div>
            </div>
          </a>
          <a onClick={(event) => event.preventDefault()} className="content-bottom-item cursor-pointer">
            <div className="title">Easy Using Methods</div>
            <div className="description">Various Manuals</div>
            <div className="flex flex-wrap detail m-top-20 items-center">
              <div className="price" style={{ fontSize: "36px" }}>
                200.000
              </div>
              <div className="unit-detail">
                <div className="unit">$</div>
                <div className="per-month">Per Month</div>
              </div>
            </div>
          </a>
          <a onClick={(event) => event.preventDefault()} className="content-bottom-item cursor-pointer">
            <div className="title">Verified IT Service</div>
            <div className="description">On sale in 4 countries</div>
            <div className="flex flex-wrap detail m-top-20 items-center">
              <div className="price" style={{ fontSize: "36px" }}>
                300.000
              </div>
              <div className="unit-detail">
                <div className="unit">$</div>
                <div className="per-month">Per Month</div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="big-screen mx-auto footer">
        <div className="footer-wrapper flex  mx-auto flex-wrap justify-between">
          <div className="footer-item p-top-40 p-bottom-40">
            <h3 className="title m-bottom-20">Vietnam Office</h3>
            <div className="info">
              <p>14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city</p>
              <p>Business resigtration: 0315421202</p>
              <p>
                Tel: 028-3520-2367 &nbsp;&nbsp;<Link to="/">sales@dkinno.com</Link>
              </p>
              <p>Copyright 2021 DaouKiwoom Innocation C0., Ltd</p>
            </div>
          </div>
          <div className="footer-item p-top-40 p-bottom-40">
            <h3 className="title m-bottom-20">Indonesia Office</h3>
            <div className="info">
              <p>Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia</p>
              <p>Tel: +62-21-5082-0038</p>
            </div>
          </div>
          <div className="footer-item p-top-40 p-bottom-40">
            <h3 className="title m-bottom-20">Korea Office</h3>
            <div className="info">
              <p>
                5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu,
                <br /> Seongnam-si, Gyeonggi-do, Korea
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
