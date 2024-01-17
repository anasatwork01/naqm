import React from "react"
import styles from "./Home.module.css"
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap"
import image from "../../assets/images/custom/cough.jpg"

const CurrentAqiCard = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle className={styles.headerTitle}>
          NUST Air Quality Index (AQI){" "}
          <span className={styles.dangerText}>LIVE</span>
        </CardTitle>
        <p className={styles.bigText}>
          Real-time average air pollution level NUST
        </p>
        <Row style={{ marginTop: "80px" }}>
          <Col>
            <Row>
              <p className={styles.bigText}>
                Last Update: 17 Jan 2024, 04:11pm
              </p>
            </Row>
            <Row>
              <div className={styles.statusCard}>POOR</div>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <p className={styles.score}>155</p>
                <p className={styles.subtitle}>(AQI-NUST)</p>
              </Col>
              <Col>
                <img className={styles.img} src={image} alt="graphic" />
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

export default CurrentAqiCard
