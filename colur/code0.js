gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDNewSpriteObjects1= [];
gdjs.Title_32ScreenCode.GDNewSpriteObjects2= [];
gdjs.Title_32ScreenCode.GDvolumeObjects1= [];
gdjs.Title_32ScreenCode.GDvolumeObjects2= [];
gdjs.Title_32ScreenCode.GDNewTextObjects1= [];
gdjs.Title_32ScreenCode.GDNewTextObjects2= [];


gdjs.Title_32ScreenCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("volume"), gdjs.Title_32ScreenCode.GDvolumeObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "colurtheme.mp3", true, 100, 1);
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDvolumeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDvolumeObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.Title_32ScreenCode.GDvolumeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDvolumeObjects1[i].pauseAnimation();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("volume"), gdjs.Title_32ScreenCode.GDvolumeObjects1);
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDvolumeObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDvolumeObjects1[i].setAnimationFrame(1);
}
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

gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Title_32ScreenCode.GDvolumeObjects1.length = 0;
gdjs.Title_32ScreenCode.GDvolumeObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNewTextObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNewTextObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
