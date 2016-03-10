import { winPlotBand, lossPlotBand } from './bands';

export default contract =>  [
    lossPlotBand(0, contract.barrier),
    winPlotBand(contract.barrier, contract.barrier2),
    lossPlotBand(contract.barrier2, Number.MAX_VALUE),
];
