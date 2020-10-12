import { IBGE } from "@utils";
import { IStatesIBGE, IStates } from "./interfaces";

import { server, config } from "@wildcard-api/client";

config.serverUrl = "http://localhost:5001";

async function getAllStates(uf: string = ""): Promise<IStatesIBGE[]> {
  return IBGE.get(`/api/v1/localidades/estados/${uf}`).then(({ data }) =>
    Array.isArray(data) ? data : [data],
  );
}

export async function getStates(): Promise<IStates> {
  const ibgeStates: IStatesIBGE[] = await getAllStates();

  return {
    estados: await Promise.all(
      ibgeStates.map(async (ibgeState: IStatesIBGE) => ({
        nome: ibgeState.nome,
        uf: ibgeState.sigla,
        populacao: (await server.getPopulationByUF(ibgeState.sigla)).populacao,
      })),
    ),
  };
}
