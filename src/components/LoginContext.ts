import { createContext } from "react";

export type LoginType={
     name:string|undefined,
     setName:(name:string|undefined)=>void;
}
export const LoginContext=createContext<LoginType|undefined>(undefined);
