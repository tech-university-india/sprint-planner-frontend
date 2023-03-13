import React from 'react';
import Highcharts from 'highcharts/highcharts-gantt';
import HighchartsReact from 'highcharts-react-official';
import getGanttChartFormatData from '../../Assets/dataMapper';

const GanttChart = () => {
  const data = getGanttChartFormatData();
  const options = {
    yAxis: {
      type: 'category',
      grid: {
        borderColor: '#3a5d96',
        columns: [
          {
            title: {
              text: 'Stories',
              rotation: 45,
              y: -15,
              x: -15,
            },
          },
          {
            title: {
              text: 'Developer',
              rotation: 45,
              y: -15,
              x: -15,
            },
            labels: {
              format: '{point.developer}',
            },
          },
          {
            title: {
              text: 'Duration',
              rotation: 45,
              y: -15,
              x: -15,
            },
            labels: {
              formatter: function () {
                var days = 1000 * 60 * 60 * 24;
                var number = (this.point.end - this.point.start) / days;
                return Math.round(number * 100) / 100;
              },
            },
          },
        ],
      },
    },
    xAxis: [
      {
        labels: {
          format: '{value:%w}', // day of the week
        },
        grid: {
          // default setting
          enabled: true,
        },
        tickInterval: 1000 * 60 * 60 * 24, // Day
      },
      {
        labels: {
          format: '{value:Week %W}',
        },
        tickInterval: 1000 * 60 * 60 * 24 * 7, // week
      },
    ],
    ...data,
  };

  return (
    <div style={{ minHeight: '90vh' }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'ganttChart'}
        options={options}
      />
    </div>
  );
};

export default GanttChart;
