export interface CheckboxQuestionsList {
  id_oferta: number,
  nome: string,
  produtos: CheckboxProducts[],

}

export interface Assistances {
  id_assistencia: string,
  nome: string,
  descricao: string,
  resumo: string,
  assistencia_obrigatoria: boolean,
  identificador: string
}

export interface Coverages {
  id_cobertura: string,
  nome: string,
  descricao: string,
  resumo: string,
  cobertura_obrigatoria: boolean,
  identificador: string,
  importancias_segurada: ImportantAssurance[],
  nao_incluso: any[],
  dependencias: any[],
  ocultar_descricao: boolean
}

export interface ImportantAssurance {
  tipo: string,
  minimo: number,
  maximo: number,
  incremento: number,
  valor_sugerido: SuggestedValue[]
}

export interface SuggestedValue {
  tipo_imovel: number,
  valor: number
}

export interface CheckboxProducts {
  id_produto: number,
  id_parceiro: number,
  nome: string,
  vigencia: ProductsValidity,
  importancia_base: {
    incremento: number,
    maximo: number,
    minimo: number,
    valor_sugerido: SuggestedValue[],
  }
  coberturas: Coverages[],
  assistencias: Assistances[]
}

export interface ProductsValidity {
  quantidade: number,
  unidade: number
}
