// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/internal/highlight.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n5-tap gaussian blur with linear sampling\r\nThis technique requires linear filtering on source texture\r\nhttp://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightBlurL5"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform vec2 blurSize;\r\n\r\n  varying vec2 blurCoordinates[5];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n    uv \x3d $position.xy * .5 + vec2(.5); \r\n\r\n    blurCoordinates[0] \x3d uv;\r\n    blurCoordinates[1] \x3d uv + blurSize * 1.407333;\r\n    blurCoordinates[2] \x3d uv - blurSize * 1.407333;\r\n    blurCoordinates[3] \x3d uv + blurSize * 3.294215;\r\n    blurCoordinates[4] \x3d uv - blurSize * 3.294215;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightBlurL5"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n\r\n  varying vec2 blurCoordinates[5];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    vec4 sum \x3d vec4(0.0);\r\n    sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.204164;\r\n    sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.304005;\r\n    sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.304005;\r\n    sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.093913;\r\n    sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.093913;\r\n    gl_FragColor \x3d sum;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n7-tap gaussian blur with sigma\x3d1.5\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightBlurG7"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform vec2 blurSize;\r\n\r\n  varying vec2 blurCoordinates[7];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n    uv \x3d $position.xy * .5 + vec2(.5); \r\n\r\n    blurCoordinates[0] \x3d uv;\r\n    blurCoordinates[1] \x3d uv + blurSize * 1.0;\r\n    blurCoordinates[2] \x3d uv - blurSize * 1.0;\r\n    blurCoordinates[3] \x3d uv + blurSize * 2.0;\r\n    blurCoordinates[4] \x3d uv - blurSize * 2.0;\r\n    blurCoordinates[5] \x3d uv + blurSize * 3.0;\r\n    blurCoordinates[6] \x3d uv - blurSize * 3.0;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightBlurG7"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n\r\n  varying vec2 blurCoordinates[7];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    vec4 sum \x3d vec4(0.0);\r\n    sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.266346;\r\n    sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.215007;\r\n    sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.215007;\r\n    sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.113085;\r\n    sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.113085;\r\n    sum +\x3d texture2D(tex, blurCoordinates[5]) * 0.038735;\r\n    sum +\x3d texture2D(tex, blurCoordinates[6]) * 0.038735;\r\n    gl_FragColor \x3d sum;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n9-tap gaussian blur with sigma\x3d2.0\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightBlurG9"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform vec2 blurSize;\r\n\r\n  varying vec2 blurCoordinates[9];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n    uv \x3d $position.xy * .5 + vec2(.5); \r\n\r\n    blurCoordinates[0] \x3d uv;\r\n    blurCoordinates[1] \x3d uv + blurSize * 1.0;\r\n    blurCoordinates[2] \x3d uv - blurSize * 1.0;\r\n    blurCoordinates[3] \x3d uv + blurSize * 2.0;\r\n    blurCoordinates[4] \x3d uv - blurSize * 2.0;\r\n    blurCoordinates[5] \x3d uv + blurSize * 3.0;\r\n    blurCoordinates[6] \x3d uv - blurSize * 3.0;\r\n    blurCoordinates[7] \x3d uv + blurSize * 4.0;\r\n    blurCoordinates[8] \x3d uv - blurSize * 4.0;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightBlurG9"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n\r\n  varying vec2 blurCoordinates[9];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    vec4 sum \x3d vec4(0.0);\r\n    sum +\x3d texture2D(tex, blurCoordinates[0]) * 0.202360;\r\n    sum +\x3d texture2D(tex, blurCoordinates[1]) * 0.179044;\r\n    sum +\x3d texture2D(tex, blurCoordinates[2]) * 0.179044;\r\n    sum +\x3d texture2D(tex, blurCoordinates[3]) * 0.124009;\r\n    sum +\x3d texture2D(tex, blurCoordinates[4]) * 0.124009;\r\n    sum +\x3d texture2D(tex, blurCoordinates[5]) * 0.067234;\r\n    sum +\x3d texture2D(tex, blurCoordinates[6]) * 0.067234;\r\n    sum +\x3d texture2D(tex, blurCoordinates[7]) * 0.028532;\r\n    sum +\x3d texture2D(tex, blurCoordinates[8]) * 0.028532;\r\n    gl_FragColor \x3d sum;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n9-tap manhattan distance\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightBlurM9"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform vec2 blurSize;\r\n\r\n  varying vec2 blurCoordinates[9];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n    uv \x3d $position.xy * .5 + vec2(.5); \r\n\r\n    blurCoordinates[0] \x3d uv;\r\n    blurCoordinates[1] \x3d uv + blurSize * 1.0;\r\n    blurCoordinates[2] \x3d uv - blurSize * 1.0;\r\n    blurCoordinates[3] \x3d uv + blurSize * 2.0;\r\n    blurCoordinates[4] \x3d uv - blurSize * 2.0;\r\n    blurCoordinates[5] \x3d uv + blurSize * 3.0;\r\n    blurCoordinates[6] \x3d uv - blurSize * 3.0;\r\n    blurCoordinates[7] \x3d uv + blurSize * 4.0;\r\n    blurCoordinates[8] \x3d uv - blurSize * 4.0;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightBlurM9"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n\r\n  varying vec2 blurCoordinates[9];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    float f0 \x3d texture2D(tex, blurCoordinates[0]).x;\r\n    float f1 \x3d texture2D(tex, blurCoordinates[1]).x - 1.0 / 5.0;\r\n    float f2 \x3d texture2D(tex, blurCoordinates[2]).x - 1.0 / 5.0;\r\n    float f3 \x3d texture2D(tex, blurCoordinates[3]).x - 2.0 / 5.0;\r\n    float f4 \x3d texture2D(tex, blurCoordinates[4]).x - 2.0 / 5.0;\r\n    float f5 \x3d texture2D(tex, blurCoordinates[5]).x - 3.0 / 5.0;\r\n    float f6 \x3d texture2D(tex, blurCoordinates[6]).x - 3.0 / 5.0;\r\n    float f7 \x3d texture2D(tex, blurCoordinates[7]).x - 4.0 / 5.0;\r\n    float f8 \x3d texture2D(tex, blurCoordinates[8]).x - 4.0 / 5.0;\r\n\r\n    vec4 m1 \x3d max(vec4(f1,f2,f3,f4), vec4(f5,f6,f7,f8));\r\n    vec2 m2 \x3d max(m1.xy, m1.zw);\r\n    float m3 \x3d max(f0, max(m2.x, m2.y));\r\n    gl_FragColor \x3d vec4(m3, 0, 0, 0);\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n17-tap manhattan+diagonal distance\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightBlurM17"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform vec2 blurSize;\r\n\r\n  varying vec2 blurCoordinates[17];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n    uv \x3d $position.xy * .5 + vec2(.5); \r\n\r\n    vec2 blurSizeD \x3d vec2(blurSize.x * sign(blurSize.x + blurSize.y), blurSize.y * sign(blurSize.x - blurSize.y));\r\n\r\n    blurCoordinates[0] \x3d uv;\r\n    blurCoordinates[1] \x3d uv + blurSize * 1.0;\r\n    blurCoordinates[2] \x3d uv - blurSize * 1.0;\r\n    blurCoordinates[3] \x3d uv + blurSize * 2.0;\r\n    blurCoordinates[4] \x3d uv - blurSize * 2.0;\r\n    blurCoordinates[5] \x3d uv + blurSize * 3.0;\r\n    blurCoordinates[6] \x3d uv - blurSize * 3.0;\r\n    blurCoordinates[7] \x3d uv + blurSize * 4.0;\r\n    blurCoordinates[8] \x3d uv - blurSize * 4.0;\r\n\r\n    blurCoordinates[ 9] \x3d uv + blurSizeD * 1.0;\r\n    blurCoordinates[10] \x3d uv - blurSizeD * 1.0;\r\n    blurCoordinates[11] \x3d uv + blurSizeD * 2.0;\r\n    blurCoordinates[12] \x3d uv - blurSizeD * 2.0;\r\n    blurCoordinates[13] \x3d uv + blurSizeD * 3.0;\r\n    blurCoordinates[14] \x3d uv - blurSizeD * 3.0;\r\n    blurCoordinates[15] \x3d uv + blurSizeD * 4.0;\r\n    blurCoordinates[16] \x3d uv - blurSizeD * 4.0;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightBlurM17"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n\r\n  varying vec2 blurCoordinates[17];\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    float f0 \x3d texture2D(tex, blurCoordinates[0]).x;\r\n    float f1 \x3d texture2D(tex, blurCoordinates[1]).x - 1.0 / 5.0;\r\n    float f2 \x3d texture2D(tex, blurCoordinates[2]).x - 1.0 / 5.0;\r\n    float f3 \x3d texture2D(tex, blurCoordinates[3]).x - 2.0 / 5.0;\r\n    float f4 \x3d texture2D(tex, blurCoordinates[4]).x - 2.0 / 5.0;\r\n    float f5 \x3d texture2D(tex, blurCoordinates[5]).x - 3.0 / 5.0;\r\n    float f6 \x3d texture2D(tex, blurCoordinates[6]).x - 3.0 / 5.0;\r\n    float f7 \x3d texture2D(tex, blurCoordinates[7]).x - 4.0 / 5.0;\r\n    float f8 \x3d texture2D(tex, blurCoordinates[8]).x - 4.0 / 5.0;\r\n\r\n    float f9 \x3d texture2D(tex, blurCoordinates[ 9]).x - 1.0 * 1.41421356237 / 5.0;\r\n    float f10 \x3d texture2D(tex, blurCoordinates[10]).x - 1.0 * 1.41421356237 / 5.0;\r\n    float f11 \x3d texture2D(tex, blurCoordinates[11]).x - 2.0 * 1.41421356237 / 5.0;\r\n    float f12 \x3d texture2D(tex, blurCoordinates[12]).x - 2.0 * 1.41421356237 / 5.0;\r\n    float f13 \x3d texture2D(tex, blurCoordinates[13]).x - 3.0 * 1.41421356237 / 5.0;\r\n    float f14 \x3d texture2D(tex, blurCoordinates[14]).x - 3.0 * 1.41421356237 / 5.0;\r\n    float f15 \x3d texture2D(tex, blurCoordinates[15]).x - 4.0 * 1.41421356237 / 5.0;\r\n    float f16 \x3d texture2D(tex, blurCoordinates[16]).x - 4.0 * 1.41421356237 / 5.0;\r\n\r\n    vec4 m1 \x3d max(vec4(f1,f2,f3,f4), vec4(f5,f6,f7,f8));\r\n    vec4 m2 \x3d max(vec4(f9,f10,f11,f12), vec4(f13,f14,f15,f16));\r\n    vec4 m3 \x3d max(m1, m2);\r\n    vec2 m4 \x3d max(m3.xy, m3.zw);\r\n    float m6 \x3d max(f0, max(m4.x, m4.y));\r\n    gl_FragColor \x3d vec4(m6, 0, 0, 0);\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n(2N+1)^2-tap distance field\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightBlurDF"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform vec2 blurSize;\r\n\r\n  varying vec2 blurCoordinates;\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0);\r\n    uv \x3d $position.xy * .5 + vec2(.5);\r\n    blurCoordinates \x3d blurSize;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightBlurDF"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n\r\n  varying vec2 blurCoordinates;\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    float result \x3d 0.0;\r\n    for (float x\x3d-5.0; x\x3c\x3d5.0; ++x) {\r\n      for (float y\x3d-5.0; y\x3c\x3d5.0; ++y) {\r\n        vec2 duv \x3d vec2(x, y);\r\n        vec2 uv2 \x3d uv + duv * blurCoordinates;\r\n        result \x3d max(result, texture2D(tex, uv2).x - length(duv) / 5.0);\r\n      }\r\n    }\r\n    gl_FragColor \x3d vec4(result, 0, 0, 0);\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c!--\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\nMerging blurred halos with source image\r\n\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\r\n--\x3e\r\n\x3csnippet name\x3d"vsHighlightApply"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  attribute vec3 $position;\r\n\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    gl_Position \x3d vec4($position.x, $position.y, .0, 1.0); \r\n    uv \x3d $position.xy * .5 + vec2(.5); \r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsHighlightApply"\x3e\x3c![CDATA[\r\n\r\n  precision mediump float;\r\n\r\n  uniform sampler2D tex;\r\n  uniform sampler2D origin;\r\n\r\n  uniform vec4 color;\r\n  uniform float exponent;\r\n  uniform float fill;\r\n\r\n  varying vec2 uv;\r\n\r\n  void main()\r\n  {\r\n    // Read the highlight intensity from the blurred highlight image\r\n    float highlight \x3d texture2D(tex, uv).x;\r\n\r\n    // Discard all pixels which are not affected by highlight\r\n    if (highlight \x3d\x3d 0.0) {\r\n      discard;\r\n    }\r\n\r\n    // Discard the interior of highlighted objects, so that only the halo remain\r\n    vec4 origin_color \x3d texture2D(origin, uv);\r\n    if (any(notEqual(origin_color,vec4(0,0,0,0)))) {\r\n      gl_FragColor \x3d vec4(color.xyz, fill);\r\n      return;\r\n    }\r\n\r\n    // Transfer function\r\n    // highlight \x3d pow(highlight, 0.5); // increase contrast, for gaussian blur\r\n    // highlight \x3d pow(highlight, 2.0); // decrease constrast, for manhattan distance\r\n    // highlight \x3d tanh(10*highlight); // test\r\n    highlight \x3d smoothstep(0.0, exponent, highlight);\r\n    // highlight \x3d pow(highlight, exponent);\r\n\r\n    // Blending equation: gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);\r\n    // I.e., color should not be premultiplied with alpha\r\n    gl_FragColor \x3d vec4(color.xyz, highlight);\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\r\n\x3c/snippets\x3e'}});
define("require exports ./Util ./gl-matrix dojo/text!../materials/internal/highlight.xml ../../../webgl/FramebufferObject ../../../webgl/Program ../../../webgl/VertexArrayObject ../../../webgl/BufferObject ../../../webgl/Util ../../../webgl/enums ./DefaultVertexBufferLayouts ./DefaultVertexAttributeLocations".split(" "),function(w,x,p,q,r,m,n,t,u,k,y,v,l){var f=q.vec4d;return function(){function c(b,c,d){this.blur1Fbo=this.blur0Fbo=this.quadVAO=null;this._rctx=d;this.viewportToRestore=f.create();
this.programRep=b;this.color=f.create();this.exponent=.3;this.fill=.1;f.set4(1,0,.5,1,this.color)}c.prototype.createQuadVAO=function(){var b=this._rctx,c=new Float32Array([-1,-1,1,-1,-1,1,1,1]);return new t(b,l.Default3D,{geometry:v.Pos2},{geometry:u.createVertex(b,35044,c)})};c.prototype.getIsSupported=function(){return!0};c.prototype.setEnableState=function(b){b?this.enable():this.disable()};c.prototype.getEnableState=function(){return null!==this.blur0Fbo};c.prototype.enable=function(){this.quadVAO=
this.createQuadVAO();var b={colorTarget:0,depthStencilTarget:0,width:0,height:0};this.blur0Fbo=m.create(this._rctx,b);this.blur1Fbo=m.create(this._rctx,b)};c.prototype.disable=function(){this.getEnableState()&&(this.quadVAO.dispose(!0),this.blur1Fbo.dispose(),this.blur0Fbo.dispose(),this.blur1Fbo=this.blur0Fbo=this.quadVAO=null)};c.prototype.getHighlightFBO=function(){return this.blur0Fbo};c.prototype.render=function(b,c,d){this.updateDebugData();var a=this._rctx;p.assert(this.getEnableState());f.set(b.fullViewport,
this.viewportToRestore);b=Math.ceil(d.width/2);var g=Math.ceil(d.height/2);this.blur0Fbo.resize(b,g);this.blur1Fbo.resize(b,g);var h=this.programRep.get("highlight-blur"),e=this.programRep.get("highlight-apply");a.bindVAO(this.quadVAO);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setBlendingEnabled(!1);a.bindFramebuffer(this.blur0Fbo);a.bindTexture(d.colorTexture,0);a.bindProgram(h);h.setUniform1i("tex",0);h.setUniform2f("blurSize",1/b,0);a.setViewport(0,0,b,g);a.drawArrays(5,0,k.vertexCount(this.quadVAO,
"geometry"));a.bindFramebuffer(this.blur1Fbo);this.blur0Fbo.colorTexture.setSamplingMode(9729);a.bindTexture(this.blur0Fbo.colorTexture,0);h.setUniform2f("blurSize",0,1/g);a.drawArrays(5,0,k.vertexCount(this.quadVAO,"geometry"));a.bindFramebuffer(c);a.setBlendingEnabled(!0);a.setBlendFunctionSeparate(770,771,1,771);a.setViewport(this.viewportToRestore[0],this.viewportToRestore[1],this.viewportToRestore[2],this.viewportToRestore[3]);a.bindProgram(e);e.setUniform1i("tex",0);this.blur1Fbo.colorTexture.setSamplingMode(9729);
a.bindTexture(this.blur1Fbo.colorTexture,0);e.setUniform1i("origin",1);e.setUniform4fv("color",this.color);e.setUniform1f("exponent",this.exponent);e.setUniform1f("fill",this.fill);a.bindTexture(d.colorTexture,1);a.drawArrays(5,0,k.vertexCount(this.quadVAO,"geometry"));a.bindVAO(null);a.setDepthWriteEnabled(!0);a.setDepthTestEnabled(!0);a.setBlendingEnabled(!1)};c.prototype.updateDebugData=function(){window.webglEngineHighlightColor?f.set(window.webglEngineHighlightColor,this.color):window.webglEngineHighlightColor=
[this.color[0],this.color[1],this.color[2],this.color[3]];void 0!==window.webglEngineHighlightExponent?this.exponent=window.webglEngineHighlightExponent:window.webglEngineHighlightExponent=this.exponent;void 0!==window.webglEngineHighlightFill?this.fill=window.webglEngineHighlightFill:window.webglEngineHighlightFill=this.fill};c.loadShaders=function(b,c,d,a){b._parse(r);c=new n(a,b.vsHighlightBlurG9,b.fsHighlightBlurG9,l.Default3D);b=new n(a,b.vsHighlightApply,b.fsHighlightApply,l.Default3D);d.add("highlight-blur",
c);d.add("highlight-apply",b)};return c}()});