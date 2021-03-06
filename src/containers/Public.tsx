import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../actions";
import { PublicAction } from "../actions";
import Public from "../components/Public";
import { IStoreState } from "../types";

const mapStateToProps = ({ pki }: IStoreState) => pki;

const mapDispatchToState = (dispatch: Dispatch<PublicAction>) => {
  return {
    changeSignature: (e: string) => dispatch(actions.publicChangeSignature(e)),
    changeText: (e: string) => dispatch(actions.publicChangeText(e)),
    decrypt: () => dispatch(actions.publicDecrypt()),
    encrypt: () => dispatch(actions.publicEncrypt()),
    generateKeyPair: () => dispatch(actions.publicGenerateKeyPair()),
    sign: () => dispatch(actions.publicSign()),
    verify: () => dispatch(actions.publicVerify())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(Public);
