// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    ballRigidBody: cc.RigidBody;
    ballCollider: cc.PhysicsCircleCollider;

   @property(cc.Node)
   ball:cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

     onLoad () {
         cc.director.getPhysicsManager().enabled = true;
         this.ballRigidBody = this.ball.getComponent(cc.RigidBody);
         this.ballCollider = this.ball.getComponent('cc.PhysicsCircleCollider');
         this.ballCollider.restitution = 0.6;
         this.ball.on('touchmove', this.onBallTouchHandler.bind(this));
     }


    onBallTouchHandler(e: any): void {
         let localCenter: cc.Vec2 = this.ballRigidBody.getLocalCenter();
         console.log('asd');
         this.ballRigidBody.applyLinearImpulse(cc.v2(1000, 0), localCenter, true);
    }

    start () {

    }

    // update (dt) {}
}
