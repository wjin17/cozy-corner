import {
  useContext,
  useReducer,
  createContext,
  type Dispatch,
  type ReactNode,
} from "react";

type Settings = {
  mode: "clock" | "timer";
  clock: {
    format: "12h" | "24h";
    showSeconds: boolean;
  };
  timer: {
    startTime: number;
  };
};

export enum SettingsActions {
  SET_MODE,
  SET_CLOCK_FORMAT,
  SET_SHOW_SECONDS,
}

type SetModeAction = {
  type: SettingsActions.SET_MODE;
  payload: "clock" | "timer";
};

type SetClockFormatAction = {
  type: SettingsActions.SET_CLOCK_FORMAT;
  payload: "12h" | "24h";
};

type SetShowSecondsAction = {
  type: SettingsActions.SET_SHOW_SECONDS;
  payload: boolean;
};

type Action = SetModeAction | SetClockFormatAction | SetShowSecondsAction;

function reducer(state: Settings, action: Action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case SettingsActions.SET_MODE:
      return { ...state, mode: action.payload };
    case SettingsActions.SET_CLOCK_FORMAT:
      return { ...state, clock: { ...state.clock, format: action.payload } };
    case SettingsActions.SET_SHOW_SECONDS:
      return {
        ...state,
        clock: { ...state.clock, showSeconds: action.payload },
      };
    default:
      return state;
  }
}

const defaultSettings: Settings = {
  mode: "clock",
  clock: {
    format: "12h",
    showSeconds: false,
  },
  timer: {
    startTime: 0,
  },
};

const SettingsContext = createContext<[Settings, Dispatch<Action>]>([
  defaultSettings,
  () => {},
]);

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, defaultSettings);

  return (
    <SettingsContext.Provider value={[state, dispatch]}>
      {children}
    </SettingsContext.Provider>
  );
};

const useSettings = () => {
  return useContext(SettingsContext);
};

export { SettingsProvider, useSettings };
