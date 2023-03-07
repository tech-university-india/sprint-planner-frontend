import * as response from './sampleData.json';
const { sprints, title: projectTitle } = response;
const tempDate = new Date('2021-01-04');
const projectStartDate = tempDate.getTime();
// import { v4 } from 'uuid';

const getGanttChartFormatData = () => {
  const toReturn = []; // 1-D array
  let storyYAxis = 0;
  //   const storyCharMap = {};
  //   sprints.forEach((sprint) => {
  //     sprint.forEach((story) => {
  //       let { id } = story;
  //       if (!storyCharMap[id]) {
  //         storyCharMap[id] = v4();
  //       }
  //     });
  //   });
  sprints.forEach((sprint) => {
    sprint.forEach((story) => {
      let { id, dependencies, developers, title, startDay, endDay } = story;
      let storyToAdd = {
        id: id.toString(),
        dependency: dependencies.map((id) => id.toString()),
        developer: developers[0].name,
        name: title,
        start: projectStartDate + startDay * 60 * 60 * 24 * 1000,
        end: projectStartDate + endDay * 60 * 60 * 24 * 1000,
        y: storyYAxis,
      };
      toReturn.push(storyToAdd);
      ++storyYAxis;
    });
  });
  const formattedData = {
    title: {
      text: projectTitle,
    },
    colors: ['#2f7ed8', '#0d233a', '#8bbc21'],
    series: [
      {
        name: projectTitle,
        data: toReturn,
      },
    ],
  };
  // console.log('qwer', JSON.stringify(formattedData, null, 2));
  return formattedData;
};
export default getGanttChartFormatData;
