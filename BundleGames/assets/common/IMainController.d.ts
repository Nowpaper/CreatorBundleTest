
declare interface IMainController {
    outString(str: string): void;
}
declare interface Window{
    debugMainCtrl:IMainController;
}