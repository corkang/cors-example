import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("불러오는 중...");

  useEffect(() => {
    // const url = "https://libsta.go.kr/nlstatapi/api/v1/libinfo?region=%EC%84%9C%EC%9A%B8&libCode=1010011001&libGubun=LIBTYPE000001&libName=%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%8F%84%EC%84%9C%EA%B4%80&city=%EC%84%9C%EC%B4%88%EA%B5%AC&page=1&size=1";
    // const url = "/nlstatapi/api/v1/libinfo?region=%EC%84%9C%EC%9A%B8&libCode=1010011001&libGubun=LIBTYPE000001&libName=%EA%B5%AD%EB%A6%BD%EC%A4%91%EC%95%99%EB%8F%84%EC%84%9C%EA%B4%80&city=%EC%84%9C%EC%B4%88%EA%B5%AC&page=1&size=1";
    const url = "/.netlify/functions/libinfo";

    console.log("Requested URL:", url);

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("Response JSON:", data);
  //       const lib = data.result.list[0];
  //       setText(`${lib.libName}(${lib.addr}) / Phone number: ${lib.phone}`);
  //     })
  //     .catch((err) => {
  //       console.error("Error:", err);
  //       setText("Error occured while reading data.");
  //     });
  // }, []);
  fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("Response JSON:", data);
        const lib = data.result.list[0];
        setText(`${lib.libName} (${lib.addr}) / Phone: ${lib.phone}`);
      })
      .catch((err) => {
        console.error("Error:", err);
        setText("데이터를 불러오는 중 오류가 발생했습니다.");
      });
  }, []);

  return (
    <div className="App">
      <h2>{text}</h2>
    </div>
  );
}

export default App;
