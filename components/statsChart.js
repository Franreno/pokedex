import React from 'react';
import { Bar } from 'react-chartjs-2';
import styles from './singularCard.module.css'


export default function StatsTeste({ stats }) {

    const getData = (stats) => {
        let labels = [];
        let data = [];
        stats.map((_stat) => {
            labels.push(_stat.stat.name)
            data.push(_stat.base_stat)
        })

        return { labels, data };
    }


    const essentialData = getData(stats);
    const backgroundColor = ['rgb(50, 205, 50)', 'rgb(0, 100, 0)', 'rgb(184, 134, 11)', 'rgb(135, 206, 250)', 'rgb(240, 128, 128)', 'rgb(0, 0, 255)'];

    const data = {
        labels: essentialData.labels,
        datasets: [
            {

                backgroundColor: backgroundColor,
                data: essentialData.data
            }
        ]
    };

    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Stats',
            },
        },

    };

    return (

        <Bar data={data} options={options} className={styles.stats} />

    )
}