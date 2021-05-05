// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game2Logic extends cc.Component {

    @property(dragonBones.ArmatureDisplay)
    actor:dragonBones.ArmatureDisplay = null;


    start () {
        this.node.on(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this);
        this.node.on("ActorAnimationPlay",this.onActorAnimationPlay,this);
    }
    onDestroy(){
        this.node.off(cc.Node.EventType.TOUCH_END,this.onTouchEnd,this);
        this.node.off("ActorAnimationPlay",this.onActorAnimationPlay,this);
    }
    private onActorAnimationPlay(aniname:string){
        this.actor.playAnimation(aniname,-1);
    }
    private index = 0;
    private onTouchEnd(){
        const arr = this.actor.getAnimationNames("ubbie");
        const aniName = arr[this.index % arr.length];
        this.node.emit("ActorAnimationPlay",aniName);
        // this.actor.playAnimation(aniName,-1);
        this.index += 1;
        let mainCtrl:IMainController = cc.director.getScene().getComponentInChildren('MainControllerScript');
        if(!mainCtrl){
            mainCtrl = window.debugMainCtrl;
        }
        mainCtrl.outString(aniName);
    }
    // update (dt) {}
}
