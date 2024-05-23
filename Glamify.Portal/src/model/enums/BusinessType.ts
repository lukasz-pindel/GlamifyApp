export enum BusinessType {
  Barbershop = 0,
  NailSalon = 1,
  SPA = 2,
  Massage = 3,
}

export function getBusinessTypeValue(typeKey: string): BusinessType {
  return BusinessType[typeKey as keyof typeof BusinessType]
}
