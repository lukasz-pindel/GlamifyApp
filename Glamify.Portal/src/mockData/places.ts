interface Place {
  id: number
  name: string
  address: string
  logo: string
}

interface Category {
  [key: string]: Place[]
}

export const placesInCategories: Category = {
  barbers: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    name: `Barber Shop #${i + 1}`,
    address: `${100 + i} Barber St, YourCity`,
    logo: "path-to-barber-logo.jpg",
  })),
  spas: Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    name: `Spa #${i + 1}`,
    address: `${200 + i} Spa Blvd, YourCity`,
    logo: "path-to-spa-logo.jpg",
  })),
  nailSalons: Array.from({ length: 10 }, (_, i) => ({
    id: i + 21,
    name: `Nail Salon #${i + 1}`,
    address: `${300 + i} Nail Rd, YourCity`,
    logo: "path-to-nail-salon-logo.jpg",
  })),
  massagePlaces: Array.from({ length: 10 }, (_, i) => ({
    id: i + 31,
    name: `Massage Place #${i + 1}`,
    address: `${400 + i} Massage Ln, YourCity`,
    logo: "path-to-massage-place-logo.jpg",
  })),
}
