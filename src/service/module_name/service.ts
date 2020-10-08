import { IBGE } from "@utils";
import { IStatesIBGE, IStates } from "./interfaces";

async function getAllStates(uf: string = ""): Promise<IStatesIBGE[]> {
  return IBGE.get(`/api/v1/localidades/estados/${uf}`).then(({ data }) =>
    Array.isArray(data) ? data : [data],
  );
}

export async function getStates(): Promise<IStates> {
  const ibgeStates: IStatesIBGE[] = await getAllStates();

  return {
    estados: ibgeStates.map((ibgeState: IStatesIBGE) => ({
      nome: ibgeState.nome,
      uf: ibgeState.sigla,
    })),
  };
}
