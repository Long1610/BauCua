import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Container, Row, Col } from "reactstrap";
class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((item, index) => {
      return (
        <Col sm="2" key={index} className="hinh-anh-xi-ngau">
          <img src={item.hinhAnh} width={"30%"} alt="" />
        </Col>
      );
    });
  };
  render() {
    const { choiGame, tongDiem } = this.props;
    return (
      <Container className="header-xuc-xac mb-4">
        <Row>
          <Col sm="2">
            <Button
              color="danger"
              className="float-left"
              onClick={() => {
                choiGame();
              }}
            >
              Play Game
            </Button>
          </Col>
          <Col sm="7">
            <Row>{this.renderXucXac()}</Row>
          </Col>
          <Col sm="3">
            <span className="text-danger display-4">Điểm:</span>
            <span className="text-danger display-4 ml-1">{tongDiem}</span>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    mangXucXac: state.gamePlayStoreReducer.xucXac,
    tongDiem: state.gamePlayStoreReducer.tongDiem
  };
};
const mapDispatchToProps = dispatch => {
  return {
    choiGame: () => {
      dispatch({
        type: "CHOI_GAME"
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XucXac);
