declare interface Client {
  _id: string;
  name: string,
  edrpou: string,
  ipn: string,
  bank: string,
  account_number: string,
  address_jur: string,
  address_phiz: string,
  address_sklad: string,
  pib_kerivnyka: string,
  pib_kontaktna: string,
  number: string,
  email: string,
  supervisors: Supervisor[],
  payment_terms_and_conditions: string,
  contracts_links: string[]
}
