import axios from "axios";
import "assets/frontpage/frontpage-main.scss";
import CodeTest from "codetestjson.json";
import { TIME_OUT } from "configs";
import React, { useEffect, useState } from "react";
function Test() {
  const [isShow, setShow] = useState(false);
  const [data, setData] = useState([]);
  let { publicationDate, blocks } = CodeTest;
  let newDate = new Date(publicationDate);
  let nDay = newDate.getDay();
  let nDate = newDate.getDate();
  let nMonth = newDate.getMonth();
  let nYear = newDate.getFullYear();
  let nHour = newDate.getHours();
  let nMiniute = newDate.getMinutes();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let dayName = days[nDay];
  let monthName = months[nMonth];
  let am_pm = nHour >= 12 ? "PM" : "AM";
  let hourReal = nHour % 12;
  hourReal = nHour === 12 ? nHour : hourReal;
  function handleToogle() {
    axios({
      method: "GET",
      url: "https://api.jsonbin.io/b/61081390f098011544a9ead8/1",
      timeout: TIME_OUT,
    })
      .then(function (res) {
        if (res && res.status === 200 && Array.isArray(res.data) && res.data.length > 0) {
          setData(res.data);
        }
      })
      .catch(function (err) {});
    setShow(!isShow);
  }
  return (
    <div className="font-frontpage-global">
      <div className="big-screen">
        <div className="kairos-container mx-auto p-top-40 p-bottom-40">
          <h1 className="headLine m-bottom-10">{CodeTest.headline}</h1>
          <div>
            <span className="by-line">{CodeTest.byline},</span> {CodeTest.source}
          </div>
          <div>{`${dayName},  ${nDate.toString().padStart(2, 0)} ${monthName} ${nYear} ${hourReal.toString().padStart(2, 0)}:${nMiniute.toString().padStart(2, 0)} ${am_pm}`}</div>
          <hr className="m-top-10 m-bottom-10" />
          <div>
            {blocks.map((item, idx) => {
              let kind = item.kind;
              let elmtNode = null;
              switch (kind) {
                case "text":
                  elmtNode = <p>{item.text}</p>;
                  break;
                case "image":
                  elmtNode = (
                    <div>
                      <img src={item.url} className="mx-auto" style={{ width: "400px" }} />
                      <p className="text-center">{item.captionText}</p>
                    </div>
                  );
                  break;
                case "pull-quote":
                  elmtNode = (
                    <div className="pull-quote mx-auto">
                      <div className="pull-quote-italic">{item.text}</div>
                      <div className="pull-quote-light">{item.attribution}</div>
                    </div>
                  );
                  break;
              }
              return (
                <div key={idx} className="m-bottom-20">
                  <div>{elmtNode}</div>
                </div>
              );
            })}
            <div className="m-bottom-40">
              <button type="button" className="toogle-more-info bg-teal-600 text-white p-top-2 p-bottom-2" name="btnLoadMore" onClick={handleToogle}>
                Toogle more info
              </button>
            </div>
            {isShow === true && data.length && (
              <div>
                {data.map((item, idx) => {
                  let elmtNode = null;
                  let { kind, list, text } = item;
                  switch (kind) {
                    case "ordered-list":
                      elmtNode = (
                        <ul className="order-list">
                          {list &&
                            list.map((itemv2, idxv2) => {
                              return (
                                <li className="flex m-bottom-10" key={idxv2}>
                                  <span className="order-number">{idxv2 + 1}.</span>
                                  <span>{itemv2}</span>
                                </li>
                              );
                            })}
                        </ul>
                      );
                      break;
                    case "text":
                      elmtNode = text;
                      break;
                  }
                  return (
                    <div key={idx} className="m-bottom-40">
                      {elmtNode}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
