gdjs.GameCode = {};
gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachIndex3 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachObjects3 = [];

gdjs.GameCode.forEachTemporary2 = null;

gdjs.GameCode.forEachTemporary3 = null;

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.forEachTotalCount3 = 0;

gdjs.GameCode.GDGuyObjects1= [];
gdjs.GameCode.GDGuyObjects2= [];
gdjs.GameCode.GDGuyObjects3= [];
gdjs.GameCode.GDGuyObjects4= [];
gdjs.GameCode.GDGuyObjects5= [];
gdjs.GameCode.GDPlatformObjects1= [];
gdjs.GameCode.GDPlatformObjects2= [];
gdjs.GameCode.GDPlatformObjects3= [];
gdjs.GameCode.GDPlatformObjects4= [];
gdjs.GameCode.GDPlatformObjects5= [];
gdjs.GameCode.GDDebugObjects1= [];
gdjs.GameCode.GDDebugObjects2= [];
gdjs.GameCode.GDDebugObjects3= [];
gdjs.GameCode.GDDebugObjects4= [];
gdjs.GameCode.GDDebugObjects5= [];
gdjs.GameCode.GDNewTiledSpriteObjects1= [];
gdjs.GameCode.GDNewTiledSpriteObjects2= [];
gdjs.GameCode.GDNewTiledSpriteObjects3= [];
gdjs.GameCode.GDNewTiledSpriteObjects4= [];
gdjs.GameCode.GDNewTiledSpriteObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects3, gdjs.GameCode.GDPlatformObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects4[i].getVariableString(gdjs.GameCode.GDPlatformObjects4[i].getVariables().getFromIndex(0)) == "Red" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects4[k] = gdjs.GameCode.GDPlatformObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects4[i].setColor("255;0;0");
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects3, gdjs.GameCode.GDPlatformObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects4[i].getVariableString(gdjs.GameCode.GDPlatformObjects4[i].getVariables().getFromIndex(0)) == "Yellow" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects4[k] = gdjs.GameCode.GDPlatformObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects4[i].setColor("255;255;0");
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDPlatformObjects3, gdjs.GameCode.GDPlatformObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlatformObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlatformObjects4[i].getVariableString(gdjs.GameCode.GDPlatformObjects4[i].getVariables().getFromIndex(0)) == "Green" ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlatformObjects4[k] = gdjs.GameCode.GDPlatformObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDPlatformObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlatformObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects4[i].setColor("0;255;0");
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPlatformObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDPlatformObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPlatformObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPlatformObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects3[i].returnVariable(gdjs.GameCode.GDPlatformObjects3[i].getVariables().getFromIndex(0)).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.randomInRange(0, 2))));
}
}
{ //Subevents: 
gdjs.GameCode.eventsList0(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects2);

for (gdjs.GameCode.forEachIndex3 = 0;gdjs.GameCode.forEachIndex3 < gdjs.GameCode.GDPlatformObjects2.length;++gdjs.GameCode.forEachIndex3) {
gdjs.GameCode.GDPlatformObjects3.length = 0;


gdjs.GameCode.forEachTemporary3 = gdjs.GameCode.GDPlatformObjects2[gdjs.GameCode.forEachIndex3];
gdjs.GameCode.GDPlatformObjects3.push(gdjs.GameCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableString(((gdjs.GameCode.GDPlatformObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlatformObjects3[0].getVariables()).getFromIndex(0)));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects3[i].activateBehavior("Platform", false);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.GameCode.GDPlatformObjects1);

for (gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.GDPlatformObjects1.length;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPlatformObjects2.length = 0;


gdjs.GameCode.forEachTemporary2 = gdjs.GameCode.GDPlatformObjects1[gdjs.GameCode.forEachIndex2];
gdjs.GameCode.GDPlatformObjects2.push(gdjs.GameCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == (gdjs.RuntimeObject.getVariableString(((gdjs.GameCode.GDPlatformObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPlatformObjects2[0].getVariables()).getFromIndex(0))));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.GameCode.GDPlatformObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlatformObjects2[i].activateBehavior("Platform", true);
}
}}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.GameCode.GDDebugObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDebugObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDebugObjects2[i].setString(gdjs.evtTools.common.toString(Math.abs(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "change_timer")) - 5)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "change_timer") >= 5;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0).getChild(gdjs.randomInRange(0, 2))));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "change_timer");
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGuyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects2);
{for(var i = 0, len = gdjs.GameCode.GDGuyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "change_timer");
}}

}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Red";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.GameCode.GDDebugObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;0;0");
}{for(var i = 0, len = gdjs.GameCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDebugObjects1[i].setColor("180;0;0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Green";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.GameCode.GDDebugObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;255;0");
}{for(var i = 0, len = gdjs.GameCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDebugObjects1[i].setColor("0;180;0");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) == "Yellow";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Debug"), gdjs.GameCode.GDDebugObjects1);
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "255;255;0");
}{for(var i = 0, len = gdjs.GameCode.GDDebugObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDebugObjects1[i].setColor("180;180;0");
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.GameCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.GameCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNewTiledSpriteObjects1[i].setWidth(16 * (gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDGuyObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDGuyObjects1[0].getVariables()).getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGuyObjects1[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) + 20 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGuyObjects1[k] = gdjs.GameCode.GDGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects1[i].returnVariable(gdjs.GameCode.GDGuyObjects1[i].getVariables().getFromIndex(0)).sub(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects1[i].setY(-(50));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "beep", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "37732__longhairman__1khz_1ds_peep.wav", false, 10, 1);
}}

}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGuyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGuyObjects1[k] = gdjs.GameCode.GDGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects1[i].setAnimationFrame(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGuyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDGuyObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGuyObjects1[k] = gdjs.GameCode.GDGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGuyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGuyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDGuyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGuyObjects1[i].setAnimationFrame(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Guy"), gdjs.GameCode.GDGuyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGuyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDGuyObjects1[i].getVariableNumber(gdjs.GameCode.GDGuyObjects1[i].getVariables().getFromIndex(0)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGuyObjects1[k] = gdjs.GameCode.GDGuyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDGuyObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDGuyObjects1.length = 0;
gdjs.GameCode.GDGuyObjects2.length = 0;
gdjs.GameCode.GDGuyObjects3.length = 0;
gdjs.GameCode.GDGuyObjects4.length = 0;
gdjs.GameCode.GDGuyObjects5.length = 0;
gdjs.GameCode.GDPlatformObjects1.length = 0;
gdjs.GameCode.GDPlatformObjects2.length = 0;
gdjs.GameCode.GDPlatformObjects3.length = 0;
gdjs.GameCode.GDPlatformObjects4.length = 0;
gdjs.GameCode.GDPlatformObjects5.length = 0;
gdjs.GameCode.GDDebugObjects1.length = 0;
gdjs.GameCode.GDDebugObjects2.length = 0;
gdjs.GameCode.GDDebugObjects3.length = 0;
gdjs.GameCode.GDDebugObjects4.length = 0;
gdjs.GameCode.GDDebugObjects5.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects3.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects4.length = 0;
gdjs.GameCode.GDNewTiledSpriteObjects5.length = 0;

gdjs.GameCode.eventsList6(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
