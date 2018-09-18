import * as React from "react";

export interface IProps {
  changeCiphertext?: (e: string) => void;
  changeKey?: (e: string) => void;
  changePlaintext?: (e: string) => void;
  ciphertext?: string;
  clickDecrypt?: () => void;
  clickEncrypt?: () => void;
  encrypt?: boolean;
  plaintext?: string;
}

function Symmetric({
  changeKey,
  changePlaintext,
  changeCiphertext,
  ciphertext,
  clickDecrypt,
  clickEncrypt,
  encrypt,
  plaintext
}: IProps) {
  const handleKeyChange = changeKey
    ? (e: React.ChangeEvent<HTMLInputElement>) => changeKey(e.target.value)
    : undefined;

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (encrypt && changePlaintext) {
      return changePlaintext(e.target.value);
    } else if (!encrypt && changeCiphertext) {
      return changeCiphertext(e.target.value);
    } else {
      return undefined;
    }
  };

  return (
    <div className="row">
      <div className="col s6 card-panel">
        <div className="section" />
        <a
          className={
            "waves-effect waves-light btn blue-grey lighten-2" +
            (encrypt ? " disabled" : "")
          }
          onClick={clickEncrypt}
        >
          Encrypt
        </a>
        &nbsp;
        <a
          className={
            "waves-effect waves-light btn blue-grey lighten-2" +
            (encrypt ? "" : " disabled")
          }
          onClick={clickDecrypt}
        >
          Decrypt
        </a>
        <form className="section">
          <div className="input-field col s12">
            <input
              type="text"
              className="materialize-textarea"
              onChange={handleKeyChange}
            />
            <label>Key</label>
          </div>
        </form>
        <form>
          <div className="input-field col s12">
            <textarea
              id="textarea1"
              className="materialize-textarea"
              onChange={handleTextChange}
            />
            <label>{encrypt ? "Plaintext" : "Ciphertext"}</label>
          </div>
        </form>
      </div>
      <div className="col s6">
        <h5>{encrypt ? "Ciphertext" : "Plaintext"}</h5>
        <p>{encrypt ? ciphertext : plaintext}</p>
      </div>
    </div>
  );
}

export default Symmetric;
