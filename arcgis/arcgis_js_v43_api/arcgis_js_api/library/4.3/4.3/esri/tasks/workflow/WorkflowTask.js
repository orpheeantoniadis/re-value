// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define("dojo/_base/lang ../../request ../../Color ./WMBaseTask ./support/Enum ./support/Util".split(" "),function(d,g,h,l,m,n){var e=new m,f=new n;return l.createSubclass({declaredClass:"esri.tasks.workflow.WorkflowTask",properties:{url:{}},getWorkflowImageUrl:function(a){var b=(new Date).getTime();a=this.parsedUrl.path+"/jobs/"+a+"/workflow?f\x3dimage\x26ts\x3d"+b;if(this.requestOptions&&this.requestOptions.query){var c=this.requestOptions.query;(b=Object.keys(c).map(function(a){return a+"\x3d"+
c[a]}).join("\x26"))&&(a+="\x26"+b)}return a},getWorkflowDisplayDetails:function(a,b){a=this.parsedUrl.path+"/jobs/"+a+"/workflow";var c=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return g(a,b).then(function(a){a=a.data.workflow;for(var b=0;b<a.paths.length;b++)a.paths[b].labelColor=h.fromJSON(a.paths[b].labelColor),a.paths[b].lineColor=h.fromJSON(a.paths[b].lineColor);for(b=0;b<a.steps.length;b++)a.steps[b].stepType=e.stepExecutionTypeJsonDict.fromJSON(a.steps[b].stepType),
a.steps[b].shape=e.stepIndicatorTypeJsonDict.fromJSON(a.steps[b].shape),a.steps[b].fillColor=h.fromJSON(a.steps[b].fillColor),a.steps[b].labelColor=h.fromJSON(a.steps[b].labelColor),a.steps[b].outlineColor=h.fromJSON(a.steps[b].outlineColor);for(b=0;b<a.annotations.length;b++)a.annotations[b].fillColor=h.fromJSON(a.annotations[b].fillColor),a.annotations[b].outlineColor=h.fromJSON(a.annotations[b].outlineColor),a.annotations[b].labelColor=h.fromJSON(a.annotations[b].labelColor);return a})},getAllSteps:function(a,
b){var c=d.hitch(this);a=this.parsedUrl.path+"/jobs/"+a+"/workflow/steps";var k=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(k,b);return g(a,b).then(function(a){return c._formatStepsResponse(a.data.steps)})},getCurrentSteps:function(a,b){var c=d.hitch(this);a=this.parsedUrl.path+"/jobs/"+a+"/workflow/steps/current";var k=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(k,b);return g(a,b).then(function(a){return c._formatStepsResponse(a.data.steps)})},
getStep:function(a,b){var c=d.hitch(this);a=this.parsedUrl.path+"/jobs/"+a.jobId+"/workflow/steps/"+a.stepId;var k=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(k,b);return g(a,b).then(function(a){return c._formatStepsResponse([a.data])[0]})},getStepDescription:function(a,b){a=this.parsedUrl.path+"/jobs/"+a.jobId+"/workflow/steps/"+a.stepId+"/description";var c=this._encode(d.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return g(a,b).then(function(a){return a.data.stepDescription})},
getStepFileUrl:function(a){a=this.parsedUrl.path+"/jobs/"+a.jobId+"/workflow/steps/"+a.stepId+"/file";if(this.requestOptions&&this.requestOptions.query){var b=this.requestOptions.query,c=Object.keys(b).map(function(a){return a+"\x3d"+b[a]}).join("\x26");c&&(a+="?"+c)}return a},canRunStep:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/workflow/steps/"+a.stepId+"/canRun";a={user:f._formatDomainUsername(a.user),f:"json"};a=this._encode(d.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,
b);return g(c,b).then(function(a){return e.stepRunnableStatusJsonDict.fromJSON(a.data.canRun)})},executeSteps:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/workflow/steps/execute",k={steps:f._convertIdsToString(a.stepIds),user:f._formatDomainUsername(a.user),f:"json"};a.auto&&(k.auto=a.true);a=this._encode(d.mixin({},this.parsedUrl.query,k));b=this._generateOptions(a,b);return g(c,b).then(function(a){a=a.data.executeInfo;for(var b=0;b<a.length;b++)a[b].executionResult=e.stepExecutionResultJsonDict.fromJSON(a[b].executionResult);
return a})},markStepsAsDone:function(a,b){var c=this.parsedUrl.path+"/jobs/"+a.jobId+"/workflow/steps/markAsDone";a={steps:f._convertIdsToString(a.stepIds),user:f._formatDomainUsername(a.user),f:"json"};a=this._encode(d.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return g(c,b).then(function(a){a=a.data.executeInfo;for(var b=0;b<a.length;b++)a[b].executionResult=e.stepExecutionResultJsonDict.fromJSON(a[b].executionResult);return a})},moveToNextStep:function(a,b){var c={user:f._formatDomainUsername(a.user)};
a.returnCode&&(c.returnCode=a.returnCode);return this._sendRequest(c,"/jobs/"+a.jobId+"/workflow/steps/"+a.stepId+"/moveNext",b)},resolveConflict:function(a,b){var c={optionReturnCode:a.optionReturnCode,optionSteps:a.optionStepIds.toString(),user:f._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/workflow/steps/"+a.stepId+"/resolveConflict",b)},setCurrentStep:function(a,b){var c={user:f._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/workflow/steps/"+
a.stepId+"/setAsCurrent",b)},recreateWorkflow:function(a,b){var c={user:f._formatDomainUsername(a.user)};return this._sendRequest(c,"/jobs/"+a.jobId+"/workflow/recreate",b)},_formatStepsResponse:function(a){for(var b=0;b<a.length;b++)a[b].assignedType=e.jobAssignmentTypeJsonDict.fromJSON(a[b].assignedType),a[b].stepType.executionType=e.stepExecutionTypeJsonDict.fromJSON(a[b].stepType.executionType),a[b].stepType.stepDescriptionType=e.stepDescriptionTypeJsonDict.fromJSON(a[b].stepType.stepDescriptionType),
a[b].stepType.stepIndicatorType=e.stepIndicatorTypeJsonDict.fromJSON(a[b].stepType.stepIndicatorType),a[b].stepType.supportedPlatform=e.stepPlatformTypeJsonDict.fromJSON(a[b].stepType.supportedPlatform);return a}})});