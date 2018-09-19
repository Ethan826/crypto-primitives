import * as crypto from "crypto-js";
import * as React from "react";

interface IState {
  bestNonce: string;
  bestZeroes: number;
  hashNonce: string;
  bestHashed: string;
  nonce: string;
}

export interface IProps {
  blockHash?: string;
  changeBlock?: (e: string) => void;
  changeDifficulty?: (e: string) => void;
  difficulty: number;
}

class Mining extends React.Component {
  public state: IState;

  constructor(public props: IProps) {
    super(props);
    this.state = {
      bestHashed: "",
      bestNonce: "",
      bestZeroes: 0,
      hashNonce: "",
      nonce: ""
    };
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
              <dd>{this.state.hashNonce}</dd>
              <dt>Best result so far</dt>
              <dd>
                {this.state.bestZeroes
                  ? this.state.bestNonce +
                    " gives " +
                    this.state.bestZeroes +
                    " leading zeroes."
                  : ""}
                <br />
                {this.state.bestZeroes ? "(" + this.state.bestHashed + ")" : ""}
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
    let nonce = "";
    let hashNonce = "";
    let reHashed = "";

    setInterval(() => {
      nonce = crypto.enc.Hex.stringify(crypto.lib.WordArray.random(16));
      hashNonce = this.props.blockHash + nonce;
      reHashed = crypto.SHA256(hashNonce).toString();
      let x = 0;
      for (; x < reHashed.length; ++x) {
        if (reHashed.charAt(x) !== "0") {
          break;
        }
      }
      if (x > this.state.bestZeroes) {
        this.setState({
          bestHashed: reHashed,
          bestNonce: nonce,
          bestZeroes: x
        });
      }

      this.setState({
        hashNonce,
        nonce
      });

      if (this.state.bestZeroes >= this.props.difficulty) {
        return;
      }
    }, 0);
  };
}

export default Mining;
