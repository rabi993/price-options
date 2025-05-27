import { LineChart as LChart, Line ,XAxis, YAxis} from 'recharts';

const LineChart = () => {
    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 72, chemistry: 81 },
        { id: 2, name: "Bob", math: 85, physics: 89, chemistry: 75 },
        { id: 3, name: "Charlie", math: 92, physics: 94, chemistry: 90 },
        { id: 4, name: "David", math: 67, physics: 70, chemistry: 65 },
        { id: 5, name: "Ella", math: 74, physics: 68, chemistry: 72 },
        { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 80 },
        { id: 7, name: "Grace", math: 95, physics: 91, chemistry: 93 },
        { id: 8, name: "Henry", math: 70, physics: 66, chemistry: 74 },
        { id: 9, name: "Isla", math: 80, physics: 79, chemistry: 83 },
        { id: 10, name: "Jack", math: 76, physics: 73, chemistry: 78 }
    ];



    return (
        <div>
            <LChart width={800} height={400} data={studentMarksData}>
                <XAxis dataKey='name'></XAxis>
                <YAxis ></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='purple'></Line>

            </LChart>
        </div>
    );
};

export default LineChart;