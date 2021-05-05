import { IMainController } from "./IMainController";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainControllerScript extends cc.Component implements IMainController {
    @property(cc.Label)
    outLabel:cc.Label = null;
    outString(str: string): void {
        this.outLabel.string = str;
    }
    
}