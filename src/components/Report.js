import React,{useEffect} from "react";
import Chart from "react-google-charts";
import {useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navbar from './navbar';
const pieOptions = {
    title: "Report",
    pieHole: 0.4,
    slices: [
        {
          color: "#F3BDCC"
        },
        {
          color: "#A0D7D3"
        },
      ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };
  const useStyles = makeStyles((theme) => ({
    heading: {
      margin: 'auto',
      display: 'block',
      color: '#FF1493',
      backgroundColor: '#A0D7D3',
      marginLeft: 0
  },
  paper: {
    padding: theme.spacing(4),
    margin: 'auto',
    maxWidth: 780,
  marginLeft: 350
  },
}));
export default function Report({count}){
  const classes = useStyles();
  var state = useRef(count)
  var r = count;
  var data = [["Complete", "Working"], ["Complete Project", count ], ["Working Project", 4]]
  console.log(data[1][1])

  useEffect(() => {
  state.current = count;
  }
  ,[count]);
    return (
      <div className="App">
          <Navbar/>
      <Paper className={classes.paper} >
      <br />
      <Grid container spacing={2} className={classes.heading}>
        <h2>Report Section - Analyse Reports for Better Performance</h2>
      </Grid>
      <h2>Monthly Report</h2>
      <Chart chartType="BarChart" width="100%" height="400px" data={[
  ["Month", "Projects", { role: "style" }],
  ["March", 2, "stroke-color: 233238; stroke-width: 1; fill-color: #F3BDCC"],
  ["April", 5, "stroke-color: 233238; stroke-width: 1; fill-color: #A0D7D3"],
  ["May", 3, "stroke-color: 233238; stroke-width: 1; fill-color: #F3BDCC"],
  ["June", 8, "stroke-color: 233238; stroke-width: 1; fill-color: #A0D7D3"],
  ["July", 6, "stroke-color: 233238; stroke-width: 1; fill-color: #F3BDCC"]
]} />
 <h2>Project Completion Report</h2>
 
 
         <Chart
          chartType="PieChart"
          data={data}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />

<h2>Project Liked Report</h2>
 
 
 <Chart
  chartType="PieChart"
  data={[["Liked", "No Reaction Yet"], ["Liked", 30 ], ["No Reaction Yet", 4]]}
  options={pieOptions}
  graph_id="PieChart2"
  width={"100%"}
  height={"400px"}
  legend_toggle
/>
</Paper>
      </div>
    );
  }

