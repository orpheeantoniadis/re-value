// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../webgl/BufferObject ../2d/engine/DisplayObject ../../core/libs/gl-matrix/vec2 ../../core/libs/gl-matrix/mat4 ./RenderBucket".split(" "),function(w,x,r,h,t,u,v,p){return function(n){function k(d,b,h,c,f,a,e,m,l,k,p){var g=n.call(this)||this;g._renderBuckets=[];g._vectorTileData=null;g._symbolUpdateData=null;g.coords=[0,0];g.tileTransform={transform:Float32Array[16],displayCoord:Float32Array[2]};g.stencilData={mask:0,reference:0};g.key=d;
g.refKey=b;g.coords[0]=h[0];g.coords[1]=h[1];g.widthInPixels=c;g.coordRange=f;g.rotation=a;g._vectorTileData=e;g.styleLayers=m;g._glyphsMosaic=l;g.workerID=k;g._connection=p;g.id=d.id;g.status=3;g.tileTransform.transform=v.create();g.tileTransform.displayCoord=u.create();return g}r(k,n);k.prototype.updateSymbolData=function(d){d&&(this._symbolUpdateData=d,this.requestRender())};k.prototype.dispose=function(){-1!==this.workerID&&this._connection&&6!==this.status&&7!==this.status&&this._connection.broadcast("destructTileData",
{key:this.id,worker:this.workerID},[]);this.polygonTrianglesVertexArrayObject&&(this.polygonTrianglesVertexArrayObject.dispose(),this.polygonTrianglesVertexArrayObject=null);this.polygonOutlineVertexArrayObject&&(this.polygonOutlineVertexArrayObject.dispose(),this.polygonOutlineVertexArrayObject=null);this.lineTrianglesVertexArrayObject&&(this.lineTrianglesVertexArrayObject.dispose(),this.lineTrianglesVertexArrayObject=null);this.lineJoinsVertexArrayObject&&(this.lineJoinsVertexArrayObject.dispose(),
this.lineJoinsVertexArrayObject=null);this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=null);this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null);this.polygonTrianglesVertexBuffer&&(this.polygonTrianglesVertexBuffer.dispose(),this.polygonTrianglesVertexBuffer=null);this.polygonTrianglesIndexBuffer&&(this.polygonTrianglesIndexBuffer.dispose(),this.polygonTrianglesIndexBuffer=null);this.polygonOutlinesVertexBuffer&&
(this.polygonOutlinesVertexBuffer.dispose(),this.polygonOutlinesVertexBuffer=null);this.polygonOutlinesIndexBuffer&&(this.polygonOutlinesIndexBuffer.dispose(),this.polygonOutlinesIndexBuffer=null);this.lineVertexBuffer&&(this.lineVertexBuffer.dispose(),this.lineVertexBuffer=null);this.lineTrianglesIndexBuffer&&(this.lineTrianglesIndexBuffer.dispose(),this.lineTrianglesIndexBuffer=null);this.lineJoinVertexBuffer&&(this.lineJoinVertexBuffer.dispose(),this.lineJoinVertexBuffer=null);this.iconVertexBuffer&&
(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null);this._renderBuckets=[];this.status=7};k.prototype.attach=function(d){this.status=3;if(!this._vectorTileData)return!1;if(0===this._renderBuckets.length)for(var b=new Uint32Array(this._vectorTileData.bucketDataInfo),
q=b.length,c=0;c<q;){var f=b[c],a=b[c+1];if(0===a)a=new p.BackgroundRenderBucket,a.layerID=f,this._renderBuckets.push(a),c+=2;else if(1===a)a=new p.FillRenderBucket,a.layerID=f,a.triangleElementStart=b[c+2],a.triangleElementCount=b[c+3],a.outlineElementStart=b[c+4],a.outlineElementCount=b[c+5],this._renderBuckets.push(a),c+=6;else if(2===a)a=new p.LineRenderBucket,a.layerID=f,a.triangleElementStart=b[c+2],a.triangleElementCount=b[c+3],a.joinStart=b[c+4],a.joinCount=b[c+5],this._renderBuckets.push(a),
c+=6;else if(3===a){a=new p.SymbolRenderBucket;a.layerID=f;a.textElementStart=b[c+2];a.textElementCount=b[c+3];a.isSDF=0!==b[c+4];f=b[c+5];if(0<f)for(var e=c+6,m=void 0,l=void 0,k=void 0,n=0;n<f;n++)m=b[e],l=b[e+1],k=b[e+2],a.markerPerPageElementsMap.set(m,[l,k]),e+=3;this._renderBuckets.push(a);c+=6+3*f}else console.error("Bad bucket type!")}b=d.context;d=d.budget;q=new Uint32Array(this._vectorTileData.bufferDataInfo);c=q.length;for(f=a=0;f<c;f+=2,a++)if(e=q[f+1],!(0>=e||0===this._vectorTileData.bufferData[a].byteLength)){if(d&&
d.done)return!1;switch(q[f]){case 2:this.polygonTrianglesVertexBuffer||(this.polygonTrianglesVertexBuffer=h.createVertex(b,35044,this._vectorTileData.bufferData[a]));break;case 6:this.polygonTrianglesIndexBuffer||(this.polygonTrianglesIndexBuffer=h.createIndex(b,35044,new Uint32Array(this._vectorTileData.bufferData[a],0,e/4)));break;case 3:this.polygonOutlinesVertexBuffer||(this.polygonOutlinesVertexBuffer=h.createVertex(b,35044,this._vectorTileData.bufferData[a]));break;case 7:this.polygonOutlinesIndexBuffer||
(this.polygonOutlinesIndexBuffer=h.createIndex(b,35044,new Uint32Array(this._vectorTileData.bufferData[a],0,e/4)));break;case 0:this.lineVertexBuffer||(this.lineVertexBuffer=h.createVertex(b,35044,this._vectorTileData.bufferData[a]));break;case 8:this.lineTrianglesIndexBuffer||(this.lineTrianglesIndexBuffer=h.createIndex(b,35044,this._vectorTileData.bufferData[a]));break;case 1:this.lineJoinVertexBuffer||(this.lineJoinVertexBuffer=h.createVertex(b,35044,this._vectorTileData.bufferData[a]));break;
case 4:this.iconVertexBuffer||(this.iconVertexBuffer=h.createVertex(b,35044,this._vectorTileData.bufferData[a]));break;case 9:this.iconIndexBuffer||(this.iconIndexBuffer=h.createIndex(b,35044,new Uint32Array(this._vectorTileData.bufferData[a],0,e/4)));break;case 5:this.textVertexBuffer||(this.textVertexBuffer=h.createVertex(b,35044,this._vectorTileData.bufferData[a]));break;case 10:this.textIndexBuffer||(this.textIndexBuffer=h.createIndex(b,35044,new Uint32Array(this._vectorTileData.bufferData[a],
0,e/4)))}}this.status=4;return!0};k.prototype.detach=function(d){};k.prototype.render=function(d){if(this.visible&&4===this.status){var b=d.context,h=d.renderer;if(b&&h){var c=d.drawphase;this._symbolUpdateData&&this._updateSymbolData(d);b.setStencilFunction(514,this.stencilData.reference,this.stencilData.mask);var f=this.styleLayers,a=void 0!==d.layerOpacity?d.layerOpacity:1;if(0!==a){var e,m=this._renderBuckets.length,l=0;if(0===c)for(l=m-1;0<=l;l--)e=this._renderBuckets[l],3!==e.type&&e.hasData()&&
h.renderBucket(b,e,d.displayLevel,d.requiredLevel,c,this,f.layers[e.layerID],a);else for(l=0;l<m;l++)e=this._renderBuckets[l],e.hasData()&&h.renderBucket(b,e,d.displayLevel,d.requiredLevel,c,this,f.layers[e.layerID],a)}}}};k.prototype._updateSymbolData=function(d){var b=new Uint32Array(this._symbolUpdateData.bucketDataInfo),k=b.length;if(0===k)return this._symbolUpdateData=null,!0;if(1>d.budget.remaining)return this.requestRender(),!1;d=d.context;d.bindVAO(null);for(var c=new Uint32Array(this._symbolUpdateData.bufferDataInfo),
f=c.length,a=0,e=0;e<f;e+=2,a++){var m=c[e+1];if(!(0>=m||0===this._symbolUpdateData.bufferData[a].byteLength))switch(c[e]){case 4:this.iconVertexBuffer&&(this.iconVertexBuffer.dispose(),this.iconVertexBuffer=null);this.iconVertexBuffer=h.createVertex(d,35044,this._symbolUpdateData.bufferData[a]);break;case 9:this.iconIndexBuffer&&(this.iconIndexBuffer.dispose(),this.iconIndexBuffer=null);this.iconIndexBuffer=h.createIndex(d,35044,new Uint32Array(this._symbolUpdateData.bufferData[a],0,m/4));break;
case 5:this.textVertexBuffer&&(this.textVertexBuffer.dispose(),this.textVertexBuffer=null);this.textVertexBuffer=h.createVertex(d,35044,this._symbolUpdateData.bufferData[a]);break;case 10:this.textIndexBuffer&&(this.textIndexBuffer.dispose(),this.textIndexBuffer=null),this.textIndexBuffer=h.createIndex(d,35044,new Uint32Array(this._symbolUpdateData.bufferData[a],0,m/4))}}d=this._renderBuckets.length;for(c=0;c<d;c++)this._renderBuckets[c]instanceof p.SymbolRenderBucket&&(f=this._renderBuckets[c],f.markerPerPageElementsMap.clear(),
f.textElementStart=0,f.textElementCount=0);for(d=0;d<k;){a=b[d];f=-1;e=this._renderBuckets.length;for(c=0;c<e;c++)if(this._renderBuckets[c].layerID===a){f=c;break}-1===f&&console.log("bucket not found");if(c=this._renderBuckets[f]){c.textElementStart=b[d+2];c.textElementCount=b[d+3];for(var f=b[d+5],a=d+6,l=m=e=void 0,n=0;n<f;n++)e=b[a],m=b[a+1],l=b[a+2],c.markerPerPageElementsMap.set(e,[m,l]),a+=3;d+=6+3*f}else d+=7}this.iconVertexArrayObject&&(this.iconVertexArrayObject.dispose(),this.iconVertexArrayObject=
null);this.textVertexArrayObject&&(this.textVertexArrayObject.dispose(),this.textVertexArrayObject=null);this._symbolUpdateData=null;return!0};return k}(t)});