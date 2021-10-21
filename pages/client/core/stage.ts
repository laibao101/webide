import { makeAutoObservable, runInAction } from "mobx";
import autoBind from 'auto-bind';
import { TFileContent, TFileList, TFilename, IFile } from "./types";
import Workspace from "./workspace";

export default class Stage {
    fileList: TFileList = [];

    workspace: Workspace;

    currentFile: IFile | undefined;

    constructor(workspace: Workspace) {
        this.workspace = workspace;
        autoBind(this);
        makeAutoObservable(this);
    }

    async loadFiles() {
        const res = await fetch('/api/workspace/files');
        const { files } = await res.json();
        runInAction(() => {
            this.fileList = files;
            this.currentFile = files[0].filename;
        })
    }

    chagneFile(filename: TFilename) {
        const file = this.fileList.find(file => file.filename === filename);
        file && (this.currentFile = file);
    }

    saveFile(fileContent: TFileContent) {
        this.currentFile!.fileContent = fileContent;
    }
}