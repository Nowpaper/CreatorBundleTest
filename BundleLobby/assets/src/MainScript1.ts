// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScript1 extends cc.Component {

    @property(cc.ProgressBar)
    progressBar:cc.ProgressBar = null;
    @property(cc.Node)
    target1:cc.Node = null;
    @property(cc.Node)
    target2:cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    private _bundle:cc.AssetManager.Bundle;
    start () {
        this.progressBar.progress = 0;
        this.target1.active = this.target2.active = false;
    }
    onClickLoad(){
        cc.assetManager.loadBundle('aaa',(err,bundle)=>{
            if(!err){
                this._bundle = bundle;
                this.progressBar.progress = 1;
                this.target1.active = this.target2.active = true;
            }
        });
    }
    onClickSceneTo(){
        cc.director.loadScene('aaa');
    }
    onClickLoadPrefab(s:cc.Event.EventTouch){
        this._bundle.load('res/spineboy',cc.Prefab,(err,asset:cc.Prefab)=>{
            if(!err){
                this.target1.addChild(cc.instantiate(asset));
                s.currentTarget.active = false;
            }
        });
    }
    onClickLoadSpriteFrame(s:cc.Event.EventTouch){
        this._bundle.load('res/button',cc.Texture2D,(err,tex:cc.Texture2D)=>{
            if(!err){
                s.currentTarget.active = false;
                const node = new cc.Node();
                node.addComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
                this.target2.addChild(node);
            }
        });        
    }
    // update (dt) {}
    
}
