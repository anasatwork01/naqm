import React, { useState, useEffect } from "react"
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap"
import { StatisticsApplicationsChart } from "./JobCharts"

import { getStatisticData } from "../../store/actions"
import { useDispatch, useSelector } from "react-redux"
import DATA from "../../assets/csv.json"

const data_year = {
  dust: [104, 27, 318],
  co: [3.79, 4.44, 274],
  co2: [400, 460, 451.82],
  no2: [1.97, 2.08, 84],
  label: ["01/01/2021", "01/01/2022", "01/01/2023"],
}

const data_month = {
  dust: [18, 14, 36, 133, 74, 18, 14, 36, 133, 74, 37, 255],
  co: [0.13, 255, 225, 133, 139, 255, 225, 133, 139, 684, 0.13, 255],
  co2: [
    466.88, 477, 433, 488, 896.3, 466.88, 477, 896.3, 433, 488, 719.56, 426.47,
  ],
  no2: [255, 268, 3.37, 229, 333, 3.37, 255, 268, 229, 333, 193, 51],
  label: [
    "01/01/2023",
    "02/01/2023",
    "03/01/2023",
    "04/01/2023",
    "05/01/2023",
    "06/01/2023",
    "07/01/2023",
    "08/01/2023",
    "09/01/2023",
    "10/01/2023",
    "11/01/2023",
    "12/01/2023",
  ],
}

const StatisticsApplications = () => {
  const [duration, setDuration] = useState("month")
  const [data, setData] = useState(data_month)

  const dispatch = useDispatch()
  const changeDuration = duration => {
    setDuration(duration)
    if (duration === "year") {
      setData(data_year)
    }
    if (duration === "month") {
      setData(data_month)
    }
    dispatch(getStatisticData(duration))
  }

  useEffect(() => {
    dispatch(getStatisticData(duration))
  }, [dispatch])

  const { statistic_data } = useSelector(state => ({
    statistic_data: state.DashboardJob.statistic_data,
  }))

  useEffect(() => {
    console.log("statistic_data", statistic_data)
  }, [statistic_data])

  return (
    <React.Fragment>
      <Col lg={12}>
        <Card>
          <CardBody>
            <div className="d-sm-flex flex-wrap">
              <h4 className="card-title mb-4">AIR QUALITY INDEX</h4>
              <div className="ms-auto">
                <Nav pills>
                  {/* <NavItem>
                    <NavLink
                      className={duration === "week" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("week")}
                    >
                      Week
                    </NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink
                      className={duration === "month" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("month")}
                    >
                      Month
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={duration === "year" ? "active" : ""}
                      href="#"
                      onClick={() => changeDuration("year")}
                    >
                      Year
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
            </div>
            <StatisticsApplicationsChart
              seriesData={statistic_data}
              data={data}
              duration={duration}
              dataColors='["--bs-primary", "--bs-success", "--bs-warning", "--bs-info"]'
              dir="ltr"
            />
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  )
}

export default StatisticsApplications
