gdjs.TItleCode = {};
gdjs.TItleCode.GDtitleObjects1= [];
gdjs.TItleCode.GDtitleObjects2= [];
gdjs.TItleCode.GDNewTextObjects1= [];
gdjs.TItleCode.GDNewTextObjects2= [];


gdjs.TItleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "bombrumsDOMMDOMM.mp3", true, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "v");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.TItleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TItleCode.GDtitleObjects1.length = 0;
gdjs.TItleCode.GDtitleObjects2.length = 0;
gdjs.TItleCode.GDNewTextObjects1.length = 0;
gdjs.TItleCode.GDNewTextObjects2.length = 0;

gdjs.TItleCode.eventsList0(runtimeScene);

return;

}

gdjs['TItleCode'] = gdjs.TItleCode;
