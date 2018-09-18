import { connect } from "react-redux";
import Main from "../components/Main";
import { IStoreState } from "../types";

export function mapStateToProps({ navigation }: IStoreState) {
  return {
    currentPage: navigation.currentPage
  };
}

export default connect(mapStateToProps)(Main);
