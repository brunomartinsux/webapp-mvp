interface QuestionOptions {
    corrects: string[];
    A: string;
    B: string;
    C?: string;
    D?: string;
    E?: string;
    F?: string;
    G?: string;
}

export interface Question {
    type: string;
    options: QuestionOptions;
    text: string;
}