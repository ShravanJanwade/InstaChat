import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/ContextApi";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, previousPrompts, setRecentPrompt, newChat } =
    useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: "#001524", marginTop: "-30px" }}
    >
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          className="menu"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nO3WoREAIAwEQfovKyksSAQimrDbwc2bXwsAOKoq6z05JSSuEAAAaD36fnNKSPQTAQDAkPebU0LiCgGAn21ViEka78Lu0AAAAABJRU5ErkJggg=="
        />

        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompts.map((item, index) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-entry"
                  key={index}
                >
                  <img src={assets.message_icon} />
                  <p className="side-title" style={{ color: "white" }}>
                    {item.slice(0, 18)} ...
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} />
          {extended && <p>Setting</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
