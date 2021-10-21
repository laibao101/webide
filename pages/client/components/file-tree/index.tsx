import React from 'react';
import { observer } from 'mobx-react-lite'
import { useWorkspace } from '../../core/context';
import styled from 'styled-components';


const StyledFileTreeWrapper = styled.div`
    width: 200px;
`

export default observer(function FileTree () {
    const workspace = useWorkspace();
    const { fileList = [], chagneFile } = workspace.stage;

    return (
        <StyledFileTreeWrapper className="file-tree">
            {
                fileList.map(file => {
                    const { filename } = file
                    return <div key={filename} onClick={() => chagneFile(filename)}>{filename}</div>;
                })
            }
        </StyledFileTreeWrapper>
    )
})
