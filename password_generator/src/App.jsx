import { IconReload } from "@tabler/icons-react";
function App() {
  function regeneratePwd() {}

  function copyBtnClick() {}

  function onPasswordLenChange() {}

  function onSelectCheckBox() {}

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
      <div className="password_generator_box">
        <div className="input_row">
          <div className="input_wrapper">
            <input type="text" readOnly />
            <p className="password_rating">Very strong</p>
            <p className="regenerate_btn">
              <IconReload size={24} color="#0C0C28" stroke={1.5} />
            </p>
          </div>
          <button className="copy_btn">Copy</button>
        </div>
        <div>
          <div className="password_len_box">
            <span>Password length :</span>
            <input
              type="range"
              name="password_len"
              id="password_len"
              min="1"
              max="50"
            />
          </div>
          <div className="characters_used_box">
            <span>Characters used :</span>
            <span className="checkbox_row">
              <input type="checkbox" name="" id="ABC" />
              <label htmlFor="ABC">Abc</label>
            </span>
            <span className="checkbox_row">
              <input type="checkbox" name="" id="abc" />
              <label htmlFor="abc">abc</label>
            </span>
            <span className="checkbox_row">
              <input type="checkbox" name="" id="123" />
              <label htmlFor="123">123</label>
            </span>
            <span className="checkbox_row">
              <input type="checkbox" name="" id="spe_char" />
              <label htmlFor="spe_char">@$#%+</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
