import { httpClient } from "./httpClient";
import { EnterpriseDTO, UpdateEnterpriseData } from "@/types";

export async function getEnterprise(): Promise<EnterpriseDTO> {
  const response = await httpClient.get<EnterpriseDTO>("/enterprise");
  return response.data;
}

export async function updateEnterprise(data: UpdateEnterpriseData): Promise<EnterpriseDTO> {
  const response = await httpClient.put<EnterpriseDTO>("/enterprise", data);
  return response.data;
}

export async function getPublicEnterpriseLink(): Promise<{ link: string | null }> {
  const response = await httpClient.get<{ link: string | null }>("/enterprise/enterprise-martins/link");
  return response.data;
}

