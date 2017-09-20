// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../../geometry/Point ../../lib/glMatrix ../../support/projectionUtils ../../webgl-engine/lib/Util ./Graphics3DSymbolCommonCode ./graphicUtils ./ElevationInfo".split(" "),function(g,n,G,H,I,J,x,r,z){var K=J.VertexAttrConstants;g=H.vec3d;var t=new G,h=g.create(),a=g.create(),m=g.create(),q={verticalDistanceToGround:0,terrainElevation:0};n.perVertexElevationAligner=function(k,b,d){var e=k.stageObject,A=k.elevationInfo;t.spatialReference=b.spatialReference;for(var p=e.getGeometryRecords(),
B=p.length,C=A.mode!==z.MODES.ABSOLUTE_HEIGHT,g=0,u=0;u<B;u++){var c=p[u].geometry,l=p[u].getShaderTransformation();a[0]=l[12];a[1]=l[13];a[2]=l[14];c.invalidateBoundingInfo();for(var l=c.getData().getVertexAttr(),v=l[K.POSITION],c=v.data,l=l.mapPos.data,v=v.size,r=c.length/v,f=0,y=0,D=!1,E=0,F=0;F<r;F++){t.x=l[y++];t.y=l[y++];t.z=l[y++];m[0]=c[f];m[1]=c[f+1];m[2]=c[f+2];var w=x.computeElevation(b,t,A,C?q:null);C&&(E+=q.terrainElevation);h[0]=c[f]+a[0];h[1]=c[f+1]+a[1];h[2]=c[f+2]+a[2];d.setAltitude(w,
h,0);c[f]=h[0]-a[0];c[f+1]=h[1]-a[1];c[f+2]=h[2]-a[2];w=n.updateThresholdInMeters/d.unitInMeters;if(Math.abs(m[0]-c[f])>=w||Math.abs(m[1]-c[f+1])>=w||Math.abs(m[2]-c[f+2])>=w)D=!0;f+=v}g+=E/r;D&&e.geometryVertexAttrsUpdated(u)}k.alignedTerrainElevation=g/B};n.perObjectElevationAligner=function(k,b,d){var e=k.elevationInfo,a=e.centerPointInElevationSR,p=0,g=0;if(k.stageObject.metadata.usesVerticalDistanceToGround)p=x.computeElevation(b,a,e,q),r.updateVertexAttributeAuxpos1w(k.stageObject,q.verticalDistanceToGround),
g=q.terrainElevation;else{var m=e.mode!==z.MODES.ABSOLUTE_HEIGHT,p=x.computeElevation(b,a,e,m?q:null);m&&(g=q.terrainElevation)}b=k.stageObject.getObjectTransformation();e=[b[12],b[13],b[14]];n.iterativeUpdatesEnabled?d.setAltitudeOfTransformation(p,b):(h[0]=a.x,h[1]=a.y,h[2]=p,I.computeLinearTransformation(a.spatialReference,h,b,d.spatialReference)&&k.stageObject.setObjectTransformation(b));d=n.updateThresholdInMeters/d.unitInMeters;(Math.abs(b[12]-e[0])>=d||Math.abs(b[13]-e[1])>=d||Math.abs(b[14]-
e[2])>=d)&&k.stageObject.setObjectTransformation(b);k.alignedTerrainElevation=g};n.perObjectVerticalDistanceToGroundAligner=function(a,b,d){d=a.elevationInfo;var e={verticalDistanceToGround:0};x.computeElevation(b,d.centerPointInElevationSR,d,e);r.updateVertexAttributeAuxpos1w(a.stageObject,e.verticalDistanceToGround)};n.updateThresholdInMeters=.01;n.iterativeUpdatesEnabled=!0});