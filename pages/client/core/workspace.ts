import { makeAutoObservable } from "mobx";
import Stage from "./stage";


export default class Workspace {
    stage: Stage;

    constructor() {
        this.stage = new Stage(this);
        makeAutoObservable(this);
    }

    init() {
        this.stage.loadFiles();
    }

    dispose() {

    }
}