import { Bar } from 'react-chartjs-2';

const AdminReport = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.label),
        datasets: [{
            label: 'Sales',
            data: data.map(item => item.value),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    };

    return <Bar data={chartData} />;
};

export default AdminReport;