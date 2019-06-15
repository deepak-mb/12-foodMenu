import React, { Component } from "react";
import { getRestaurantData } from "../../actions/foodActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class About extends Component {
  componentDidMount() {
    this.props.getRestaurantData();
  }
  render() {
    const { restaurantInfo } = this.props;
    // console.log(restaurantInfo);
    if (!restaurantInfo) {
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
          <h1 className="display-4 text-danger">About Us</h1>
          <div className="row my-3">
            <div className="col-12 col-sm-12 col-md-3">
              <img src={restaurantInfo.logo} alt="" />
            </div>
            <div className="col-12 col-sm-12 col-md-9">
              <h3>{restaurantInfo.name}</h3>
              <p>{restaurantInfo.address}</p>
              <p>Average Delivery Time: {restaurantInfo.avg_delivery_time}</p>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-12">
              <h4>Delivery Details:</h4>
              <p>
                <b>Deliverable Area:</b>{" "}
                {restaurantInfo.deliverable_area.map(area => {
                  return <span key={area.id}>{`${area.name}, `}</span>;
                })}
              </p>
              <p>
                <b>Delivery fee: </b>
                <span>&#8377;</span>
                {restaurantInfo.delivery_fee}
              </p>
              <p>
                <b>Minimum order: </b>
                <span>&#8377;</span>
                {restaurantInfo.minimum_order_price}
              </p>
              <p>
                <b>Open for order: </b>
                {restaurantInfo.open_status === "1" ? (
                  <span>Yes</span>
                ) : (
                  <span>No</span>
                )}
              </p>
              <p>
                <b>Payment methods:</b>{" "}
                {restaurantInfo.payment_methods.map(method => {
                  return <span key={method.id}>{`${method.type}, `}</span>;
                })}
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

About.propTypes = {
  //   restaurantinfo: PropTypes.string.isRequired
  getRestaurantData: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  restaurantInfo: state.menu.restaurantInfo
});

export default connect(
  mapStateToProps,
  { getRestaurantData }
)(About);
