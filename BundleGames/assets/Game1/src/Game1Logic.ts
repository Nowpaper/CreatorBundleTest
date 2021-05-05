// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game1Logic extends cc.Component {

    @property(cc.Node)
    background: cc.Node = null;
    @property(cc.Node)
    actor: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    update (dt) {
        this.background.x -= dt * 100;
        if(this.background.x <= -(1024 + 256)){
            this.background.x = -256;
        }
    }
    onClickSceneBack(){
        cc.director.loadScene('Main2');
    }
}
