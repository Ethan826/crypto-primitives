import { connect } from "react-redux";
// import { Dispatch } from "redux";
import Body from "../components/Body";
import { IStoreState } from "../components/types";

const mapStateToProps = ({ currentPage }: IStoreState) => currentPage;

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(Body);
