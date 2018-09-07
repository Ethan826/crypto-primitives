import { connect } from "react-redux";
// import { Dispatch } from "redux";
import Body from "../components/Body";
import { IStoreState } from "../types";

const mapStateToProps = ({ navigation }: IStoreState) => navigation;

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Body);
