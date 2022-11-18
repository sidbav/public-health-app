import React , {useEffect} from "react";
import {connect} from 'react-redux'
import {getAllSurveys} from '../redux/actions/survey'
import PropTypes from 'prop-types';
import moment from 'moment'


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function TableList({getAllSurveys,surveys}) {
  useEffect(()=>{
      getAllSurveys();
  },[surveys])

  const renderList = () => {


    return(
      surveys.map((survey) =>{
        var date = new Date(survey.surveyDate);
        return <tr key = {survey._id}>
            <td>{survey.type}</td>
            <td>{survey.surveyResult}</td>
            <td>{date.getDate() +  " " + date.toLocaleString('default', { month: 'long' }) + " " + date.getFullYear()}</td>
        </tr>
      })
    )




  }



  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Survey Result</Card.Title>
                <p className="card-category">
                  Here is a subtitle for this table
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">survey type</th>
                      <th className="border-0">survey result</th>
                      <th className="border-0">survey created date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderList()}
                    {/* <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>$36,738</td>
                      <td>Niger</td>
                      <td>Oud-Turnhout</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>$23,789</td>
                      <td>Curaçao</td>
                      <td>Sinaai-Waas</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>$56,142</td>
                      <td>Netherlands</td>
                      <td>Baileux</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>$38,735</td>
                      <td>Korea, South</td>
                      <td>Overland Park</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>$63,542</td>
                      <td>Malawi</td>
                      <td>Feldkirchen in Kärnten</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>$78,615</td>
                      <td>Chile</td>
                      <td>Gloucester</td>
                    </tr> */}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </>
  );
}

TableList.propTypes = {
  getAllSurveys: PropTypes.func.isRequired,
  surveys: PropTypes.array
}

const mapStateToProps = (state) => {
  return {
    surveys: state.survey.surveys
  }

}


export default connect(mapStateToProps , {getAllSurveys})(TableList);
