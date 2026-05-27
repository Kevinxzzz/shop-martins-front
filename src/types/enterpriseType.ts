export interface Enterprise {
  id: string;
  name: string;
  number: string;
  cpfCnpj: string;
  salesGroupLink?: string;
}

export interface AuthEnterprise {
  id: string;
  name: string;
  cnpj: string;
}
