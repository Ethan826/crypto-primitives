import * as crypto from "crypto-js";
import * as React from "react";

export interface IProps {
  bestResult?: string;
  bestResultLeadingZeroes?: number;
  blockHash?: string;
  changeBlock?: (e: string) => void;
  changeDifficulty?: (e: string) => void;
  hashNonce?: string;
}

class Mining extends React.Component {
  constructor(public props: IProps) {
    super(props);
    this.state = { nonce: "" };
  }

  public render = () => {
    return (
      <div>
        <div className="row">
          <h4>Mining</h4>
          <div className="col s12 card-panel section">
            <form>
              <div className="input-field col s12">
                <textarea
                  className="materialize-textarea"
                  onChange={this.handleChangeBlock}
                />
                <label>Data to include in block</label>
              </div>
              <div className="input-field col s12">
                <input
                  className="validate"
                  type="number"
                  min="1"
                  max="10"
                  pattern="[0-9]*"
                  onChange={this.handleChangeDifficulty}
                />
                <label>Difficulty (how many leading zeroes)</label>
              </div>
            </form>
            <dl>
              <dt>Current hash value</dt>
              <dd>{this.props.blockHash}</dd>
            </dl>
            <a
              className="waves-effect waves-light btn blue-grey lighten-2"
              onClick={this.mine}
            >
              Start Cryptomining!
            </a>
            <div className="section" />
          </div>
        </div>
        <div className="row section">
          <div className="col s12 card-panel section">
            <dl>
              <dt>Current nonce</dt>
              <dd>{this.state.nonce}</dd>
              <dt>Current hash&nbsp;+ nonce</dt>
              <dd>{this.props.hashNonce}</dd>
              <dt>Best result so far</dt>
              <dd>
                {this.props.bestResult}{" "}
                {this.props.bestResultLeadingZeroes
                  ? this.props.bestResultLeadingZeroes + " zeroes"
                  : ""}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  };

  private handleChangeBlock = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    if (this.props.changeBlock) {
      this.props.changeBlock(e.target.value);
    }
  };

  private handleChangeDifficulty = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.changeDifficulty) {
      this.props.changeDifficulty(e.target.value);
    }
  };

  private mine = () => {
    this.props.nonce = crypto.enc.Hex.stringify(crypto.lib.WordArray.random(8));
  };
}

export default Mining;
