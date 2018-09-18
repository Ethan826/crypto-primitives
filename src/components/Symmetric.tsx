import * as React from "react";

export interface IProps {
  ciphertext?: string;
  encrypt?: boolean;
  key?: string;
  plaintext?: string;
  clickEncrypt?: () => void;
  clickDecrypt?: () => void;
  changeKey?: (e: string) => void;
}

function Symmetric({
  ciphertext,
  clickEncrypt,
  clickDecrypt,
  encrypt,
  key,
  changeKey,
  plaintext
}: IProps) {
  const handleKeyChange = changeKey
    ? (e: React.ChangeEvent<HTMLInputElement>) => changeKey(e.target.value)
    : undefined;

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
            <textarea id="textarea1" className="materialize-textarea" />
            <label>{encrypt ? "Plaintext" : "Ciphertext"}</label>
          </div>
        </form>
      </div>
      <div className="col s6">
        <h5>{encrypt ? "Ciphertext" : "Plaintext"}</h5>
      </div>
    </div>
  );
}

export default Symmetric;
