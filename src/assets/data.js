import { faker } from '@faker-js/faker';

// countries
export const COUNTRIES = [
  {
    name: 'USA',
    flag: 'usa_flag',
    count: 1438,
    rate: 5.8,
    isRateUp: true,
  },
  {
    name: 'Canada',
    flag: 'canada_flag',
    count: 928,
    rate: 51.2,
    isRateUp: false,
  },
  {
    name: 'Germany',
    flag: 'germany_flag',
    count: 674,
    rate: 17.1,
    isRateUp: true,
  },
  {
    name: 'Mexico',
    flag: 'mexico_flag',
    count: 258,
    rate: 15.8,
    isRateUp: false,
  },
  {
    name: 'France',
    flag: 'france_flag',
    count: 90,
    rate: 9.8,
    isRateUp: true,
  },
];

export const EXCHANGES = [
  {
    value: 0.213435345,
    amount: 3897.98,
    currency: 'USD',
    percentage: -20.32,
    amountColor: '#246CF9',
    chartColor: '#246CF9',
  },
  {
    value: 0.213435345,
    amount: 3897.98,
    currency: 'USD',
    percentage: 60,
    amountColor: '#FA2256',
    chartColor: '#FA2256',
  },
  {
    value: 0.213435345,
    amount: 3897.98,
    currency: 'USD',
    percentage: -45.5,
    amountColor: '#11CABE',
    chartColor: '#30E0A1',
  }
];

export const TEAM = [
  {
    name: 'Silvestor Ananas',
    percentage: 65,
    amount: 420,
    color: '#30E0A1',
    profilePic: 'silvestor',
  },
  {
    name: 'Amanda Rouge',
    percentage: 55,
    amount: 411,
    color: '#FFB545',
    profilePic: 'amanda',
  },
  {
    name: 'Adam Dinner',
    percentage: 41,
    amount: 25,
    color: '#FA2256',
    profilePic: 'adam',
  },
  {
    name: 'Isabella Bean',
    percentage: 99,
    amount: 6,
    color: '#246CF9',
    profilePic: 'isabella',
  },
  {
    name: 'Robby Adams',
    percentage: 62,
    amount: 53,
    color: '#30E0A1',
    profilePic: 'robby',
  },
];

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const SUMMARY = {
  labels,
  datasets: [
    {
      label: 'Last Month',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      borderColor: '#246CF9',
      backgroundColor: '#246CF9',
    },
    {
      label: 'This Month',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 600 })),
      borderColor: '#FA2256',
      backgroundColor: '#FA2256',
    },
  ],
};


