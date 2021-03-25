import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardImg
} from "reactstrap";
class DanhSachBauCua extends Component {
  renderOCuoc = () => {
    return this.props.mangCuoc.map((item, index) => {
      return (
        <Col sm="4" className="hinh-anh-cuoc" key={index}>
          <Card
            onClick={() => {
              this.props.datCuoc(item.ma);
            }}
          >
            <CardImg top width="100%" src={item.hinhAnh} alt="Card image cap" />
            <CardBody>
              <CardTitle className="text-danger display-4">
                {item.diemCuoc}
              </CardTitle>
            </CardBody>
          </Card>
        </Col>
      );
    });
  };
  render() {
    return (
      <Container>
        <Row>{this.renderOCuoc()}</Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    mangCuoc: state.gamePlayStoreReducer.mangCuoc
  };
};
const mapDispatchToProps = dispatch => {
  return {
    datCuoc: ma => {
      dispatch({
        type: "DAT_CUOC",
        ma
      });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DanhSachBauCua);
