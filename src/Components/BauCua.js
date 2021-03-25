import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachBauCua from "./DanhSachBauCua";
import XucXac from "./XiNgau";
import "antd/dist/antd.css";
import { Modal } from "antd";
import "./styles.scss";
const { confirm } = Modal;
class BauCua extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }
  onClose = () => {
    var alert = document.getElementsByClassName("alert");
    if (alert) {
      alert[0].style.display = "none";
    }
  };
  componentDidUpdate() {
    let { tongDiem, resetDiem, history, isExit } = this.props;
    var alert = document.getElementsByClassName("alert");
    if (alert.length > 0) {
      this.timer = setTimeout(() => {
        alert[0].style.display = "none";
      }, 3000);
      if (alert[0].style.display === "none") {
        clearTimeout(this.timer);
      }
    }
    if (tongDiem === 0) {
      confirm({
        title: "Bạn đã hết điểm cmnr,muốn chơi lại chứ?",
        cancelText: "Thoát",
        okText: "Chơi lại",
        onOk() {
          resetDiem();
        },
        onCancel() {
          history.push("/");
          isExit(true);
        }
      });
    }
  }
  render() {
    let { tongDiemDaCuoc, tongDiem } = this.props;
    return (
      <div className="bau-cua">
        <h1 className="text-center mb-5 mt-6 tieu-de">Game Bầu Cua CRM</h1>
        <XucXac />
        <DanhSachBauCua />
        {tongDiemDaCuoc >= tongDiem && tongDiemDaCuoc !== 0 ? (
          <div className="alert">
            <span onClick={this.onClose}>X</span>
            <p>Điểm đã cược vượt quá tổng điểm bạn đang có!</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    tongDiem: state.gamePlayStoreReducer.tongDiem,
    tongDiemDaCuoc: state.gamePlayStoreReducer.tongDiemDaCuoc
  };
};
const mapDispatchToProps = dispatch => {
  return {
    resetDiem: () => {
      dispatch({
        type: "RESET_DIEM"
      });
    },
    isExit: isExit => {
      dispatch({
        type: "CHECK_CLICK",
        isExit
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BauCua);
