export default (chart, newPlotLines) => {
    const lastPlotLine = newPlotLines[newPlotLines.length - 1];
    const startLine = newPlotLines.find(x => x.label.text === 'Start Time');
    const zones = newPlotLines.length === 0 ? [] : [{
        value: startLine.value,
        dashStyle: 'dash',
        color: 'grey',
        fillColor: 'none',
    }, {
        value: lastPlotLine.value,
        dashStyle: 'solid',
    }];

    if (lastPlotLine && lastPlotLine.label.text !== 'Start Time' &&
        lastPlotLine.label.text !== 'Purchase Time' &&
        lastPlotLine.label.text !== 'Entry Spot') {
        zones.push({
            dashStyle: 'dash',
            color: 'grey',
            fillColor: 'none',
        });
    }

    chart.series[0].update({ zones }, false);
};
