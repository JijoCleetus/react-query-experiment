import { createContext } from "react";
import { LoaderContextProps } from "../types/loader";

export const LoaderContext = createContext<LoaderContextProps>({} as LoaderContextProps)
