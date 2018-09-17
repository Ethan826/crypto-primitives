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
    ? (e: React.ChangeEvent<HTMLTextAreaElement>) => changeKey(e.target.value)
    : undefined;

  return (
    <div className="row">
      <div className="col s12">
        <h4>Symmetric Encryption</h4>
        <div className="card-panel">
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
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  onChange={handleKeyChange}
                />
                <label>Key</label>
              </div>
            </div>
          </form>
        </div>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea" />
                <label>{encrypt ? "Plaintext" : "Ciphertext"}</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <h5>{encrypt ? "Ciphertext" : "Plaintext"}</h5>
        <p className="flow-text">{key}</p>
      </div>
    </div>
  );
}

export default Symmetric;
