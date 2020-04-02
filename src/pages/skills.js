import React from "react"
import Layout from "../components/layout/layout"
import CircularProgress from "../components/circular-progress/circle"
import Card from "../components/card/card"

import classes from "./skills.module.css"

export default () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.heading}>
          <h3>My Proficiency in Languages -</h3>
        </div>
        <div className={classes.row}>
          <Card title="Python" backColor='rgba(239, 83, 80,0.5)'>
            <CircularProgress radius="100" stroke="8" progress={70} />
          </Card>
          <Card title="JavaScript" backColor='rgba(67, 160, 71, 0.5)'>
            <CircularProgress radius="100" stroke="8" progress={65} />
          </Card>
          <Card title="Machine Learning" backColor='rgba(245, 127, 23,0.4)'>
            <CircularProgress radius="100" stroke="8" progress={40} />
          </Card>
        </div>
        <div className={classes.heading}>
          <h3>my expertise in various libraries and frameworks -</h3>
        </div>
        <div className={classes.row} style={{marginBottom: '3em'}}>
          <Card title="Angular 6" backColor='rgba(239, 83, 80,0.5)'>
            <CircularProgress radius="100" stroke="8" progress={70} />
          </Card>
          <Card title="ReactJs" backColor='rgba(67, 160, 71, 0.5)'>
            <CircularProgress radius="100" stroke="8" progress={80} />
          </Card>
          <Card title="IonicJs" backColor='rgba(245, 127, 23,0.4)'>
            <CircularProgress radius="100" stroke="8" progress={40} />
          </Card>
          <Card title="GatsbyJs" backColor='rgba(21, 101, 192, 0.4)' >
            <CircularProgress radius="100" stroke="8" progress={25} />
          </Card>
        </div>

        <div className={classes.row} style={{marginBottom: '3em'}}>
          <Card title="Django" backColor='rgba(239, 83, 80,0.5)'>
            <CircularProgress radius="100" stroke="8" progress={80} />
          </Card>
          <Card title="Flask" backColor='rgba(67, 160, 71, 0.5)'>
            <CircularProgress radius="100" stroke="8" progress={30} />
          </Card>
          <Card title="OpenCv" backColor='rgba(245, 127, 23,0.4)'>
            <CircularProgress radius="100" stroke="8" progress={40} />
          </Card>
          <Card title="WordPress" backColor='rgba(21, 101, 192, 0.4)'>
            <CircularProgress radius="100" stroke="8" progress={30} />
          </Card>
        </div>
      </div>
    </Layout>
  )
}
