var App=function(){var t,e=!1,a=!1,o=!1,n=!1,i=[],l="../assets/",r="global/img/",s="global/plugins/",c="global/css/",d={blue:"#89C4F4",red:"#F3565D",green:"#1bbc9b",purple:"#9b59b6",grey:"#95a5a6",yellow:"#F8CB00"},p=function(){"rtl"===$("body").css("direction")&&(e=!0),a=!!navigator.userAgent.match(/MSIE 8.0/),o=!!navigator.userAgent.match(/MSIE 9.0/),n=!!navigator.userAgent.match(/MSIE 10.0/),n&&$("html").addClass("ie10"),(n||o||a)&&$("html").addClass("ie")},h=function(){for(var t=0;t<i.length;t++){var e=i[t];e.call()}},u=function(){var t,e=$(window).width();if(a){var o;$(window).resize(function(){o!=document.documentElement.clientHeight&&(t&&clearTimeout(t),t=setTimeout(function(){h()},50),o=document.documentElement.clientHeight)})}else $(window).resize(function(){$(window).width()!=e&&(e=$(window).width(),t&&clearTimeout(t),t=setTimeout(function(){h()},50))})},f=function(){$("body").on("click",".portlet > .portlet-title > .tools > a.remove",function(t){t.preventDefault();var e=$(this).closest(".portlet");$("body").hasClass("page-portlet-fullscreen")&&$("body").removeClass("page-portlet-fullscreen"),e.find(".portlet-title .fullscreen").tooltip("destroy"),e.find(".portlet-title > .tools > .reload").tooltip("destroy"),e.find(".portlet-title > .tools > .remove").tooltip("destroy"),e.find(".portlet-title > .tools > .config").tooltip("destroy"),e.find(".portlet-title > .tools > .collapse, .portlet > .portlet-title > .tools > .expand").tooltip("destroy"),e.remove()}),$("body").on("click",".portlet > .portlet-title .fullscreen",function(t){t.preventDefault();var e=$(this).closest(".portlet");if(e.hasClass("portlet-fullscreen"))$(this).removeClass("on"),e.removeClass("portlet-fullscreen"),$("body").removeClass("page-portlet-fullscreen"),e.children(".portlet-body").css("height","auto");else{var a=App.getViewPort().height-e.children(".portlet-title").outerHeight()-parseInt(e.children(".portlet-body").css("padding-top"))-parseInt(e.children(".portlet-body").css("padding-bottom"));$(this).addClass("on"),e.addClass("portlet-fullscreen"),$("body").addClass("page-portlet-fullscreen"),e.children(".portlet-body").css("height",a)}}),$("body").on("click",".portlet > .portlet-title > .tools > a.reload",function(t){t.preventDefault();var e=$(this).closest(".portlet").children(".portlet-body"),a=$(this).attr("data-url"),o=$(this).attr("data-error-display");a?(App.blockUI({target:e,animate:!0,overlayColor:"none"}),$.ajax({type:"GET",cache:!1,url:a,dataType:"html",success:function(t){App.unblockUI(e),e.html(t),App.initAjax()},error:function(t,a,n){App.unblockUI(e);var i="Error on reloading the content. Please check your connection and try again.";"toastr"==o&&toastr?toastr.error(i):"notific8"==o&&$.notific8?($.notific8("zindex",11500),$.notific8(i,{theme:"ruby",life:3e3})):alert(i)}})):(App.blockUI({target:e,animate:!0,overlayColor:"none"}),window.setTimeout(function(){App.unblockUI(e)},1e3))}),$('.portlet .portlet-title a.reload[data-load="true"]').click(),$("body").on("click",".portlet > .portlet-title > .tools > .collapse, .portlet .portlet-title > .tools > .expand",function(t){t.preventDefault();var e=$(this).closest(".portlet").children(".portlet-body");$(this).hasClass("collapse")?($(this).removeClass("collapse").addClass("expand"),e.slideUp(200)):($(this).removeClass("expand").addClass("collapse"),e.slideDown(200))})},b=function(){if($("body").on("click",".md-checkbox > label, .md-radio > label",function(){var t=$(this),e=$(this).children("span:first-child");e.addClass("inc");var a=e.clone(!0);e.before(a),$("."+e.attr("class")+":last",t).remove()}),$("body").hasClass("page-md")){var t,e,a,o,n;$("body").on("click","a.btn, button.btn, input.btn, label.btn",function(i){t=$(this),0==t.find(".md-click-circle").length&&t.prepend("<span class='md-click-circle'></span>"),e=t.find(".md-click-circle"),e.removeClass("md-click-animate"),e.height()||e.width()||(a=Math.max(t.outerWidth(),t.outerHeight()),e.css({height:a,width:a})),o=i.pageX-t.offset().left-e.width()/2,n=i.pageY-t.offset().top-e.height()/2,e.css({top:n+"px",left:o+"px"}).addClass("md-click-animate"),setTimeout(function(){e.remove()},1e3)})}var i=function(t){""!=t.val()?t.addClass("edited"):t.removeClass("edited")};$("body").on("keydown",".form-md-floating-label .form-control",function(t){i($(this))}),$("body").on("blur",".form-md-floating-label .form-control",function(t){i($(this))}),$(".form-md-floating-label .form-control").each(function(){$(this).val().length>0&&$(this).addClass("edited")})},g=function(){$().iCheck&&$(".icheck").each(function(){var t=$(this).attr("data-checkbox")?$(this).attr("data-checkbox"):"icheckbox_minimal-grey",e=$(this).attr("data-radio")?$(this).attr("data-radio"):"iradio_minimal-grey";t.indexOf("_line")>-1||e.indexOf("_line")>-1?$(this).iCheck({checkboxClass:t,radioClass:e,insert:'<div class="icheck_line-icon"></div>'+$(this).attr("data-label")}):$(this).iCheck({checkboxClass:t,radioClass:e})})},m=function(){$().bootstrapSwitch&&$(".make-switch").bootstrapSwitch()},v=function(){$().confirmation&&$("[data-toggle=confirmation]").confirmation({btnOkClass:"btn btn-sm btn-success",btnCancelClass:"btn btn-sm btn-danger"})},y=function(){$("body").on("shown.bs.collapse",".accordion.scrollable",function(t){App.scrollTo($(t.target))})},x=function(){if(encodeURI(location.hash)){var t=encodeURI(location.hash.substr(1));$('a[href="#'+t+'"]').parents(".tab-pane:hidden").each(function(){var t=$(this).attr("id");$('a[href="#'+t+'"]').click()}),$('a[href="#'+t+'"]').click()}$().tabdrop&&$(".tabbable-tabdrop .nav-pills, .tabbable-tabdrop .nav-tabs").tabdrop({text:'<i class="fa fa-ellipsis-v"></i>&nbsp;<i class="fa fa-angle-down"></i>'})},k=function(){$("body").on("hide.bs.modal",function(){$(".modal:visible").size()>1&&$("html").hasClass("modal-open")===!1?$("html").addClass("modal-open"):$(".modal:visible").size()<=1&&$("html").removeClass("modal-open")}),$("body").on("show.bs.modal",".modal",function(){$(this).hasClass("modal-scroll")&&$("body").addClass("modal-open-noscroll")}),$("body").on("hidden.bs.modal",".modal",function(){$("body").removeClass("modal-open-noscroll")}),$("body").on("hidden.bs.modal",".modal:not(.modal-cached)",function(){$(this).removeData("bs.modal")})},C=function(){$(".tooltips").tooltip(),$(".portlet > .portlet-title .fullscreen").tooltip({trigger:"hover",container:"body",title:"Fullscreen"}),$(".portlet > .portlet-title > .tools > .reload").tooltip({trigger:"hover",container:"body",title:"Reload"}),$(".portlet > .portlet-title > .tools > .remove").tooltip({trigger:"hover",container:"body",title:"Remove"}),$(".portlet > .portlet-title > .tools > .config").tooltip({trigger:"hover",container:"body",title:"Settings"}),$(".portlet > .portlet-title > .tools > .collapse, .portlet > .portlet-title > .tools > .expand").tooltip({trigger:"hover",container:"body",title:"Collapse/Expand"})},w=function(){$("body").on("click",".dropdown-menu.hold-on-click",function(t){t.stopPropagation()})},A=function(){$("body").on("click",'[data-close="alert"]',function(t){$(this).parent(".alert").hide(),$(this).closest(".note").hide(),t.preventDefault()}),$("body").on("click",'[data-close="note"]',function(t){$(this).closest(".note").hide(),t.preventDefault()}),$("body").on("click",'[data-remove="note"]',function(t){$(this).closest(".note").remove(),t.preventDefault()})},S=function(){"function"==typeof autosize&&autosize(document.querySelectorAll("textarea.autosizeme"))},T=function(){$(".popovers").popover(),$(document).on("click.bs.popover.data-api",function(e){t&&t.popover("hide")})},I=function(){App.initSlimScroll(".scroller")},P=function(){jQuery.fancybox&&$(".fancybox-button").size()>0&&$(".fancybox-button").fancybox({groupAttr:"data-rel",prevEffect:"none",nextEffect:"none",closeBtn:!0,helpers:{title:{type:"inside"}}})},z=function(){$().counterUp&&$("[data-counter='counterup']").counterUp({delay:10,time:1e3})},E=function(){(a||o)&&$("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function(){var t=$(this);""===t.val()&&""!==t.attr("placeholder")&&t.addClass("placeholder").val(t.attr("placeholder")),t.focus(function(){t.val()==t.attr("placeholder")&&t.val("")}),t.blur(function(){""!==t.val()&&t.val()!=t.attr("placeholder")||t.val(t.attr("placeholder"))})})},D=function(){$().select2&&($.fn.select2.defaults.set("theme","bootstrap"),$(".select2me").select2({placeholder:"Select",width:"auto",allowClear:!0}))},U=function(){$("[data-auto-height]").each(function(){var t=$(this),e=$("[data-height]",t),a=0,o=t.attr("data-mode"),n=parseInt(t.attr("data-offset")?t.attr("data-offset"):0);e.each(function(){"height"==$(this).attr("data-height")?$(this).css("height",""):$(this).css("min-height","");var t="base-height"==o?$(this).outerHeight():$(this).outerHeight(!0);t>a&&(a=t)}),a+=n,e.each(function(){"height"==$(this).attr("data-height")?$(this).css("height",a):$(this).css("min-height",a)}),t.attr("data-related")&&$(t.attr("data-related")).css("height",t.height())})};return{init:function(){p(),u(),b(),g(),m(),I(),P(),D(),f(),A(),w(),x(),C(),T(),y(),k(),v(),S(),z(),this.addResizeHandler(U),E()},initAjax:function(){g(),m(),I(),D(),P(),w(),C(),T(),y(),v()},initComponents:function(){this.initAjax()},setLastPopedPopover:function(e){t=e},addResizeHandler:function(t){i.push(t)},runResizeHandlers:function(){h()},scrollTo:function(t,e){var a=t&&t.size()>0?t.offset().top:0;t&&($("body").hasClass("page-header-fixed")?a-=$(".page-header").height():$("body").hasClass("page-header-top-fixed")?a-=$(".page-header-top").height():$("body").hasClass("page-header-menu-fixed")&&(a-=$(".page-header-menu").height()),a+=e?e:-1*t.height()),$("html,body").animate({scrollTop:a},"slow")},initSlimScroll:function(t){$().slimScroll&&$(t).each(function(){if(!$(this).attr("data-initialized")){var t;t=$(this).attr("data-height")?$(this).attr("data-height"):$(this).css("height"),$(this).slimScroll({allowPageScroll:!0,size:"7px",color:$(this).attr("data-handle-color")?$(this).attr("data-handle-color"):"#bbb",wrapperClass:$(this).attr("data-wrapper-class")?$(this).attr("data-wrapper-class"):"slimScrollDiv",railColor:$(this).attr("data-rail-color")?$(this).attr("data-rail-color"):"#eaeaea",position:e?"left":"right",height:t,alwaysVisible:"1"==$(this).attr("data-always-visible"),railVisible:"1"==$(this).attr("data-rail-visible"),disableFadeOut:!0}),$(this).attr("data-initialized","1")}})},destroySlimScroll:function(t){$().slimScroll&&$(t).each(function(){if("1"===$(this).attr("data-initialized")){$(this).removeAttr("data-initialized"),$(this).removeAttr("style");var t={};$(this).attr("data-handle-color")&&(t["data-handle-color"]=$(this).attr("data-handle-color")),$(this).attr("data-wrapper-class")&&(t["data-wrapper-class"]=$(this).attr("data-wrapper-class")),$(this).attr("data-rail-color")&&(t["data-rail-color"]=$(this).attr("data-rail-color")),$(this).attr("data-always-visible")&&(t["data-always-visible"]=$(this).attr("data-always-visible")),$(this).attr("data-rail-visible")&&(t["data-rail-visible"]=$(this).attr("data-rail-visible")),$(this).slimScroll({wrapperClass:$(this).attr("data-wrapper-class")?$(this).attr("data-wrapper-class"):"slimScrollDiv",destroy:!0});var e=$(this);$.each(t,function(t,a){e.attr(t,a)})}})},scrollTop:function(){App.scrollTo()},blockUI:function(t){t=$.extend(!0,{},t);var e="";if(e=t.animate?'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><div class="block-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div>':t.iconOnly?'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><img src="'+this.getGlobalImgPath()+'loading-spinner-grey.gif" align=""></div>':t.textOnly?'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><span>&nbsp;&nbsp;'+(t.message?t.message:"LOADING...")+"</span></div>":'<div class="loading-message '+(t.boxed?"loading-message-boxed":"")+'"><img src="'+this.getGlobalImgPath()+'loading-spinner-grey.gif" align=""><span>&nbsp;&nbsp;'+(t.message?t.message:"LOADING...")+"</span></div>",t.target){var a=$(t.target);a.height()<=$(window).height()&&(t.cenrerY=!0),a.block({message:e,baseZ:t.zIndex?t.zIndex:1e3,centerY:void 0!==t.cenrerY&&t.cenrerY,css:{top:"10%",border:"0",padding:"0",backgroundColor:"none"},overlayCSS:{backgroundColor:t.overlayColor?t.overlayColor:"#555",opacity:t.boxed?.05:.1,cursor:"wait"}})}else $.blockUI({message:e,baseZ:t.zIndex?t.zIndex:1e3,css:{border:"0",padding:"0",backgroundColor:"none"},overlayCSS:{backgroundColor:t.overlayColor?t.overlayColor:"#555",opacity:t.boxed?.05:.1,cursor:"wait"}})},unblockUI:function(t){t?$(t).unblock({onUnblock:function(){$(t).css("position",""),$(t).css("zoom","")}}):$.unblockUI()},startPageLoading:function(t){t&&t.animate?($(".page-spinner-bar").remove(),$("body").append('<div class="page-spinner-bar"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>')):($(".page-loading").remove(),$("body").append('<div class="page-loading"><img src="'+this.getGlobalImgPath()+'loading-spinner-grey.gif"/>&nbsp;&nbsp;<span>'+(t&&t.message?t.message:"Loading...")+"</span></div>"))},stopPageLoading:function(){$(".page-loading, .page-spinner-bar").remove()},alert:function(t){t=$.extend(!0,{container:"",place:"append",type:"success",message:"",close:!0,reset:!0,focus:!0,closeInSeconds:0,icon:""},t);var e=App.getUniqueID("App_alert"),a='<div id="'+e+'" class="custom-alerts alert alert-'+t.type+' fade in">'+(t.close?'<button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>':"")+(""!==t.icon?'<i class="fa-lg fa fa-'+t.icon+'"></i>  ':"")+t.message+"</div>";return t.reset&&$(".custom-alerts").remove(),t.container?"append"==t.place?$(t.container).append(a):$(t.container).prepend(a):1===$(".page-fixed-main-content").size()?$(".page-fixed-main-content").prepend(a):($("body").hasClass("page-container-bg-solid")||$("body").hasClass("page-content-white"))&&0===$(".page-head").size()?$(".page-title").after(a):$(".page-bar").size()>0?$(".page-bar").after(a):$(".page-breadcrumb, .breadcrumbs").after(a),t.focus&&App.scrollTo($("#"+e)),t.closeInSeconds>0&&setTimeout(function(){$("#"+e).remove()},1e3*t.closeInSeconds),e},initFancybox:function(){P()},getActualVal:function(t){return t=$(t),t.val()===t.attr("placeholder")?"":t.val()},getURLParameter:function(t){var e,a,o=window.location.search.substring(1),n=o.split("&");for(e=0;e<n.length;e++)if(a=n[e].split("="),a[0]==t)return unescape(a[1]);return null},isTouchDevice:function(){try{return document.createEvent("TouchEvent"),!0}catch(t){return!1}},getViewPort:function(){var t=window,e="inner";return"innerWidth"in window||(e="client",t=document.documentElement||document.body),{width:t[e+"Width"],height:t[e+"Height"]}},getUniqueID:function(t){return"prefix_"+Math.floor(Math.random()*(new Date).getTime())},isIE8:function(){return a},isIE9:function(){return o},isRTL:function(){return e},isAngularJsApp:function(){return"undefined"!=typeof angular},getAssetsPath:function(){return l},setAssetsPath:function(t){l=t},setGlobalImgPath:function(t){r=t},getGlobalImgPath:function(){return l+r},setGlobalPluginsPath:function(t){s=t},getGlobalPluginsPath:function(){return l+s},getGlobalCssPath:function(){return l+c},getBrandColor:function(t){return d[t]?d[t]:""},getResponsiveBreakpoint:function(t){var e={xs:480,sm:768,md:992,lg:1200};return e[t]?e[t]:0}}}();jQuery(document).ready(function(){App.init()});var Datatable=function(){var t,e,a,o,n,i,l=!1,r={},s=function(){var e=$('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked',a).size(),o=t.dataTable.language.metronicGroupActions;e>0?$(".table-group-actions > span",n).text(o.replace("_TOTAL_",e)):$(".table-group-actions > span",n).text("")};return{init:function(c){if($().dataTable){i=this,c=$.extend(!0,{src:"",filterApplyAction:"filter",filterCancelAction:"filter_cancel",resetGroupActionInputOnSuccess:!0,loadingMessage:"Loading...",dataTable:{dom:"<'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'<'table-group-actions pull-right'>>r><'table-responsive't><'row'<'col-md-8 col-sm-12'pli><'col-md-4 col-sm-12'>>",pageLength:10,language:{metronicGroupActions:"_TOTAL_ registros selecionados:  ",metronicAjaxRequestGeneralError:"Could not complete request. Please check your internet connection",lengthMenu:"<span class='seperator'>|</span>View _MENU_ records",info:"<span class='seperator'>|</span>Found total _TOTAL_ records",infoEmpty:"Nenhum dado para ser mostrado",emptyTable:"No data available in table",zeroRecords:"No matching records found",paginate:{previous:"Anterior",next:"Próxima",last:"Última",first:"Primeira",page:"Page",pageOf:"of"}},orderCellsTop:!0,columnDefs:[{orderable:!1,targets:[0]}],pagingType:"bootstrap_extended",autoWidth:!1,processing:!1,serverSide:!0,ajax:{url:"",type:"POST",timeout:2e4,data:function(e){$.each(r,function(t,a){e[t]=a}),App.blockUI({message:t.loadingMessage,target:o,overlayColor:"none",cenrerY:!0,boxed:!0})},dataSrc:function(e){return e.customActionMessage&&App.alert({type:"OK"==e.customActionStatus?"success":"danger",icon:"OK"==e.customActionStatus?"check":"warning",message:e.customActionMessage,container:n,place:"prepend"}),e.customActionStatus&&t.resetGroupActionInputOnSuccess&&$(".table-group-action-input",n).val(""),1===$(".group-checkable",a).size()&&$(".group-checkable",a).attr("checked",!1),t.onSuccess&&t.onSuccess.call(void 0,i,e),App.unblockUI(o),e.data},error:function(){t.onError&&t.onError.call(void 0,i),App.alert({type:"danger",icon:"warning",message:t.dataTable.language.metronicAjaxRequestGeneralError,container:n,place:"prepend"}),App.unblockUI(o)}},drawCallback:function(e){l===!1&&(l=!0,a.show()),s(),t.onDataLoad&&t.onDataLoad.call(void 0,i)}}},c),t=c,a=$(c.src),o=a.parents(".table-container");var d=$.fn.dataTableExt.oStdClasses;$.fn.dataTableExt.oStdClasses.sWrapper=$.fn.dataTableExt.oStdClasses.sWrapper+" dataTables_extended_wrapper",$.fn.dataTableExt.oStdClasses.sFilterInput="form-control input-xs input-sm input-inline",$.fn.dataTableExt.oStdClasses.sLengthSelect="form-control input-xs input-sm input-inline",e=a.DataTable(c.dataTable),$.fn.dataTableExt.oStdClasses.sWrapper=d.sWrapper,$.fn.dataTableExt.oStdClasses.sFilterInput=d.sFilterInput,$.fn.dataTableExt.oStdClasses.sLengthSelect=d.sLengthSelect,n=a.parents(".dataTables_wrapper"),1===$(".table-actions-wrapper",o).size()&&($(".table-group-actions",n).html($(".table-actions-wrapper",o).html()),$(".table-actions-wrapper",o).remove()),$(".group-checkable",a).change(function(){var t=a.find('tbody > tr > td:nth-child(1) input[type="checkbox"]'),e=$(this).prop("checked");$(t).each(function(){$(this).prop("checked",e)}),s()}),a.on("change",'tbody > tr > td:nth-child(1) input[type="checkbox"]',function(){s()}),a.on("click",".filter-submit",function(t){t.preventDefault(),i.submitFilter()}),a.on("click",".filter-cancel",function(t){t.preventDefault(),i.resetFilter()})}},submitFilter:function(){i.setAjaxParam("action",t.filterApplyAction),$('textarea.form-filter, select.form-filter, input.form-filter:not([type="radio"],[type="checkbox"])',a).each(function(){i.setAjaxParam($(this).attr("name"),$(this).val())}),$('input.form-filter[type="checkbox"]:checked',a).each(function(){i.addAjaxParam($(this).attr("name"),$(this).val())}),$('input.form-filter[type="radio"]:checked',a).each(function(){i.setAjaxParam($(this).attr("name"),$(this).val())}),e.ajax.reload()},resetFilter:function(){$("textarea.form-filter, select.form-filter, input.form-filter",a).each(function(){$(this).val("")}),$('input.form-filter[type="checkbox"]',a).each(function(){$(this).attr("checked",!1)}),i.clearAjaxParams(),i.addAjaxParam("action",t.filterCancelAction),e.ajax.reload()},getSelectedRowsCount:function(){return $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked',a).size()},getSelectedRows:function(){var t=[];return $('tbody > tr > td:nth-child(1) input[type="checkbox"]:checked',a).each(function(){t.push($(this).val())}),t},setAjaxParam:function(t,e){r[t]=e},addAjaxParam:function(t,e){r[t]||(r[t]=[]),skip=!1;for(var a=0;a<r[t].length;a++)r[t][a]===e&&(skip=!0);skip===!1&&r[t].push(e)},clearAjaxParams:function(t,e){r={}},getDataTable:function(){return e},getTableWrapper:function(){return n},gettableContainer:function(){return o},getTable:function(){return a}}};