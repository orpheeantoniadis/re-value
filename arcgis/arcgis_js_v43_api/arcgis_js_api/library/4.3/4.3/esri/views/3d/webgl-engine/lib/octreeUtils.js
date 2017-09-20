// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define(["require","exports","./Octree","./gl-matrix"],function(q,g,k,p){function l(c,a){void 0===a&&(a=!1);var b=c instanceof k?c.root:c,d;d={};c instanceof k&&(a&&(d.center=h.create(c.center),d.size=c.size),0!==c.outsiders.length&&(d.outsiders=c.outsiders.map(function(a){return a.getId()})));0<b.terminals.length&&(d.terminals=b.terminals.map(function(a){return a.getId()}));null!==b.residents&&0<b.residents.length&&(d.residents=b.residents.map(function(a){return a.getId()}));null===b.residents&&b.children.forEach(function(a,
b){a&&(d["child"+b]=l(a))});return d}function m(c,a,b,d){for(var f=c.getCenter(),e=0;3>e;e++)if(f[e]<a[e]||f[e]>b[e])throw Error("[Octree Validation] Object is not within node bounds");a=.25*(b[0]-a[0]);c=c.getBSRadius();if(d&&c<a)throw Error("[Octree Validation] Object is too small to be a terminal");if(!d&&c>a)throw Error("[Octree Validation] Object is too large to be a resident");}function n(c,a,b){b=b||c;b[0]=c[0]+a;b[1]=c[1]+a;b[2]=c[2]+a;return b}var h=p.vec3d;g.stats=function(c){var a={numNodes:0,
numObjects:0,numTerminals:0,numResidents:0,numOutsiders:0,numInnerNodes:0,numTerminalNodes:0,maximumDepth:0,maxNumTerminals:0,maxNumResidents:0,maxNumObjects:0};a.numOutsiders=c.outsiders.length;c.forEachNode(function(b,d,f){null===b.residents?a.numInnerNodes++:a.numTerminalNodes++;a.numTerminals+=b.terminals.length;a.maxNumTerminals=Math.max(b.terminals.length,a.maxNumTerminals);d=b.terminals.length;null!==b.residents&&(a.numResidents+=b.residents.length,a.maxNumResidents=Math.max(b.residents.length,
a.maxNumResidents),d+=b.residents.length);a.maxNumObjects=Math.max(d,a.maxNumObjects);a.maximumDepth=Math.max(a.maximumDepth,Math.round(Math.log(c.size/f)*Math.LOG2E));return!0});a.numObjects=a.numOutsiders+a.numTerminals+a.numResidents;a.numNodes=a.numInnerNodes+a.numTerminalNodes;return a};g.debugDump=l;g.assert=function(c){c.forEachNode(function(a,b,d){var f=n(b,-d/2,h.create()),e=n(b,d/2,h.create());a.terminals.forEach(function(a){return m(a,f,e,!0)});if(null!==a.residents){if(a.residents.length>
c.maximumObjectsPerNode)throw Error("[Octree Validation] Number of objects "+a.residents.length+" exceeds maximum allowed ("+c.maximumObjectsPerNode+")");a.residents.forEach(function(a){return m(a,f,e,!1)})}var g=!1;a.children.forEach(function(b){if(b&&(g=!0,null!==a.residents))throw Error("[Octree Validation] Node has residents and children");});if(!g&&(null===a.residents||0===a.residents.length)&&0===a.terminals.length)throw Error("[Octree Validation] dangling empty node");return!0});return!0}});