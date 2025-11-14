import * as React from 'react';
import Box from '@mui/material/Box';

import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const chartTheme = createTheme({
  components: {
    MuiChartsGrid: {
      styleOverrides: {
        root: {
          '& .MuiChartsGrid-horizontalLine': {
            stroke: '#ffffff',
            strokeWidth: 1,
            opacity: 0.5,
          },
          
        }
      }
    },
  }
});

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
  { type: 'line', dataKey: 'min', color: '#8A7864' },
  { type: 'bar', dataKey: 'precip', color: '#E3CFAA', yAxisId: 'rightAxis' },
];

export default function ReverseExample() {
  // As chamadas de useState para controlar os reverses foram removidas,
  // pois os checkboxes não existem mais.

  return (

    <Box sx={{ width: '83%', margin: 'auto', backgroundColor: '#22211D', padding: 2, borderRadius: 2, boxShadow: 3, mt: 5, mb: 5 }}>
      
      <Box sx={{ width: '100%' }}>
        <ThemeProvider theme={chartTheme}>
            <ChartContainer
            series={series}
            xAxis={[
                {
                scaleType: 'band',
                dataKey: 'month',
                label: 'Tabela',
                reverse: false, 
                labelStyle: { fill: '#8A7864' },
                },
            ]}
            yAxis={[
                { id: 'leftAxis', reverse: false, width: 50, labelStyle: { fill: '#8A7864' } },
                { id: 'rightAxis', reverse: false, position: 'right', width: 50, labelStyle: { fill: '#8A7864' } },
            ]}
            dataset={dataset}
            height={400}
            >
            <ChartsGrid horizontal/>
            <BarPlot />
            <LinePlot />
            <MarkPlot />
            <ChartsXAxis labelStyle={{ fill: "#E3CFAA" }} tickLabelStyle={{ fill: "#E3CFAA" }} axisLineStyle={{ stroke: "#E3CFAA" }} tickColor="#E3CFAA" />
            <ChartsYAxis axisId="leftAxis" label="temperature (°C)" labelStyle={{ fill: "#E3CFAA" }} tickLabelStyle={{ fill: "#E3CFAA" }} axisLineStyle={{ stroke: "#E3CFAA" }} tickColor="#E3CFAA"  />
            <ChartsYAxis axisId="rightAxis" label="precipitation (mm)" labelStyle={{ fill: "#E3CFAA" }} tickLabelStyle={{ fill: "#E3CFAA" }} axisLineStyle={{ stroke: "#E3CFAA" }} tickColor="#E3CFAA"/>
            <ChartsTooltip />
            </ChartContainer>
        </ThemeProvider>
      </Box>
    </Box>
  );
}