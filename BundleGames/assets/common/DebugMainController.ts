
class DebugMainController implements IMainController{
    outString(str: string): void {
        console.warn('Method is debug,str is' + str);
    }
}
if(!window.debugMainCtrl){
    window.debugMainCtrl = new DebugMainController();
}