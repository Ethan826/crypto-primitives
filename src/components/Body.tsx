import * as React from "react";

export default class Body extends React.Component {
  public render() {
    return (
      <div>
        <h1>Crypto Demo</h1>
        <p>
          This web app demonstrates three building blocks of cryptography, two
          of which are core to blockchain technologies:
        </p>
        <dl>
          <dt>Cryptographic Hashing</dt>
          <dd>
            A one-way function that converts data (of any size) into seemingly
            random data (of a fixed size).
          </dd>
          <dt>Symmetric Cryptography</dt>
          <dd>
            A way to encrypt data among entities who share a common secret.
          </dd>
          <dt>Public Key Cryptography</dt>
          <dd>A way to encrypt data without any shared secrets.</dd>
        </dl>
      </div>
    );
  }
}
