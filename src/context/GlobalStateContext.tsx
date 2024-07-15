import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import { IState, TAction } from "../interfaces";

const initialState: IState = {
  studentID: 0,
  year: 0,
  score: {},
  isLoading: false,
};

const reducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "updateStudentID":
      return { ...state, studentID: action.payload };
    case "updateYear":
      return { ...state, year: action.payload };
    case "updateScore":
      return { ...state, score: action.payload };
    case "updateIsLoading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext<
  { state: IState; dispatch: Dispatch<TAction> } | undefined
>(undefined);

export default function GlobalStateContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (!context) {
    throw new Error("UpdateScore must be used within a StateProvider");
  }

  return context;
};
