// chakra-ui
import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
// dependencies
import dynamic from 'next/dynamic'
// shared components
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
// graphics
const Chart = dynamic( () => import( 'react-apexcharts' ), { ssr: false } )

export default function Dashboard () {
  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        colors: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-03-18T00:00:00.000Z',
        '2021-03-19T00:00:00.000Z',
        '2021-03-20T00:00:00.000Z',
        '2021-03-21T00:00:00.000Z',
        '2021-03-22T00:00:00.000Z',
        '2021-03-23T00:00:00.000Z',
        '2021-03-24T00:00:00.000Z'
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    },
    colors: [theme.colors.purple[500]]
  }
  const series = [{ name: 'Series A', data: [1, 20, 50, 20, 1] }]

  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box p={['6', '8']} bg='gray.800' borderRadius={8} pb='4' >
            <Text>Subscribers of the week</Text>
            <Chart options={options} series={series} type='area' height={160} />
          </Box>
          <Box p='8' bg='gray.800' borderRadius={8} >
            <Text>Open rate</Text>
          </Box>
        </SimpleGrid>

      </Flex>
    </Flex>
  )
}