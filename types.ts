export type QuestionType = 'mcq' | 'input';

export interface BaseQuestion {
  text: string;
  explanation: string;
  type: QuestionType;
}

export interface MCQQuestion extends BaseQuestion {
  type: 'mcq';
  options: string[];
  correctIndex: number;
}

export interface InputQuestion extends BaseQuestion {
  type: 'input';
  answer: string;
}

export type Question = MCQQuestion | InputQuestion;
