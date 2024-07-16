import { IconReload } from "@tabler/icons-react";
import React, { useEffect } from "react";
import { useState } from "react";
function App() {
  const [pwdLen, setPwdLen] = useState(12);
  const [charsUsed, setCharsUsed] = useState(["ABC", "spe_char"]);
  const [pwd, setPwd] = useState("");

  useEffect(() => {
    regeneratePwd();
  }, [charsUsed, pwdLen]);

  function regeneratePwd() {
    let selectedChars = "";

    if (charsUsed.includes("ABC")) {
      selectedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (charsUsed.includes("abc")) {
      selectedChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (charsUsed.includes("123")) {
      selectedChars += "0123456789";
    }
    if (charsUsed.includes("spe_char")) {
      selectedChars += "~!@#$%^&*()_+{}|:<>?/;][";
    }

    let newPassword = "";
    for (let i = 0; i < pwdLen; i++) {
      const randomIndex = Math.floor(Math.random() * selectedChars.length);
      newPassword += selectedChars[randomIndex];
    }
    setPwd(newPassword);
  }

  function assessPasswordStrength() {
    if (charsUsed.length < 2) {
      if (pwdLen < 6) return "very week";
      return "week";
    } else if (charsUsed.length < 3) {
      if (pwdLen < 5) return "very week";
      if (pwdLen < 8) return "week";
      return "good";
    } else if (charsUsed.length < 4) {
      if (pwdLen < 5) return "very week";
      if (pwdLen < 8) return "week";
      if (pwdLen < 12) return "good";
      return "strong";
    } else {
      if (pwdLen < 5) return "very week";
      if (pwdLen < 8) return "week";
      if (pwdLen < 12) return "good";
      if (pwdLen < 20) return "strong";
      return "very strong";
    }
  }

  function passwordStrengthBgColor() {
    const strength = assessPasswordStrength();
    if (strength === "very week") return "#FF6347";
    if (strength === "week") return "#FFA500";
    if (strength === "good") return "#FFFF00";
    if (strength === "strong") return "#98FB98";
    return "#00FF7F";
  }

  function copyBtnClick() {
    navigator.clipboard.writeText(pwd).then(() => {
      alert("Password copied to clipboard");
    });
  }

  function onPasswordLenChange(event: any) {
    setPwdLen(event.target.value);
  }

  function isCharSelected(id: string) {
    return charsUsed.filter((e) => e === id).length > 0;
  }
  async function onSelectCheckBox(event: any) {
    const id = event.target.id;

    const isExist = charsUsed.filter((e) => e === id).length > 0;

    if (isExist) {
      if (charsUsed.length <= 1) return;
      setCharsUsed((e) => e.filter((e) => e !== id));
    } else {
      /// push not work here need to re assign list
      setCharsUsed((e) => [...e, id]);
    }
  }

  return (
    <>
      <div className="hero_section">
        <h1>
          Random Password <br />
          Generator
        </h1>
        <h2>
          Create strong and secure passwords to keep your account safe online.
        </h2>
      </div>
      <div className="parent_wrapper">
      <div className="password_generator_box">
        <div className="input_row">
          <div className="input_wrapper">
            <input type="text" readOnly value={pwd} />
            <p
              className="password_rating"
              style={{ backgroundColor: passwordStrengthBgColor() }}
            >
              {assessPasswordStrength()}
            </p>
            <p className="regenerate_btn" onClick={regeneratePwd}>
              <IconReload size={24} color="#0C0C28" stroke={1.5} />
            </p>
          </div>
          <button className="copy_btn" onClick={copyBtnClick}>
            Copy
          </button>
        </div>
        <div>
          <div className="password_len_box">
            <span>Password length({pwdLen}) :</span>
            <input
              type="range"
              name="password_len"
              id="password_len"
              min="1"
              max="50"
              value={pwdLen}
              onChange={onPasswordLenChange}
            />
          </div>
          <div className="characters_used_box">
            <span>Characters used :</span>
            <span className="checkbox_row">
              <input
                type="checkbox"
                name=""
                id="ABC"
                value="ABC"
                onChange={onSelectCheckBox}
                checked={isCharSelected("ABC")}
              />
              <label htmlFor="ABC">Abc</label>
            </span>
            <span className="checkbox_row">
              <input
                type="checkbox"
                name=""
                id="abc"
                value="abc"
                onChange={onSelectCheckBox}
                checked={isCharSelected("abc")}
              />
              <label htmlFor="abc">abc</label>
            </span>
            <span className="checkbox_row">
              <input
                type="checkbox"
                name=""
                id="123"
                value="123"
                onChange={onSelectCheckBox}
                checked={isCharSelected("123")}
              />
              <label htmlFor="123">123</label>
            </span>
            <span className="checkbox_row">
              <input
                type="checkbox"
                name=""
                id="spe_char"
                value="spe_char"
                onChange={onSelectCheckBox}
                checked={isCharSelected("spe_char")}
              />
              <label htmlFor="spe_char">@$#%+</label>
            </span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
