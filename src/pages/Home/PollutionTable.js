import React from "react"
import { Card, CardBody, CardHeader, Table } from "reactstrap"
import styles from "./Home.module.css"

const PollutionTable = () => {
  return (
    <Card className={styles.cardContainer}>
      <CardHeader className={styles.headerTable}>
        NUST- Locations Air Pullution Level
      </CardHeader>
      <CardBody>
        <div className="table-responsive">
          <Table className="table mb-0">
            <thead>
              <tr>
                <th className={styles.column1}>Locations</th>
                <th>Status</th>
                <th>AQI-NUST</th>
                <th>PM2.5</th>
                <th>PM10</th>
                <th>Temp</th>
                <th>Humid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className={styles.column1} scope="row">
                  Node-1
                </th>
                <td className={styles.dangerText}>Poor</td>
                <td>165</td>
                <td>314</td>
                <td>0</td>
                <td>20.5</td>
                <td>31.24</td>
              </tr>
              <tr>
                <th className={styles.column1} scope="row">
                  Node-2
                </th>
                <td className={styles.warningText}>Moderate</td>
                <td>100</td>
                <td>257</td>
                <td>1</td>
                <td>25.84</td>
                <td>36.52</td>
              </tr>
              <tr>
                <th className={styles.column1} scope="row">
                  Node-3
                </th>
                <td className={styles.dangerText}>Poor</td>
                <td>200</td>
                <td>317</td>
                <td>1</td>
                <td>26.02</td>
                <td>31.25</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  )
}

export default PollutionTable
