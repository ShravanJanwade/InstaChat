import React, { useContext, useRef, ChangeEvent } from "react";
import "./Main.css";
import { Context } from "../../context/ContextApi";
import { assets } from "../../assets/assets";

const Main: React.FC = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          // Append the base64 image to the input
          setInput(
            (prevInput: string) => `${prevInput}\n![image](${reader.result})`
          );
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="main" style={{ backgroundColor: "#09090A" }}>
      <div className="nav">
        <p>Codegram AI</p>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming travel.</p>
                <img src={assets.compass_icon} />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming travel.</p>
                <img src={assets.bulb_icon} />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming travel.</p>
                <img src={assets.message_icon} />
              </div>
              <div className="card">
                <p>Suggest beautiful places to see on an upcoming travel.</p>
                <img src={assets.code_icon} />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} />
              <p style={{ color: "white" }}>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p
                  style={{ color: "white" }}
                  dangerouslySetInnerHTML={{ __html: resultData }}
                />
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
              style={{ color: "black" }}
            />
            <div>
              <img
                src={assets.gallery_icon}
                alt=""
                onClick={openFilePicker}
                style={{ cursor: "pointer" }}
              />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Codegram may display inaccurate info, take it into consideration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
