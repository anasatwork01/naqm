import TableContainer from "components/Common/TableContainer"
import React, { useMemo } from "react"
import DATA from "../../assets/csv.json"

const DataTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Created At",
        accessor: "created_time",
      },
      {
        Header: "Node Id",
        accessor: "node_id",
      },
      // {
      //   Header: "Name",
      //   accessor: "name",
      // },
      {
        Header: "lat",
        accessor: "latitude",
      },
      {
        Header: "lng",
        accessor: "longitude",
      },
      {
        Header: "Dust",
        accessor: "dust",
      },
      {
        Header: "CO",
        accessor: "co",
      },
      {
        Header: "CO2",
        accessor: "co2",
      },
      {
        Header: "NO2",
        accessor: "no2",
      },
      {
        Header: "CH4",
        accessor: "ch4",
      },
      {
        Header: "NH3",
        accessor: "nh3",
      },
      // {
      //   Header: "PM1.0",
      //   accessor: "pm_one",
      // },
      // {
      //   Header: "PM10",
      //   accessor: "pm_ten",
      // },
      {
        Header: "Humidity",
        accessor: "humidity",
      },
      {
        Header: "Temperature",
        accessor: "temperature",
      },
    ],
    []
  )

  const data = [
    {
      created_at: new Date().toISOString().slice(0, 10),
      node_id: 2,
      name: "Seecs Node",
      lat: "2.7",
      lng: "2.4",
      dust: "35",
      co: "20",
      co2: "990",
      no2: "300",
      ch4: "13",
      nh3: "100",
      pm_one: "12",
      pm_ten: "103",
      humid: "15",
      temperature: "25",
    },
    {
      created_at: new Date().toISOString().slice(0, 10),
      node_id: 2,
      name: "Seecs Node",
      lat: "2.7",
      lng: "2.4",
      dust: "35",
      co: "20",
      co2: "990",
      no2: "300",
      ch4: "13",
      nh3: "100",
      pm_one: "12",
      pm_ten: "103",
      humid: "15",
      temperature: "25",
    },
    {
      created_at: new Date().toISOString().slice(0, 10),
      node_id: 2,
      name: "Seecs Node",
      lat: "2.7",
      lng: "2.4",
      dust: "35",
      co: "20",
      co2: "990",
      no2: "300",
      ch4: "13",
      nh3: "100",
      pm_one: "12",
      pm_ten: "103",
      humid: "15",
      temperature: "25",
    },
    {
      created_at: new Date().toISOString().slice(0, 10),
      node_id: 2,
      name: "Seecs Node",
      lat: "2.7",
      lng: "2.4",
      dust: "35",
      co: "20",
      co2: "990",
      no2: "300",
      ch4: "13",
      nh3: "100",
      pm_one: "12",
      pm_ten: "103",
      humid: "15",
      temperature: "25",
    },
    {
      created_at: new Date().toISOString().slice(0, 10),
      node_id: 2,
      name: "Seecs Node",
      lat: "2.7",
      lng: "2.4",
      dust: "35",
      co: "20",
      co2: "990",
      no2: "300",
      ch4: "13",
      nh3: "100",
      pm_one: "12",
      pm_ten: "103",
      humid: "15",
      temperature: "25",
    },
    {
      created_at: new Date().toISOString().slice(0, 10),
      node_id: 2,
      name: "Seecs Node",
      lat: "2.7",
      lng: "2.4",
      dust: "35",
      co: "20",
      co2: "990",
      no2: "300",
      ch4: "13",
      nh3: "100",
      pm_one: "12",
      pm_ten: "103",
      humid: "15",
      temperature: "25",
    },
  ]
  return (
    <div>
      <TableContainer
        columns={columns}
        data={DATA}
        isGlobalFilter={false}
        isAddOptions={false}
        customPageSize={10}
        className="custom-header-css"
      />
    </div>
  )
}

export default DataTable
