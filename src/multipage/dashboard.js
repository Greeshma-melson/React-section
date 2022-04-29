import React  from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import {  Route, Routes ,Link} from 'react-router-dom';
import ApexCharts from 'apexcharts'
import Chart from 'react-apexcharts'
import { Row, Col } from 'antd';
class Dashboard extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'apexchart-example'
        },
        xaxis: {
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }]
    }

    this.state1 = {
          
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
          title: {
            text: '$ (thousands)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands"
            }
          }
        }
      },
    
    
    };
    this.state2 = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }

  }
  
 





reset() {
  this.setState({
    series: [44, 55, 13, 33]
  })
}


  
  render() {
    return (
      <div  className="container">
      <div  className="heading">
        <h1 style={{color:"white",marginLeft:'500px'}}>Dashboard</h1>
        </div> 
      
      
      <div className="donut">
       <Row> 
      <Col span={8}> 
      <Chart options={this.state2.options} series={this.state2.series} type="donut" width="380" /></Col>
      <Col span={8}><Chart
    options={this.state.options}
    series={this.state.series}
    type="line"
    width="500"
  />
  </Col>
    </Row>
       
     
        <Row>
      <Col span={8}><Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} /></Col>
      <Col span={8}><Chart options={this.state1.options} series={this.state1.series} type="bar" width={500} height={320} /></Col>
    </Row>
      </div>
  </div>

 
     
  
    )
  }
}
  
  export default  Dashboard;