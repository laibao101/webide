import { createContext, useContext } from 'react'
import Workspace from "./workspace";

export const workspaceContext = createContext<Workspace | null>(null);

export const useWorkspace = (): Workspace => {
    return useContext(workspaceContext)!
}