export type TData = {
  id: number
  title: string
  price: number
  Image: string
}

export function getData(): TData[] {
  return [
    {
      id: 1,
      title: 'JavaScript',
      price: 17.99,
      Image:
        'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Ffa42d36e-0e79-4d72-806e-2884d9550590-uiysmj.png&w=1200&q=75',
    },
    {
      id: 2,
      title: 'ReactJS & Redux',
      price: 15,
      Image:
        'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F28bb5b4e-fcd5-4efe-9dfc-ecedc7be17ba-yxqcfn.png&w=1200&q=75',
    },
    {
      id: 3,
      title: 'VueJS & VueX',
      price: 13.5,
      Image:
        'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGuy6elWw32ShZLOavzytcQulCmd8ogs7R0e4K&w=1200&q=75',
    },
    {
      id: 4,
      title: 'NodeJS & ExpressJS',
      price: 13.99,
      Image:
        'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYGrUGkiBhIzG9rDO1uc6xVtUogB07EbpjQFZLv&w=1200&q=75',
    },
    {
      id: 5,
      title: 'Telegram Bot',
      price: 12.5,
      Image:
        'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2FmMbSyFqocdYG9DSjR2mKaGFPMRBJzUvYxLTQqoHhtjX72Nmw&w=1200&q=75',
    },
    {
      id: 6,
      title: 'Socket.io Telegram Clone',
      price: 12.99,
      Image:
        'https://www.sammi.ac/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2Fcee8c824-e21a-4a79-94df-b2374e2bc745-uiysne.png&w=1200&q=75',
    },
  ]
}
