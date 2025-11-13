import * as React from 'react';
import Box from '@mui/material/Box';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

const dataset = [
  { min: -12, max: -4, precip: 79, month: 'Api' },
  { min: -11, max: -3, precip: 66, month: 'Comercial' },
  { min: -6, max: 2, precip: 76, month: 'Estoque' },
  { min: 1, max: 9, precip: 106, month: 'Eventos' },
  { min: 8, max: 17, precip: 105, month: 'Live' },
  { min: 15, max: 24, precip: 114, month: 'Marft' },
  { min: 18, max: 26, precip: 106, month: 'Ppcp' },
  { min: 17, max: 26, precip: 105, month: 'Rh' },
  { min: 13, max: 21, precip: 100, month: 'Rh_sci' },
  { min: 6, max: 13, precip: 116, month: 'Oct' },
  { min: 0, max: 6, precip: 93, month: 'Suprimentos' },
  { min: -8, max: -1, precip: 93, month: 'Sustentabilidade' },
  { min: -8, max: -1, precip: 93, month: 'Ti' },
];

const series = [
  { type: 'line', dataKey: 'min', color: '#846c5b' },
  { type: 'bar', dataKey: 'precip', color: '#b7a696', yAxisId: 'rightAxis' },
];

export default function ReverseExample() {
  // As chamadas de useState para controlar os reverses foram removidas,
  // pois os checkboxes não existem mais.

  return (

    <Box sx={{ width: '83%', margin: 'auto', backgroundColor: '#ffffff', padding: 2, borderRadius: 2, boxShadow: 3, mt: 5, mb: 5 }}>
      
      <Box sx={{ width: '100%' }}>
        <ChartContainer
          series={series}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
              label: 'Month',
              reverse: false, 
            },
          ]}
          yAxis={[
            { id: 'leftAxis', reverse: false, width: 50 },
            { id: 'rightAxis', reverse: false, position: 'right', width: 50 },
          ]}
          dataset={dataset}
          height={400}
        >
          <ChartsGrid horizontal />
          <BarPlot />
          <LinePlot />
          <MarkPlot />
          <ChartsXAxis />
          <ChartsYAxis axisId="leftAxis" label="temperature (°C)" />
          <ChartsYAxis axisId="rightAxis" label="precipitation (mm)" />
          <ChartsTooltip />
        </ChartContainer>
      </Box>
    </Box>
  );
}