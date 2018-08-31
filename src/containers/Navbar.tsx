import { connect } from "react-redux";
import { Dispatch } from "redux";
import Navbar from "../components/Navbar";
import { IPageAction, IPageState, Page } from "../reducers/CurrentPage";

export function mapStateToProps({ currentPage }: IPageState) {
  return { currentPage };
}

export function mapDispatchToProps(dispatch: Dispatch<IPageAction>) {
  return {
    onClick: () => dispatch({ type: Page.Hashing })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
