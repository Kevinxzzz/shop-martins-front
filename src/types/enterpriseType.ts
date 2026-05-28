

export interface AuthEnterprise {
  id: string;
  name: string;
  cnpj: string;
}

export interface EnterpriseDTO {
  name: string;
  document: string;
  phone: string;
  salesGroupLink: string | null;
}

export interface UpdateEnterpriseData {
  name?: string;
  phone?: string;
  salesGroupLink?: string | null;
}
