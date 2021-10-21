import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CodeEditor from './components/code-editor';
import FileTree from './components/file-tree';
import Previewer from './components/previewer';
import { workspaceContext } from './core/context';
import Workspace from './core/workspace';

const StyledContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export default function App() {
    const [workspace] = useState(new Workspace())

    useEffect(() => {
        workspace.init();

        return () => {
            workspace.dispose();
        }
    }, [])


    return (
        <workspaceContext.Provider value={workspace}>
            <StyledContainer className="workspace">
                <FileTree />
                <CodeEditor />
                <Previewer />
            </StyledContainer>
        </workspaceContext.Provider>
    )
}