gdjs.GameCode = {};
gdjs.GameCode.GDStickmanObjects1= [];
gdjs.GameCode.GDStickmanObjects2= [];
gdjs.GameCode.GDStickmanObjects3= [];
gdjs.GameCode.GDbombObjects1= [];
gdjs.GameCode.GDbombObjects2= [];
gdjs.GameCode.GDbombObjects3= [];
gdjs.GameCode.GDbombbounceObjects1= [];
gdjs.GameCode.GDbombbounceObjects2= [];
gdjs.GameCode.GDbombbounceObjects3= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Stickman"), gdjs.GameCode.GDStickmanObjects2);
{for(var i = 0, len = gdjs.GameCode.GDStickmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStickmanObjects2[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stickman"), gdjs.GameCode.GDStickmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDStickmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDStickmanObjects2[0].getPointX("")) >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStickmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDStickmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDStickmanObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Stickman"), gdjs.GameCode.GDStickmanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.GameCode.GDStickmanObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDStickmanObjects1[0].getPointX("")) < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDStickmanObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDStickmanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStickmanObjects1[i].flipX(true);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombbounceObjects2Objects = Hashtable.newFrom({"bombbounce": gdjs.GameCode.GDbombbounceObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombObjects2Objects = Hashtable.newFrom({"bomb": gdjs.GameCode.GDbombObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombbounceObjects2Objects = Hashtable.newFrom({"bombbounce": gdjs.GameCode.GDbombbounceObjects2});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.GameCode.GDbombObjects2);
{for(var i = 0, len = gdjs.GameCode.GDbombObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbombObjects2[i].addPolarForce(gdjs.randomInRange(-(360), 360) + 20, 300, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.GameCode.GDbombObjects2);
gdjs.copyArray(runtimeScene.getObjects("bombbounce"), gdjs.GameCode.GDbombbounceObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombbounceObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDbombObjects2 */
/* Reuse gdjs.GameCode.GDbombbounceObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDbombObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbombObjects2[i].getBehavior("Bounce").BounceOff(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombbounceObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "New sound effect2", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.GameCode.GDbombObjects1);
{for(var i = 0, len = gdjs.GameCode.GDbombObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbombObjects1[i].setScale(gdjs.GameCode.GDbombObjects1[i].getScale() + (0.1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombObjects1Objects = Hashtable.newFrom({"bomb": gdjs.GameCode.GDbombObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStickmanObjects1Objects = Hashtable.newFrom({"Stickman": gdjs.GameCode.GDStickmanObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Stickman"), gdjs.GameCode.GDStickmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.GameCode.GDbombObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDbombObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDStickmanObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("bomb"), gdjs.GameCode.GDbombObjects1);
{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.GameCode.GDbombObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbombObjects1[i].setScale(1);
}
}}

}


{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDStickmanObjects1.length = 0;
gdjs.GameCode.GDStickmanObjects2.length = 0;
gdjs.GameCode.GDStickmanObjects3.length = 0;
gdjs.GameCode.GDbombObjects1.length = 0;
gdjs.GameCode.GDbombObjects2.length = 0;
gdjs.GameCode.GDbombObjects3.length = 0;
gdjs.GameCode.GDbombbounceObjects1.length = 0;
gdjs.GameCode.GDbombbounceObjects2.length = 0;
gdjs.GameCode.GDbombbounceObjects3.length = 0;

gdjs.GameCode.eventsList3(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
