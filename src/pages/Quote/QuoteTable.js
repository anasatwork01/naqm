import React, { useEffect, useState, useRef, useMemo } from "react"
import { Link } from "react-router-dom"
import withRouter from "components/Common/withRouter"
import TableContainer from "components/Common/TableContainer"
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  UncontrolledTooltip,
  Input,
  Form,
} from "reactstrap"

import { Name, Email, Number, Date } from "./QuoteListCol"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//redux
import { useSelector, useDispatch } from "react-redux"

const QuoteTable = props => {
  //meta title
  document.title = "Quote Req List"

  const [quotes, setQuotes] = useState([
    {
      created_at: "2023-12-29",
      name: "Anas khan",
      email: "anas@eafa.com",
      number: "03336386499",
    },
    {
      created_at: "2023-12-29",
      name: "Abdullah",
      email: "abdullah@eafa.com",
      number: "03324386909",
    },
    {
      created_at: "2023-12-29",
      name: "Faseeh khan",
      email: "faseeh@eafa.com",
      number: "03137862919",
    },
  ])

  const { users } = useSelector(state => ({
    users: state.contacts.users,
  }))

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "created_at",
        filterable: true,
        Cell: cellProps => {
          return <Date {...cellProps} />
        },
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
        Cell: cellProps => {
          return <Name {...cellProps} />
        },
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
        Cell: cellProps => {
          return <Email {...cellProps} />
        },
      },
      {
        Header: "Number",
        accessor: "number",
        Cell: cellProps => {
          return <Number {...cellProps} />
        },
      },
    ],
    []
  )

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Quotes List" breadcrumbItem="Quote List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={quotes}
                    isGlobalFilter={true}
                    customPageSize={10}
                    className="custom-header-css"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withRouter(QuoteTable)
