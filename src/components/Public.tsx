import * as forge from "node-forge";
import * as React from "react";

export interface IProps {
  changeText?: (e: string) => void;
  changeSignature?: (e: string) => void;
  decrypt?: () => void;
  encrypt?: () => void;
  generateKeyPair?: () => void;
  keyPair?: forge.pki.KeyPair;
  sign?: () => void;
  signature: string;
  text?: string;
  textOutput?: string;
  verify?: () => void;
}

const Public = ({
  changeText,
  changeSignature,
  decrypt,
  encrypt,
  generateKeyPair,
  keyPair,
  sign,
  signature,
  text,
  textOutput,
  verify
}: IProps) => {
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    changeText && changeText(e.target.value);

  const handleSignatureChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    changeSignature && changeSignature(e.target.value);

  return (
    <div>
      <h4>Public Key Crypto</h4>
      <div className="row">
        <a className="waves-effect waves-light btn" onClick={generateKeyPair}>
          Generate Keys
        </a>
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                className="materialize-textarea"
                onChange={handleChangeText}
                value={text}
              />
              <label>Enter Text</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                type="text"
                className="input-field"
                onChange={handleSignatureChange}
                value={signature}
              />
              <label className={signature ? "active" : ""}>Signature</label>
            </div>
          </div>
        </form>
        <div className="col s12 section">
          <p className="flow-text">{textOutput}</p>
        </div>
        <div className="section">
          <a
            className={
              "waves-effect waves-light btn" + (keyPair ? "" : " disabled")
            }
            onClick={encrypt}
          >
            Encrypt
          </a>
          &nbsp;
          <a
            className={
              "waves-effect waves-light btn" + (keyPair ? "" : " disabled")
            }
            onClick={decrypt}
          >
            Decrypt
          </a>
          &nbsp;
          <a
            className={
              "waves-effect waves-light btn" + (keyPair ? "" : " disabled")
            }
            onClick={sign}
          >
            Sign
          </a>
          &nbsp;
          <a
            className={
              "waves-effect waves-light btn" +
              (!keyPair || !text ? " disabled" : "")
            }
            onClick={verify}
          >
            Verify
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col s12 card-panel">
          <dl>
            <dt>Public Key</dt>
            <dd>
              <code>
                {keyPair ? forge.pki.publicKeyToPem(keyPair.publicKey) : ""}
              </code>
            </dd>
            <dt>Private Key</dt>
            <dd>
              <code>
                {keyPair ? forge.pki.privateKeyToPem(keyPair.privateKey) : ""}
              </code>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Public;

// const keypair = forge.pki.rsa.generateKeyPair();

// const encrypted = keypair.publicKey.encrypt(new Buffer("Hello world", "utf8"));
// const decrypted = keypair.privateKey.decrypt(encrypted);

// // tslint:disable-next-line:no-console
// console.log(decrypted);
