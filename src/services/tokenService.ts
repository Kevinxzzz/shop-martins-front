import { httpClient } from "./httpClient";
import type { Token, CreateTokenData } from "@/types";

export async function getTokens(page = 1, limit = 50): Promise<Token[]> {
  const response = await httpClient.get<{ data: Token[]; meta: any }>(
    `/tokens?page=${page}&limit=${limit}`,
  );
  return response.data.data;
}

export async function generateToken(data: CreateTokenData): Promise<{
  id: string;
  rawToken: string;
  createdAt: string;
}> {
  const response = await httpClient.post<{
    id: string;
    rawToken: string;
    createdAt: string;
  }>("/tokens", data);
  return response.data;
}

export async function revokeToken(tokenId: string): Promise<void> {
  await httpClient.delete(`/tokens/${tokenId}`);
}
