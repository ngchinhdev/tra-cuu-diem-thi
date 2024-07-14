export interface IScore {
    studentID: number;
    cluster: string;
    year: number;
    subjects: {
        math: number;
        literature: number;
        foreignLanguage: number;
        physics?: number;
        chemistry?: number;
        biology?: number;
        history?: number;
        geography?: number;
        civicEducation?: number;
    };
}

export interface IState {
    studentID: number;
    year: number;
    score?: Partial<IScore>;
}

export type TAction =
    | { type: 'updateStudentID'; payload: number; }
    | { type: 'updateYear'; payload: number; }
    | { type: 'updateScore'; payload: IScore; };