import * as forge from "node-forge";
import * as React from "react";

export interface IProps {
  changeText?: (e: string) => void;
  decrypt?: () => void;
  encrypt?: () => void;
  generateKeyPair?: () => void;
  keyPair?: forge.pki.KeyPair;
  sign?: () => void;
  text?: string;
  textOutput?: string;
}

const Public = ({
  changeText,
  decrypt,
  encrypt,
  generateKeyPair,
  keyPair,
  sign,
  textOutput
}: IProps) => {
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    changeText && changeText(e.target.value);

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
              />
              <label>Enter Text</label>
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
