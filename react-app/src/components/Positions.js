import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPositions } from "../reducers/positionReducer";
import { Table, Button, Row } from "react-bootstrap";
import Skills from "./commons/Skills";

const PositionRow = ({ position }) => {
  return (
    <tr>
      <td>
        <Link to={`/positions/${position.id}/details`}>{position.title}</Link>
      </td>
      <td>
        <Skills skills={position.skills} />
      </td>
      <td>
        <Link to={`/positions/${position.id}/details`}>
          {position.applications} applications
        </Link>
      </td>
    </tr>
  );
};

PositionRow.propTypes = {
  position: PropTypes.object
};

export class Positions extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPositions({}));
  }
  render() {
    const { positions } = this.props;

    return (
      <React.Fragment>
        <Row>
          <h3>All Positions</h3>
          <Button variant="link">
            <Link to={`/positions/new`}>New Position</Link>
          </Button>
        </Row>
        <Row>
          <Table hover>
            <tbody>
              <th>Position</th>
              <th>Required skills</th>
              <th>Applications</th>
              {positions &&
                positions.map((position, i) => {
                  return <PositionRow key={i} position={position} />;
                })}
            </tbody>
          </Table>
        </Row>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch
});

const mapStateToProps = state => {
  const { positions } = state.positions;

  return {
    positions: positions
  };
};

Positions.propTypes = {
  positions: PropTypes.arrayOf(PropTypes.object)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Positions);
