gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDNewSpriteObjects1= [];
gdjs.Game_32OverCode.GDNewSpriteObjects2= [];
gdjs.Game_32OverCode.GDNewTextObjects1= [];
gdjs.Game_32OverCode.GDNewTextObjects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Game_32OverCode.GDNewSpriteObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDNewSpriteObjects1[i].setY(-(150));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "fallingggggggg.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDNewSpriteObjects1[i].getBehavior("Tween").addObjectPositionYTween("fall", gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + (gdjs.Game_32OverCode.GDNewSpriteObjects1[i].getHeight()), "linear", 1850, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32OverCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects1.length = 0;
gdjs.Game_32OverCode.GDNewTextObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);

return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
