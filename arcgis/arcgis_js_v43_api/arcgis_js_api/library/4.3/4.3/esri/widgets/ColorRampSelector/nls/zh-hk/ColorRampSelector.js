// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.3/esri/copyright.txt for details.
//>>built
define({colorRamps:{none:"\u7121",blackToWhite_predefined:"\u9ed1\u8272\u5230\u767d\u8272",yellowToRed_predefined:"\u9ec3\u8272\u5230\u7d05\u8272",slope_predefined:"\u5761\u5ea6",aspect_predefined:"\u90e8\u4efd",errors_predefined:"\u932f\u8aa4",heatmap1_predefined:"\u71b1\u9ede\u5716 #1",elevation1_predefined:"\u9ad8\u7a0b #1",elevation2_predefined:"\u9ad8\u7a0b #2",blueBright_predefined:"\u4eae\u85cd\u8272",blueLightToDark_predefined:"\u6dfa\u5230\u6df1\u85cd\u8272",blueGreenBright_predefined:"\u4eae\u85cd\u7da0\u8272",
blueGreenLightToDark_predefined:"\u6dfa\u5230\u6df1\u85cd\u7da0\u8272",brownLightToDark_predefined:"\u6dfa\u5230\u6df1\u68d5\u8272",brownToBlueGreenDivergingBright_predefined:"\u68d5\u8272\u5230\u85cd\u7da0\u8272\u6f38\u5c64\uff0c\u6dfa\u8272",brownToBlueGreenDivergingDark_predefined:"\u68d5\u8272\u5230\u85cd\u7da0\u8272\u6f38\u5c64\uff0c\u6df1\u8272",coefficientBias_predefined:"\u4fc2\u6578\u504f\u5dee",coldToHotDiverging_predefined:"\u51b7\u5230\u71b1\u96e2\u6563",conditionNumber_predefined:"\u72c0\u6cc1\u865f\u78bc",
cyanToPurple_predefined:"\u9752\u8272\u5230\u7d2b\u8272",cyanLightToBlueDark_predefined:"\u6dfa\u9752\u8272\u5230\u6df1\u85cd\u8272",distance_predefined:"\u8ddd\u96e2",grayLightToDark_predefined:"\u6dfa\u5230\u6df1\u7070\u8272",greenBright_predefined:"\u4eae\u7da0\u8272",greenLightToDark_predefined:"\u6dfa\u5230\u6df1\u7da0\u8272",greenToBlue_predefined:"\u7da0\u8272\u5230\u85cd\u8272",orangeBright_predefined:"\u4eae\u6a58\u8272",orangeLightToDark_predefined:"\u6dfa\u5230\u6df1\u6a58\u8272",partialSpectrum_predefined:"\u90e8\u5206\u8272\u8b5c",
partialSpectrum1Diverging_predefined:"\u90e8\u5206\u8272\u8b5c 1 \u6f38\u5c64",partialSpectrum2Diverging_predefined:"\u90e8\u5206\u8272\u8b5c 2 \u6f38\u5c64",pinkToYellowGreenDivergingBright_predefined:"\u7c89\u7d05\u8272\u5230\u9ec3\u7da0\u8272\u6f38\u5c64\uff0c\u4eae\u8272",pinkToYellowGreenDivergingDark_predefined:"\u7c89\u7d05\u8272\u5230\u9ec3\u7da0\u8272\u6f38\u5c64\uff0c\u6df1\u8272",precipitation_predefined:"\u964d\u96e8",prediction_predefined:"\u9810\u6e2c",purpleBright_predefined:"\u4eae\u7d2b\u8272",
purpleToGreenDivergingBright_predefined:"\u7d2b\u8272\u5230\u7da0\u8272\u6f38\u5c64\uff0c\u4eae\u8272",purpleToGreenDivergingDark_predefined:"\u7d2b\u8272\u5230\u7da0\u8272\u6f38\u5c64\uff0c\u6df1\u8272",purpleBlueBright_predefined:"\u4eae\u7d2b\u85cd\u8272",purpleBlueLightToDark_predefined:"\u6dfa\u7d2b\u85cd\u8272\u5230\u6df1\u8272",purpleRedBright_predefined:"\u4eae\u7d2b\u7d05\u8272",purpleRedLightToDark_predefined:"\u6dfa\u7d2b\u7d05\u8272\u5230\u6df1\u8272",redBright_predefined:"\u4eae\u7d05\u8272",
redLightToDark_predefined:"\u6dfa\u7d05\u8272\u5230\u6df1\u8272",redToBlueDivergingBright_predefined:"\u7d05\u8272\u5230\u85cd\u8272\u6f38\u5c64\uff0c\u4eae\u8272",redToBlueDivergingDark_predefined:"\u7d05\u8272\u5230\u85cd\u8272\u6f38\u5c64\uff0c\u6df1\u8272",redToGreen_predefined:"\u7d05\u5230\u7da0",redToGreenDivergingBright_predefined:"\u7d05\u8272\u5230\u7da0\u8272\u6f38\u5c64\uff0c\u4eae\u8272",redToGreenDivergingDark_predefined:"\u7d05\u8272\u5230\u7da0\u8272\u6f38\u5c64\uff0c\u6df1\u8272",
spectrumFullBright_predefined:"\u5168\u8272\u8b5c\u4eae\u8272",spectrumFullDark_predefined:"\u5168\u8272\u8b5c\u6df1\u8272",spectrumFullLight_predefined:"\u5168\u8272\u8b5c\u6dfa\u8272",surface_predefined:"\u8868\u9762\u5206\u6790",temperature_predefined:"\u6eab\u5ea6",whiteToBlack_predefined:"\u767d\u8272\u5230\u9ed1\u8272",yellowToDarkRed_predefined:"\u9ec3\u8272\u5230\u6df1\u7d05\u8272",yellowToGreenToDarkBlue_predefined:"\u9ec3\u8272\u5230\u7da0\u8272\u5230\u6df1\u85cd\u8272",yellowGreenBright_predefined:"\u4eae\u9ec3\u7da0\u8272",
yellowGreenLightToDark_predefined:"\u6dfa\u5230\u6df1\u9ec3\u7da0\u8272"}});