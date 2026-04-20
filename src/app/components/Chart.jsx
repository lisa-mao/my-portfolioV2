import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import {Radar} from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function Chart() {
    const data = {
        labels: ['HTML', 'Tailwind CSS', 'JS', 'React.js', 'Express'],
        datasets: [
            {
                label: 'Skillpoints',
                data: [8, 8, 6, 6, 5],
                backgroundColor: 'rgb(197,169,191)',
                borderColor: 'rgb(55,45,54)',
                borderWidth: 1,

            },
        ],
    }

    const options = {
        scales: {
            r: {
                pointLabels: {
                    font: {
                        family: "'noto sans jp', sans-serif",
                        size: 14,
                        weight: "bold",
                    },
                    color: "#372d36"
                },
                ticks: {
                    font: {
                        family: "'noto sans jp', sans-serif",
                        size: 14,
                        weight: "bold",
                    }
                },
                suggestedMin: 0,
                suggestedMax: 10,
            },

        },
        plugins: {
            legend: {
                labels:{
                    font:{
                        family: "'noto sans jp', sans-serif",
                        size: 14,
                    },
                },
            },
        },
        maintainAspectRatio: false,
    }



    return (
        <div className="size-100">
            <Radar data={data} options={options}/>
        </div>
    )
}

