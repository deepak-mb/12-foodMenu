import React, { Component } from "react";
import { getMenu } from "../../actions/foodActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Menu from "./Menu";

class Menus extends Component {
  componentDidMount() {
    this.props.getMenu();
  }
  render() {
    let { menuitems } = this.props;
    // console.log(menuitems);
    if (!menuitems) {
      return (
        <div
          className="row"
          style={{ justifyContent: "center", height: "100vh" }}
        >
          <img
            src="https://freepreloaders.com/wp-content/uploads/2019/05/bars.svg"
            alt="Loader"
          />
        </div>
      );
    } else {
      return (
        <div>
          <h1 className="display-4 text-danger">Menu</h1>
          {menuitems.map(item => {
            return <Menu key={item.id} item={item} />;
          })}
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  menuitems: state.menu.menu
});

export default connect(
  mapStateToProps,
  { getMenu }
)(Menus);
