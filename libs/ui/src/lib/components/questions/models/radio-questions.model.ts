export interface QuestionList {
  id_questao: string;
  texto_questao: string;
  respostas: QuestionAnswers[];
}

export interface QuestionAnswers {
  id_resposta: string;
  texto_resposta: string;
}

export interface QuestionForm {
  id_questao: string;
  id_resposta: string;
}
