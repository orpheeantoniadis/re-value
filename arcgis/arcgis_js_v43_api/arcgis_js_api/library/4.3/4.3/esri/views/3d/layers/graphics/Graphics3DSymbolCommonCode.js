// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("../../../../geometry/Point ../../../../geometry/support/mathUtils ./graphicUtils ./ElevationInfo ../../support/projectionUtils ../../lib/glMatrix ../../webgl-engine/lib/Object3D".split(" "),function(B,y,z,t,w,A,C){var D=A.mat4d,k=A.vec3d.create(),E=D.identity(),u={x:0,y:0,z:0,spatialReference:null},l={createStageObjectForPoint:function(b,a,d,c,e,h,f,g,F,q,m){var p=a?a.length:0,x=this._context.clippingExtent;l.reprojectPoint(b,k,this._context.elevationProvider.spatialReference);if(x&&!l.pointInBox2D(k,
x))return null;l.reprojectPoint(b,k,this._context.renderSpatialReference);x=this._context.localOriginFactory.getOrigin(k);f=new C({castShadow:!1,metadata:{layerId:g,graphicId:F,usesVerticalDistanceToGround:void 0===q?!1:q},idHint:f});for(g=0;g<p;g++)f.addGeometry(a[g],d[g],c?c[g]:E,e,x,m);b=l.setObjectElevation(f,b,h,this._context.renderSpatialReference,this._context.elevationProvider);return{object:f,terrainElevation:b.terrainElevation}},extendPointGraphicElevationInfo:function(b,a,d){b=b.elevationInfo;
d=d.spatialReference;l.reprojectPoint(a,k,d);b.centerPointInElevationSR={x:k[0],y:k[1],z:a.hasZ?k[2]:void 0,spatialReference:d}},placePointOnPolyline:function(b){var a=b.paths[0],a=y.getPointOnPath(a,y.getPathLength(a)/2);return new B(a[0],a[1],a[2],b.spatialReference)},placePointOnPolygon:function(b){return z.computeCentroid(b)},computeElevation:function(b,a,d,c){var e=0,h=a.z||0,f=0,f=d.mode,g=d.offset||0;f===t.MODES.ON_THE_GROUND?(e=f=b.getElevation(a)||0,c&&(c.verticalDistanceToGround=0,c.terrainElevation=
f)):f===t.MODES.RELATIVE_TO_GROUND?(f=b.getElevation(a)||0,e=g,null==d.featureExpression&&(e+=h),c&&(c.verticalDistanceToGround=e,c.terrainElevation=f),e+=f):f===t.MODES.ABSOLUTE_HEIGHT&&(e=h+g,c&&(f=b.getElevation(a)||0,c.verticalDistanceToGround=e-f,c.terrainElevation=f));return e},applyElevation:function(b,a,d,c,e,h,f){var g=f.mode,l=f.offset,q=0,m=0,p=0;u.spatialReference=b.spatialReference;d*=3;e*=3;for(var k=0;k<h;++k)u.x=a[d+0],u.y=a[d+1],u.z=a[d+2],g===t.MODES.ON_THE_GROUND?(m=q=b.getElevation(u)||
0,p+=q):g===t.MODES.RELATIVE_TO_GROUND?(q=b.getElevation(u)||0,m=q+l,null==f.featureExpression&&(m+=u.z),p+=q):g===t.MODES.ABSOLUTE_HEIGHT&&(m=u.z+l),c[e+0]=a[d+0],c[e+1]=a[d+1],c[e+2]=m,d+=3,e+=3;return{terrainElevation:p/h}},setObjectElevation:function(b,a,d,c,e){var h=0,f;if(b.metadata.usesVerticalDistanceToGround)h=l.computeElevation(e,a,d,v),z.updateVertexAttributeAuxpos1w(b,v.verticalDistanceToGround),f=v.terrainElevation;else{var g=d.mode!==t.MODES.ABSOLUTE_HEIGHT,h=l.computeElevation(e,a,
d,g?v:null);g&&(f=v.terrainElevation)}d=b.getObjectTransformation();k[0]=a.x;k[1]=a.y;k[2]=h;w.computeLinearTransformation(a.spatialReference,k,d,c)?b.setObjectTransformation(d):console.warn("Could not locate symbol object properly, it might be misplaced");return{terrainElevation:f}},getSingleSizeDriver:function(b){return isFinite(b[0])?b[0]:null},isCounterClockwise:function(b){for(var a=0,d=b.length-1,c=0;c<d;c++)a+=b[c][0]*b[c+1][1]-b[c+1][0]*b[c][1];return 0<=a},copyPointData:function(b,a,d,c,
e,h){c*=3;for(var f=0;f<e;++f){var g=b[a++];d[c++]=g[0];d[c++]=g[1];d[c++]=h?g[2]:0}return c/3},copyPathData:function(b,a){for(var d=b.length,c=Array(d),e=Array(d),h=Array(d),f=0,g=0,k=0,q=0,m=0;m<d;++m)q+=b[m].length;for(var q=new Float64Array(3*q),p=0,t=d-1;0<=t;t--){var n=b[t];if(l.isCounterClockwise(n))c[f++]=n;else{for(var r=n.length,m=0;m<f;++m)r+=c[m].length;m={index:p,pathLengths:Array(f+1),count:r,holeIndices:Array(f)};m.pathLengths[0]=n.length;0<n.length&&(h[k++]={index:p,count:n.length});
p=l.copyPointData(n,0,q,p,n.length,a);for(n=0;n<f;++n)r=c[n],m.holeIndices[n]=p,m.pathLengths[n+1]=r.length,0<r.length&&(h[k++]={index:p,count:r.length}),p=l.copyPointData(r,0,q,p,r.length,a);f=0;0<m.count&&(e[g++]=m)}}for(n=0;n<f;++n)r=c[n],0<r.length&&(h[k++]={index:p,count:r.length}),p=l.copyPointData(r,0,q,p,r.length,a);g<d&&(e.length=g);k<d&&(h.length=k);return{vertexData:q,polygons:e,outlines:h}},copyVertices:function(b,a,d,c,e){a*=3;c*=3;for(var h=0;h<e;++h)d[c++]=b[a++],d[c++]=b[a++],d[c++]=
b[a++]},chooseOrigin:function(b,a,d,c){a=Math.floor(a+(d-1)/2);c[0]=b[3*a+0];c[1]=b[3*a+1];c[2]=b[3*a+2]},subtractCoordinates:function(b,a,d,c){a*=3;for(var e=0;e<d;++e)b[a++]-=c[0],b[a++]-=c[1],b[a++]-=c[2]},setZ:function(b,a,d,c){a*=3;for(var e=0;e<d;++e)b[a+2]=c,a+=3},offsetZ:function(b,a,d,c){a*=3;for(var e=0;e<d;++e)b[a+2]+=c,a+=3},scaleZ:function(b,a,d,c){a*=3;for(var e=0;e<d;++e)b[a+2]*=c,a+=3},flatArrayToArrayOfArrays:function(b,a,d){var c=[];a*=3;for(var e=0;e<d;++e)c.push([b[a++],b[a++],
b[a++]]);return c},reproject:function(b,a,d,c,e,h,f){w.bufferToBuffer(b,d,a,c,h,e,f)},reprojectPoint:function(b,a,d){w.pointToVector(b,a,d)},getGeometryVertexData3D:function(b,a,d,c,e,h){var f=e.spatialReference;b=l.copyPathData(b,a);a=b.vertexData;var g=a.length/3,k=new Float64Array(a.length);d.equals(f)?l.copyVertices(a,0,k,0,a.length):l.reproject(a,0,d,k,0,f,g);d=l.applyElevation(e,k,0,a,0,g,h);f.equals(c)||l.reproject(a,0,f,a,0,c,g);return{geometryData:b,vertexData:a,eleVertexData:k,terrainElevation:d.terrainElevation}},
getGeometryVertexDataDraped:function(b,a,d){b=l.copyPathData(b,!1);var c=b.vertexData,e=c.length/3;a.equals(d)||w.bufferToBuffer(c,a,0,c,d,0,e);return{geometryData:b,vertexData:c}},computeBoundingBox:function(b,a,d,c){c[0]=Number.MAX_VALUE;c[1]=Number.MAX_VALUE;c[2]=Number.MAX_VALUE;c[3]=-Number.MAX_VALUE;c[4]=-Number.MAX_VALUE;c[5]=-Number.MAX_VALUE;a*=3;for(var e=0;e<d;++e){var h=b[a++],f=b[a++],g=b[a++];h<c[0]&&(c[0]=h);f<c[1]&&(c[1]=f);g<c[2]&&(c[2]=g);h>c[3]&&(c[3]=h);f>c[4]&&(c[4]=f);g>c[5]&&
(c[5]=g)}return c},pointInBox2D:function(b,a){return!(b[0]>a[3]||b[0]<a[0]||b[1]>a[4]||b[1]<a[1])},boxesIntersect2D:function(b,a){return!(a[0]>b[3]||a[3]<b[0]||a[1]>b[4]||a[4]<b[1])},boundingBoxClipped:function(b,a){return a?!l.boxesIntersect2D(b,a):!1},ELEV_MODES:t.MODES},v={verticalDistanceToGround:0,terrainElevation:0};return l});