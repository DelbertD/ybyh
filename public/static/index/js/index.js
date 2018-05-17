var revapi26_param = {
	hideTimerBar: "on",
	simplifyAll: "on",
	dottedOverlay: "none",
	delay: 9000,
	startwidth: 1903,
	startheight: 800,
	hideThumbs: 0,

	thumbWidth: 100,
	thumbHeight: 50,
	thumbAmount: 2,

	navigationType: "bullet",
	navigationArrows: "solo",
	navigationStyle: "round",
	touchenabled: "on",
	onHoverStop: "on",

	navigationHAlign: "center",
	navigationVAlign: "bottom",
	navigationHOffset: 0,
	navigationVOffset: 20,

	soloArrowLeftHalign: "left",
	soloArrowLeftValign: "center",
	soloArrowLeftHOffset: 20,
	soloArrowLeftVOffset: 0,

	soloArrowRightHalign: "right",
	soloArrowRightValign: "center",
	soloArrowRightHOffset: 20,
	soloArrowRightVOffset: 0,

	navigation_arrows_style: 'new1',

	shadow: 0,
	fullWidth: "on",
	fullScreen: "off",

	stopLoop: "off",
	stopAfterLoops: -1,
	stopAtSlide: -1,

	shuffle: "off",

	autoHeight: "on",
	forceFullWidth: "off",

	hideThumbsOnMobile: "off",
	hideBulletsOnMobile: "off",
	hideArrowsOnMobile: "off",
	hideThumbsUnderResolution: 0,

	hideSliderAtLimit: 0,
	hideCaptionAtLimit: 0,
	hideAllCaptionAtLilmit: 0,
	startWithSlide: 0,
	videoJsPath: "http://5a4ed3e611bcf.t73.qifeiye.com/qfy-content/plugins/revslider/rs-plugin/videojs/",
	fullScreenOffsetContainer: ""
}
var tpj = jQuery;
tpj.noConflict();
var revapi26;

function run_revApi() {
	if(tpj('#rev_slider_26_1').revolution == undefined)
		revslider_showDoubleJqueryError('#rev_slider_26_1');
	else {

		revapi26 = tpj('#rev_slider_26_1').show().revolution(revapi26_param);
	}
}
tpj(document).ready(function() {
	if("off" == "on" && top != self) {
		setTimeout("run_revApi()", 300);
	} else {
		run_revApi();
	}

}); //ready
var iphormL10n = {
	"error_submitting_form": "\u5728\u63d0\u4ea4\u8868\u5355\u65f6\u6709\u9519\u8bef",
	"swfupload_flash_url": "http:\/\/5a4ed3e611bcf.t73.qifeiye.com\/qfy-includes\/js\/swfupload\/swfupload.swf",
	"swfupload_upload_url": "http:\/\/5a4ed3e611bcf.t73.qifeiye.com\/?iphorm_swfupload=1",
	"swfupload_too_many": "\u961f\u5217\u4e2d\u7684\u6587\u4ef6\u592a\u591a\u4e86",
	"swfupload_file_too_big": "\u6587\u4ef6\u592a\u5927\u4e86",
	"swfupload_file_empty": "\u4e0d\u80fd\u4e0a\u4f20\u7a7a\u6587\u4ef6",
	"swfupload_file_type_not_allowed": "\u8be5\u6587\u4ef6\u7684\u7c7b\u578b\u662f\u4e0d\u5141\u8bb8\u4e0a\u4f20\u7684",
	"swfupload_unknown_queue_error": "\u672a\u77e5\u961f\u5217\u9519\u8bef\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5",
	"swfupload_upload_error": "\u4e0a\u4f20\u9519\u8bef",
	"swfupload_upload_failed": "\u4e0a\u4f20\u5931\u8d25",
	"swfupload_server_io": "\u670d\u52a1\u5668IO\u9519\u8bef",
	"swfupload_security_error": "\u5b89\u5168\u9519\u8bef",
	"swfupload_limit_exceeded": "\u4e0a\u4f20\u8d85\u8fc7\u9650\u5236",
	"swfupload_validation_failed": "\u9a8c\u8bc1\u5931\u8d25",
	"swfupload_upload_stopped": "\u4e0a\u4f20\u88ab\u7ec8\u6b62",
	"swfupload_unknown_upload_error": "\u6587\u4ef6\u4e0a\u4f20\u88ab\u610f\u5916\u7ec8\u6b62",
	"plugin_url": "http:\/\/5a4ed3e611bcf.t73.qifeiye.com\/qfy-content\/plugins\/qfy_form",
	"preview_no_submit": "\u5728\u9884\u89c8\u6a21\u5f0f\u4e0b\u4e0d\u80fd\u63d0\u4ea4\u8868\u5355",
	"iphorm_required": "\u8fd9\u662f\u4e00\u4e2a\u5fc5\u586b\u9879\u54e6"
};




