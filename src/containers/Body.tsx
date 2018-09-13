import { connect } from "react-redux";
import Body from "../components/Body";
import { IStoreState } from "../types";

const mapStateToProps = ({ currentPage }: IStoreState) => currentPage;

export default connect(mapStateToProps)(Body);
