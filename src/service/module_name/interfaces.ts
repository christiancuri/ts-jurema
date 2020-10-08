export interface IState {
  nome: string;
  uf: string;
}

export interface IStates {
  estados: IState[];
}

export interface IPopulation {
  uf: string;
  populacao: number;
}

export interface IPopulationIBGE {
  localidade: string;
  horario?: string;
  projecao: {
    populacao: number;
    periodoMedio?: {
      incrementoPopulacional?: number;
      nascimento?: number;
      obito?: number;
    };
  };
}

export interface IStatesIBGE {
  id: number;
  sigla: string;
  nome: string;
  regiao?: {
    id?: number;
    sigla?: string;
    nome?: string;
  };
}
