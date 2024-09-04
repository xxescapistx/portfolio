export interface experience {
    company: string,
    position: {periodStart: string, periodEnd: string, title: string}[]
  }
  
 export const experiences: experience[] = [
    {company: "DealX", position: [
      {periodStart: '11/2022',periodEnd: 'PRESENT',title: 'Data Analyst'},
      {periodStart: '11/2021',periodEnd: '11/2022', title: 'Junior Data Analyst'}
    ]},
    {company: "Inoveite Hybrid Tech LTD", position: [
      {periodStart: '01/2021',periodEnd: '03/2021', title: 'Junior Data Analyst'}
    ]}
  ]