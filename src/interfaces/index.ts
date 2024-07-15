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
    score: IScore | Record<string, never>;
    isLoading: boolean;
}

export type TAction =
    | { type: 'updateStudentID'; payload: number; }
    | { type: 'updateYear'; payload: number; }
    | { type: 'updateIsLoading'; payload: boolean; }
    | { type: 'updateScore'; payload: IScore | Record<string, never>; };