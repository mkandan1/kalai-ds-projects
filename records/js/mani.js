Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Match Records'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="" ' +
            'target="_blank"></a>'
    },
    xAxis: {
        categories: [
            'Tamil Thalaivas',
        ],
        crosshair: true
    },
    yAxis: {
        title: {
            useHTML: true,
            text: 'Values'
        },
        tickInterval: 1,
    },
    tooltip: {
        headerFormat: '<span style="font-size:15px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Matches Played',
        data: [8]

    }, {
        name: 'Wins',
        data: [2]

    }, {
        name: 'Loss',
        data: [4]

    }, {
        name: 'Die',
        data: [2]

    }, {
        name: 'Points',
        data: [20]

    }]
});