import { connect } from "react-redux";
import Symmetric from "../components/Symmetric";
import { IStoreState } from "../types";

const mapStateToProps = ({ symmetric }: IStoreState) => {
  return symmetric;
};

export default connect(mapStateToProps)(Symmetric);
