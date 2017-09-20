// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ./../math/vec2 ./../math/mat2d ./webgl/BitBlitRenderer ../../support/screenshotUtils ../../../core/promiseUtils ../math/common ./Container ../../webgl/RenderingContext ../../webgl/FramebufferObject ../../webgl/webgl-utils ../../webgl/Program ../../webgl/VertexArrayObject ../../webgl/BufferObject ./webgl/glShaderSnippets".split(" "),function(M,N,B,h,w,C,D,E,F,G,H,x,I,J,K,y,z){function A(h){return{budget:h.budget,state:h.state,devicePixelRatio:h.devicePixelRatio,
stationary:h.stationary}}var L={png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg"};return function(n){function f(){var a=null!==n&&n.apply(this,arguments)||this;a._clipData=new Float32Array(8);a._upperLeft=h.create();a._upperRight=h.create();a._lowerLeft=h.create();a._lowerRight=h.create();a._mat2=w.create();a._clipRendererInitialized=!1;return a}B(f,n);f.prototype.createElement=function(){var a=document.createElement("canvas");a.setAttribute("class","esri-display-object");return a};f.prototype.setElement=
function(a){this.element=a};f.prototype.attach=function(a){this._resizeCanvas(a);var b=I.setupWebGL(this.element,{alpha:!0,antialias:!1,depth:!0,stencil:!0});this._renderingContext=new H(b[0]);this.attached=!0;this._cachedRenderParams=A(a);return n.prototype.attach.call(this,a)};f.prototype.detach=function(a){n.prototype.detach.call(this,a);this._cachedRenderParams=this._renderingContext=null};f.prototype.beforeRenderChildren=function(a,b){var e=a.state;if(e.spatialReference&&(e.spatialReference._isWrappable?
e.spatialReference._isWrappable():e.spatialReference.isWrappable)){var d=e.width;b=e.height;var c=e.rotation,r=this._renderingContext,d=d*a.devicePixelRatio;b*=a.devicePixelRatio;var m=F.toRadian(c),l=Math.abs(Math.cos(m)),g=Math.abs(Math.sin(m)),f=Math.round(e.worldScreenWidth);if(Math.round(d*l+b*g)<=f)this._clipFrame=!1;else{this._clipFBO&&this._clipFBO.width===d&&this._clipFBO.height===b||(this._clipFBO=new x(r,{colorTarget:0,depthStencilTarget:3,width:d,height:b}));var n=.5*d,k=.5*b,e=1/d,p=
1/b;a=.5*f*a.devicePixelRatio;var t=.5*(d*g+b*l),d=this._upperLeft,l=this._upperRight,g=this._lowerLeft,f=this._lowerRight;h.set(d,-a,-t);h.set(l,a,-t);h.set(g,-a,t);h.set(f,a,t);w.identity(this._mat2);w.translate(this._mat2,this._mat2,[n,k]);0!==c&&w.rotate(this._mat2,this._mat2,m);h.transformMat2d(d,d,this._mat2);h.transformMat2d(l,l,this._mat2);h.transformMat2d(g,g,this._mat2);h.transformMat2d(f,f,this._mat2);c=this._clipData;c.set([2*g[0]*e-1,2*(b-g[1])*p-1,2*f[0]*e-1,2*(b-f[1])*p-1,2*d[0]*e-
1,2*(b-d[1])*p-1,2*l[0]*e-1,2*(b-l[1])*p-1]);this._clipRendererInitialized||this._initializeClipRenderer(r);this._clipVBO.setData(c);r.bindFramebuffer(this._clipFBO);r.setDepthWriteEnabled(!0);r.setStencilWriteMask(255);r.setClearColor(0,0,0,0);r.setClearDepth(1);r.setClearStencil(0);r.clear(r.gl.COLOR_BUFFER_BIT|r.gl.DEPTH_BUFFER_BIT|r.gl.STENCIL_BUFFER_BIT);this._clipFrame=!0}}else this._clipFrame=!1};f.prototype.afterRenderChildren=function(a,b){this._clipFrame&&this._clipRendererInitialized&&
(a=this._renderingContext,a.bindFramebuffer(),a.bindVAO(this._clipVAO),a.bindProgram(this._clipStencilProgram),a.setDepthWriteEnabled(!1),a.setDepthTestEnabled(!1),a.setStencilTestEnabled(!0),a.setBlendingEnabled(!1),a.setColorMask(!1,!1,!1,!1),a.setStencilOp(7680,7680,7681),a.setStencilWriteMask(255),a.setStencilFunction(519,1,255),a.drawElements(4,6,5123,0),a.bindVAO(),a.setColorMask(!0,!0,!0,!0),a.setBlendingEnabled(!0),a.setStencilWriteMask(255),a.setStencilFunction(514,1,255),this._blitRenderer.render(a,
this._clipFBO.colorTexture,9728,1),a.setStencilTestEnabled(!1))};f.prototype.render=function(a){var b=this.element.style;this.visible?(b.display="block",b.opacity=""+this.opacity,this._resizeCanvas(a),n.prototype.render.call(this,a),this._cachedRenderParams=A(a)):b.display="none"};f.prototype.takeScreenshot=function(a){var b=this._cachedRenderParams.devicePixelRatio,e=b*this._cachedRenderParams.state.width,d=b*this._cachedRenderParams.state.height,c=0,f=0,m=e,l=d,g=e,h=d;if(g=a.area)c=b*g.x,f=b*g.y,
m=b*g.width,l=b*g.height;void 0!==a.width&&void 0!==a.height?(g=a.width/a.height,l*g<m?(g*=l,c+=Math.floor((m-g)/2),m=Math.floor(g)):(g=m/g,f+=Math.floor((l-g)/2),l=Math.floor(g)),g=a.width,h=a.height):(g=m,h=l);b=document.createElement("canvas");b.width=g;b.height=h;var n=b.getContext("2d"),k=new Uint8Array(m*l*4),p=this._renderingContext,t=x.create(p,{colorTarget:1,depthStencilTarget:3,width:e,height:d});p.bindFramebuffer(t);p.setViewport(0,0,e,d);this._cachedRenderParams.budget&&this._cachedRenderParams.budget.reset(Number.MAX_VALUE);
var v=this._cachedRenderParams,q=this._renderingContext.gl;this._renderingContext.setClearColor(0,0,0,0);this._renderingContext.setClearDepth(1);this._renderingContext.setClearStencil(0);this._renderingContext.clear(q.COLOR_BUFFER_BIT|q.DEPTH_BUFFER_BIT|q.STENCIL_BUFFER_BIT);v.context=this._renderingContext;this.renderChildren(v);t.readPixels(c,d-(f+l),m,l,6408,5121,k);p.bindFramebuffer();p=n.getImageData(0,0,g,h);if(0!==c||0!==f||m!==e||l!==d||g!==e||h!==d)D.resampleHermite(k,m,l,p.data,g,h,!0);
else{for(var e=l-1,d=0,m=4*m,u=q=v=t=l=f=c=void 0;d<e;){q=d*m;u=e*m;for(c=0;c<m;c+=4)f=k[q+c],l=k[q+c+1],t=k[q+c+2],v=k[q+c+3],k[q+c]=k[u+c],k[q+c+1]=k[u+c+1],k[q+c+2]=k[u+c+2],k[q+c+3]=k[u+c+3],k[u+c]=f,k[u+c+1]=l,k[u+c+2]=t,k[u+c+3]=v;d++;e--}m=p.data;e=k.length;for(d=0;d<e;d++)m[d]=k[d]}n.putImageData(p,0,0);n=L[a.format?a.format.toLowerCase():"png"];k=1;void 0!==a.quality&&(k=a.quality/100);a=b.toDataURL(n,k);return E.resolve({dataURL:a,x:0,y:0,width:g,height:h})};f.prototype.prepareChildrenRenderParameters=
function(a){if(!this.attached||!this._renderingContext)return null;var b=this._renderingContext,e=b.gl;b.setDepthWriteEnabled(!0);b.setStencilWriteMask(255);b.setClearColor(0,0,0,0);b.setClearDepth(1);b.setClearStencil(0);b.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT|e.STENCIL_BUFFER_BIT);b.setViewport(0,0,this.element.width,this.element.height);b.setDepthWriteEnabled(!1);a.context=b;return a};f.prototype.attachChild=function(a,b){return a.attach(b)};f.prototype.detachChild=function(a,b){return a.detach(b)};
f.prototype.renderChild=function(a,b){return a.render(b)};f.prototype._resizeCanvas=function(a){var b=this.element,e=b.style,d=a.state,c=a.devicePixelRatio;a=d.width*c;c*=d.height;if(b.width!==a||b.height!==c)b.width=a,b.height=c,e.width=d.width+"px",e.height=d.height+"px"};f.prototype._initializeClipRenderer=function(a){if(this._clipRendererInitialized)return!0;this._blitRenderer=new C;var b={a_pos:0},e=new J(a,z.stencilVS,z.stencilFS,b);if(!e)return!1;var d=y.createVertex(a,35040,32),c=new Uint16Array([0,
1,2,2,1,3]),c=y.createIndex(a,35044,c);a=new K(a,b,{geometry:[{name:"a_pos",count:2,type:5126,offset:0,stride:8,normalized:!1,divisor:0}]},{geometry:d},c);this._clipStencilProgram=e;this._clipVBO=d;this._clipVAO=a;return this._clipRendererInitialized=!0};return f}(G)});