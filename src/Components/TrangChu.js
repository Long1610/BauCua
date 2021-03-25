import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./styles.scss";
class TrangChu extends Component {
  render() {
    return (
      <div className="trang-chu">
        {this.props.isExit ? (
          <React.Fragment>
            <span>Tạm biệt!!!</span>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <p>Chào mừng bạn đến với Game Bầu Cua CRM</p>
            <strong>Cách chơi</strong>:
            <span> Click vào mỗi hình để đặt cược,sau đó Click Play Game </span>
            <p>Nhớ chú ý tới số điểm của mình nhé</p>
            <p>
              Good Luck !! <i className="fa fa-smile" />
            </p>
            <NavLink className="btn-go" to="/game">
              Vào Game
            </NavLink>
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isExit: state.gamePlayStoreReducer.isExit
  };
};
export default connect(
  mapStateToProps,
  null
)(TrangChu);
