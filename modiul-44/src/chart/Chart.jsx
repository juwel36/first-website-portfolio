import { LineChart, Line,XAxis,YAxis,Tooltip } from 'recharts';

const Chart = () => {
  const subjectMarksData = [
    { id: 1, name: "John Smith", englishMarks: 78, economicsMarks: 92 },
    { id: 2, name: "Emily Johnson", englishMarks: 85, economicsMarks: 76 },
    { id: 3, name: "Michael Davis", englishMarks: 92, economicsMarks: 88 },
    { id: 4, name: "Sarah Wilson", englishMarks: 68, economicsMarks: 74 },
    { id: 5, name: "David Brown", englishMarks: 75, economicsMarks: 90 },
    { id: 6, name: "Jennifer Lee", englishMarks: 88, economicsMarks: 82 },
    { id: 7, name: "Robert Anderson", englishMarks: 70, economicsMarks: 65 },
    { id: 8, name: "Lisa Martinez", englishMarks: 95, economicsMarks: 98 },
    { id: 9, name: "William Taylor", englishMarks: 82, economicsMarks: 75 },
    { id: 10, name: "Jessica Thomas", englishMarks: 91, economicsMarks: 89 },
  ];



  return (
    <div>
      <LineChart width={800} height={400} data={subjectMarksData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis dataKey="englishMarks"></YAxis>
        <Tooltip></Tooltip>
    <Line dataKey="englishMarks" stroke='#8884d8' > </Line>
    <Line dataKey="economicsMarks" stroke='green' > </Line>
  

      </LineChart>

    </div>
  );
};

export default Chart;