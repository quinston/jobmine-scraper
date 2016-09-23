const expect = require('chai').expect;
const parseJobHtml = require('../utils/parseJobHtml');

describe('job html parser', () => {
  it('should extract job ID, employer, job title, location, level, description, and number of available openings from html',
  () => {
    body = `<html dir='ltr' lang='en'>
<!-- Copyright (c) 2000, 2013, Oracle and/or its affiliates. All rights reserved. -->
<!-- FIREFOX/49.0/UX_LINUX; ToolsRel=8.53.25; User=QLLAM; DB=CCPR/ORACLE; AppServ=//camel1.private.uwaterloo.ca:11501; -->
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script language='JavaScript'>
var  totalTimeoutMilliseconds = 7200000;
var  warningTimeoutMilliseconds = 7020000;
var timeOutURL = 'https://jobmine.ccol.uwaterloo.ca/psp/ES_1/EMPLOYEE/WORK/?cmd=expire';
var timeoutWarningPageURL = 'https://jobmine.ccol.uwaterloo.ca/psc/ES_1/EMPLOYEE/WORK/s/WEBLIB_TIMEOUT.PT_TIMEOUTWARNING.FieldFormula.IScript_TIMEOUTWARNING';
</script>

<link id=PSSTYLEREQ_1_css rel='stylesheet' type='text/css' href='/cs/ES/cache/85305/PSSTYLEREQ_1.css' />
<link id=UW_CO_PSSTYLEDEF_SWAN_853_4_css rel='stylesheet' type='text/css' href='/cs/ES/cache/85305/UW_CO_PSSTYLEDEF_SWAN_853_4.css' />
<title id='PSPAGETITLE'>Job Details</title>
<script language='JavaScript'>
var winParent = null;
var modalID = null;
var modalZoomName = null;
var baseKey_win1 = "\x1b";
var altKey_win1 = "05678\xbc\xbe\xbf\xde";
var ctrlKey_win1 = "JK";
var saveWarningKeys_win1 = "";
var bAccessibility_win1 =false;
var bDoModal_win1 = false;
var bJSModal_win1 = false;
var bPromptPage_win1 = false;
var bTabOverTB_win1 = false;
var bTabOverPg_win1 = false;
var bTabOverNonPS_win1 = false;
var strCurrUrl='https://jobmine.ccol.uwaterloo.ca/psp/ES_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL?UW_CO_JOB_ID=00303969&PAGE=UW_CO_STU_JOBDTLS';
var bIncInNavigation='F';
var szCrefID='UW_CO_JOBDTLS2';
var szCrefReged='T';
var szCrefVisible='F';
var szCrefLabel='Job Details';
var szCalendarType = 'G';
var bMenuSrchPage = false;
var bWSRP=0;var szMenuSrchText = "-999999-";
var modalCloseUrl = '/cs/ES/cache/85305/PT_PORTAL_IC_CLOSE_1.gif';
var modalCloseAlt = 'Close';
var modalResizeUrl= '/cs/ES/cache/85305/PT_RESIZE_IMG_1.gif';
var modalResizeAlt = 'Drag to resize';
var modalMoveAlt = 'Drag to move';
</script>
<script language='JavaScript'>
var PFieldList_win1 = [];
</script>
<script language='JavaScript'>
var EFieldList_win1 = [];
</script>
<script LANGUAGE='JavaScript'>
try {
document.domain = "ccol.uwaterloo.ca";
}
catch(err) {;}
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_COMMON_MIN_1.js'>
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_AJAX_NET_MIN_1.js'>
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_SAVEWARNINGSCRIPT_MIN_1.js'>
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_PAGESCRIPT_win1_MIN_1.js'>
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_EDITSCRIPT_win1_MIN_1.js'>
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_POPUPSCRIPT_win1_MIN_1.js'>
</script>
<script language='JavaScript' type='text/javascript' src='/cs/ES/cache/85305/PT_GRIDSCRIPT_win1_MIN_1.js'>
</script>
<script language='JavaScript'>
var nResubmit=0;
var nLastAction=0;
var loader=null;
if (typeof(bCleanHtml) == 'undefined')
	var bCleanHtml = false;
setupTimeout2();
var postUrl_win1='https://jobmine.ccol.uwaterloo.ca/psc/ES_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL';
function aAction_win1(form, name, params, bAjax, bPrompt)
{
setupTimeout2();
if ((name != '#ICSave'))
processing_win1(1,3000);
aAction0_win1(form, name, params, bAjax, bPrompt);
}
function submitAction_win1(form, name)
{
setupTimeout2();
if (!ptCommonObj2.isICQryDownload(form, name))
 { processing_win1(1,3000); }
preSubmitProcess_win1(form, name);
var spellcheckpos = name.indexOf('$spellcheck');
if ((spellcheckpos != -1) && (name.indexOf('#KEYA5') != -1))
	form.ICAction.value = name.substring(0,spellcheckpos);
else
	form.ICAction.value=name;
var actionName = form.ICAction.value;
form.ICXPos.value=ptCommonObj2.getScrollX();
form.ICYPos.value=ptCommonObj2.getScrollY();
if (!ptCommonObj2.isAJAXReq(form, name) && !ptCommonObj2.isPromptReq(name)){
if (nLastAction == 1 && nResubmit > 0) return;
form.ICResubmit.value=nResubmit;
form.submit();
if (!ptCommonObj2.isICQryDownload(form, name))
	nResubmit++;
}
else if (ptCommonObj2.isPromptReq(name))
	pAction_win1(form, name, arguments[2]);
else
	aAction_win1(form, actionName);}
</script>
<script language='javascript'>
var pt_calHeadstyle=" class='PTCALHEAD' "
var pt_calWeekHeadstyle=" class='PTCALWEEKHEAD' "
function dateitemrefs()
{
this.pt_dateheader = "/cs/ES/cache/85305/PT_PORTAL_IC_CLOSE_1.gif";
this.pt_datering = "/cs/ES/cache/85305/PT_CURRENT_DATE_1.gif";
this.pt_datesel = "/cs/ES/cache/85305/PT_SELECTED_DATE_1.gif";
this.pt_nextmonth = "/cs/ES/cache/85305/PT_RIGHT_SCROLL_1.gif";
this.pt_prevmonth= "/cs/ES/cache/85305/PT_LEFT_SCROLL_1.gif";
this.pt_daystitle_hijri = "/cs/ES/cache/85305/PT_DATE_TITLE_S6_1.GIF";
this.pt_daystitle_thai = "/cs/ES/cache/85305/PT_DATE_TITLE_S0_1.GIF";
this.pt_daystitle_s0 = "/cs/ES/cache/85305/PT_DATE_TITLE_S0_1.GIF";
this.pt_daystitle_m1 = "/cs/ES/cache/85305/PT_DATE_TITLE_M1_1.GIF";
this.pt_daystitle_t2 = "/cs/ES/cache/85305/PT_DATE_TITLE_T2_1.GIF";
this.pt_daystitle_w3 = "/cs/ES/cache/85305/PT_DATE_TITLE_W3_1.GIF";
this.pt_daystitle_t4 = "/cs/ES/cache/85305/PT_DATE_TITLE_T4_1.GIF";
this.pt_daystitle_f5 = "/cs/ES/cache/85305/PT_DATE_TITLE_F5_1.gif";
this.pt_daystitle_s6 = "/cs/ES/cache/85305/PT_DATE_TITLE_S6_1.GIF";
}

function LoadCalendar()
{
var dateitems = new dateitemrefs();
loadImages(dateitems);
}
function DatePrompt_win1(dtfield,promptfield,yrfmt,bsubmit)
{
setupTimeout2();
openDate_win1(dtfield, promptfield, "MDY/"+yrfmt,bsubmit,"G",0);
}
</script>
<script language='JavaScript'  ptdefer='defer'>
if (typeof ptStyleSheet == "undefined") {
ptStyleSheet = 'UW_CO_PSSTYLEDEF_SWAN_853';
}
function onLoadExt_win1() {
modalZoomName = null;
var pt_pageinfo = document.getElementById('pt_pageinfo_win1');
if (pt_pageinfo) {
pt_pageinfo.setAttribute('Page', 'UW_CO_STU_JOBDTLS');
pt_pageinfo.setAttribute('Component', 'UW_CO_JOBDTLS');
pt_pageinfo.setAttribute('Menu', 'UW_CO_STUDENTS');
}

 g_bAccessibilityMode=false;
UpdateBreadCrumbs();
runOnloadScript_win1(false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,9,'ICFocus',false,false);
if (typeof(HelppopupObj_win1) != 'undefined' && HelppopupObj_win1 != null)
 HelppopupObj_win1.StopPopup();

doModalOnLoad_win1(false, false);
ResetGlyph_win1();
self.scroll(0,0);
objToBeFocus = null;
if (typeof oWin == 'undefined') setEventHandlers_win1('ICFirstAnchor_win1', 'ICLastAnchor_win1', false);
 else
 oWin.setEventHandlers_win1('ICFirstAnchor_win1', 'ICLastAnchor_win1', false);
processing_win1(0,3000);
ptConsole2.enable();

GenerateABN();
GenerateFakeBC();
bcUpdateForPTF();if (typeof(myAppsWindowOpenJS) != 'undefined' && myAppsWindowOpenJS != null && myAppsWindowOpenJS != '')
 {
try {eval(myAppsWindowOpenJS);} catch(e) {}
  myAppsWindowOpenJS=null;
}
ResetGlyph_win1();setPageletInfoInCtxmenu_win1('false');}
try{ptEvent.load(onLoadExt_win1);}catch(e){}
</script></head>
<body tabindex='-1'  class='PSPAGE' >
<DIV id='pt_pageinfo_win1' Page='' Component='' Menu=''></DIV>
<div id='pt_modalMaskCover'>&nbsp;</div><div id='pt_modalMask'>&nbsp;</div><div id='pt_console'></div><div id='pt_typeahead0'><span id='pt_typeahead' class='spanTextDropdown'>&nbsp;</span></div><div id='WAIT_win1' style='display:none;position:absolute;right:0;'><img id='processing' align='left' src='/cs/ES/cache/85305/PT_PROCESSING_1.gif' alt='Processing... please wait' title='Processing... please wait' /></div>
 <div id='SAVED_win1' style='display:none;position:absolute;right:0;'><table border='0' cellpadding='0' cellspacing='0'><tr><td><img src='/cs/ES/cache/85305/PTPORTAL_POPBOX_LEFT_1.gif' width='7' height='39' border='0' alt=''/></td><td id='saveWait_win1' width='35' align='center' valign='middle' background='/cs/ES/cache/85305/PTPORTAL_POPBOX_CENTER_1.gif'><img src='/cs/ES/cache/85305/PT_LOADER_1.gif' width='24' height='24' alt=''/></td><td nowrap='nowrap' background='/cs/ES/cache/85305/PTPORTAL_POPBOX_CENTER_1.gif'><span id='ptStatusText_win1' dir='ltr' class='PSPROCESSING'>&nbsp;</span></td><td><img src='/cs/ES/cache/85305/PTPORTAL_POPBOX_RIGHT_1.gif' width='6' height='39' alt=''/></td><td>&nbsp;</td></tr></table></div><a name='ICFirstAnchor_win1'></a>
<form name='win1' method='post' action="https://jobmine.ccol.uwaterloo.ca/psc/ES_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL"  autocomplete='off' class='PSForm'>
<DIV id='win1divPSHIDDENFIELDS' style='display:none'><input type='hidden' name='ICType' id='ICType' value='Panel' />
<input type='hidden' name='ICElementNum' id='ICElementNum' value='1' />
<input type='hidden' name='ICStateNum' id='ICStateNum' value='9' />
<input type='hidden' name='ICAction' id='ICAction' value='None' />
<input type='hidden' name='ICXPos' id='ICXPos' value='0' />
<input type='hidden' name='ICYPos' id='ICYPos' value='0' />
<input type='hidden' name='ResponsetoDiffFrame' id='ResponsetoDiffFrame' value='-1' />
<input type='hidden' name='TargetFrameName' id='TargetFrameName' value='None' />
<input type='hidden' name='FacetPath' id='FacetPath' value='None' />
<input type='hidden' name='ICFocus' id='ICFocus' value='' />
<input type='hidden' name='ICSaveWarningFilter' id='ICSaveWarningFilter' value='0' />
<input type='hidden' name='ICChanged' id='ICChanged' value='-1' />
<input type='hidden' name='ICResubmit' id='ICResubmit' value='0' />
<input type='hidden' name='ICSID' id='ICSID' value='mCmsusTeJUQG6tATdSZYP3hvAlC+1dirQum5JgX1D08=' />
<input type='hidden' name='ICActionPrompt' id='ICActionPrompt' value='false' />
<input type='hidden' name='ICFind' id='ICFind' value='' />
<input type='hidden' name='ICAddCount' id='ICAddCount' value='' />
<input type='hidden' name='ICAPPCLSDATA' id='ICAPPCLSDATA' value='' />
</DIV><DIV id='win1divPAGEBAR'><DIV><table cols='3' width='100%' cellpadding='0' cellspacing='0' hspace='0' vspace='0'>
<tr>
<td width='80%'></td><td width='10%' nowrap='nowrap' align='right'></td>
<td width='10%' nowrap='nowrap' align='right'><a ID=NEWWIN NAME=NEWWIN dir='ltr'href="javascript:processing_win1(0,3000); void window.open(DoPortalUrl('https://jobmine.ccol.uwaterloo.ca/psp/ES_newwin/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL'),'','');" PSaccesskey='9' tabindex='1'style="font:Arial;font-size:9pt;font-weight:normal;font-style:normal;color:#336699;text-decoration: none;"> <img src='/cs/ES/cache/85305/PT_NEWWIN_SWAN_1.gif' border='0' hspace='0' vspace='0' align='absmiddle' alt='New Window' title='New Window' />&nbsp;New Window</a></td></tr>
</table>
</DIV></DIV><script type="text/javascript">
if (typeof window.top.ptrc != "undefined" && window.top.ptrc != null){window.top.ptrc.SetRcEnabled(false);}</script>
<DIV id='win1divPSPANELTABS'><!-- CSS Tabs -->
<table id='tblpstabs' cellpadding='1' cellspacing='0'><td><div id="PSTAB"
><table cellSpacing='0' cellPadding='0' border='0'>
<tr valign = 'bottom'><td nowrap='nowrap' id="selected"><a style='white-space:nowrap;float:right;' Job Details= "" ><span>Job Details</span></a></td>
<td nowrap='nowrap'><a style='white-space:nowrap;float:right;' class='PSHYPERLINK' tabindex='2' href="javascript: submitAction_win1(document.win1,'#ICPanel1');"Employer Profile= "" ><span>Employer Profile</span></a></td>
<td nowrap='nowrap' valign = 'bottom'><img alt = '' width='491' src=/cs/ES/cache/85305/PT_TAB_BOTTOM_LINE_1.JPG  class='PSBOTTOMLINE' ></td></tr></table></div></td></table>
</DIV><DIV id='win1divPAGECONTAINER'><table class='PSPAGECONTAINER' ><tr><td>
<DIV id='win1divPSPAGECONTAINER'><table  border='0' id='ACE_width' cellpadding='0' cellspacing='0' class='PSPAGECONTAINER' cols='14' width='851'>
<tr>
<td width='8' height='8'></td>
<td width='8'></td>
<td width='12'></td>
<td width='5'></td>
<td width='112'></td>
<td width='16'></td>
<td width='23'></td>
<td width='104'></td>
<td width='28'></td>
<td width='105'></td>
<td width='24'></td>
<td width='159'></td>
<td width='4'></td>
<td width='243'></td>
</tr>
<tr>
<td height='23'></td>
<td colspan='13'  valign='top' align='left'>
<DIV id='win1div$ICField1'><span  class='PAPAGETITLE' id='$ICField1'>Job Details</span>
</DIV></td>
</tr>
<tr>
<td height='21'></td>
<td colspan='11'  valign='top' align='left'>
<hr width='100%' align='left'  class='PSHORIZONTALRULE'  />
</td>
</tr>
<tr>
<td height='1' colspan='3'></td>
<td colspan='2' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_CHAR_EDATElbl'><span  class='PSEDITBOXLABEL' >Posting Open Date:</span> </DIV></td>
<td colspan='3'></td>
<td colspan='2' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_CHAR_DATElbl'><span  class='PSEDITBOXLABEL' >Last Day to Apply:</span> </DIV></td>
</tr>
<tr>
<td height='23' colspan='3'></td>
<td colspan='3' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_CHAR_EDATE'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_CHAR_EDATE'>23 SEP 2016</span><!-- UW_CO_JOBDTL_VW_UW_CO_CHAR_EDATE -->
</DIV></td>
<td colspan='4' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_CHAR_DATE'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_CHAR_DATE'>26 SEP 2016</span><!-- UW_CO_JOBDTL_VW_UW_CO_CHAR_DATE -->
</DIV></td>
</tr>
<tr>
<td height='1' colspan='3'></td>
<td colspan='2' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_IDlbl'><span  class='PSEDITBOXLABEL' >Job ID:</span> </DIV></td>
<td colspan='2' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_EMPOWN_JOBNOlbl'><span  class='PSEDITBOXLABEL' >Emp Job #:</span> </DIV></td>
</tr>
<tr>
<td height='18' colspan='3'></td>
<td colspan='3'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_ID'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_JOB_ID'>00303969</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_ID -->
</DIV></td>
<td colspan='4'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_EMPOWN_JOBNO'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_EMPOWN_JOBNO'>&nbsp;</span><!-- UW_CO_JOBDTL_VW_UW_CO_EMPOWN_JOBNO -->
</DIV></td>
</tr>
<tr>
<td height='108' colspan='2'></td>
<td colspan='11'  valign='top' align='left'>
<DIV id='win1div$ICField11'><table cellpadding='2' cellspacing='0' cols='1'  class='PSFRAMEWBO'  width='591'>
<tr><td width='587'>
<table  border='0' id='ACE_$ICField11' cellpadding='0' cellspacing='0' cols='7' width='587' class='PSFRAME' style='border-style:none' >
<tr>
<td width='10' height='11'></td>
<td width='117'></td>
<td width='299'></td>
<td width='61'></td>
<td width='69'></td>
<td width='17'></td>
<td width='14'></td>
</tr>
<tr>
<td height='1'></td>
<td rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_EMPUNITDIVlbl'><span  class='PSEDITBOXLABEL' >Employer:</span> </DIV></td>
</tr>
<tr>
<td height='23'></td>
<td colspan='5' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_EMPUNITDIV'><span  class='PABOLDBLUETEXT' id='UW_CO_JOBDTL_DW_UW_CO_EMPUNITDIV'>360 Education Labs Inc</span><!-- UW_CO_JOBDTL_DW_UW_CO_EMPUNITDIV -->
</DIV></td>
</tr>
<tr>
<td height='1'></td>
<td rowspan='4'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_TITLElbl'><span  class='PSEDITBOXLABEL' >Job Title:</span> </DIV></td>
</tr>
<tr>
<td height='29'></td>
<td colspan='5'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_TITLE'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_JOB_TITLE'>Software Developer</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_TITLE -->
</DIV></td>
</tr>
<tr>
<td height='1'></td>
<td rowspan='3'></td>
<td rowspan='4'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_MARKS_DRVDlbl'><span  class='PSEDITBOXLABEL' >Grades:</span> </DIV></td>
</tr>
<tr>
<td height='1'></td>
<td colspan='3' rowspan='3'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_MARKS_DRVD'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_DW_UW_CO_MARKS_DRVD'>Required</span><!-- UW_CO_JOBDTL_DW_UW_CO_MARKS_DRVD -->
</DIV></td>
</tr>
<tr>
<td height='1'></td>
<td rowspan='4'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_WORK_LOCATNlbl'><span  class='PSEDITBOXLABEL' >Work Location:</span> </DIV></td>
</tr>
<tr>
<td height='19'></td>
<td rowspan='3'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_WORK_LOCATN'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_WORK_LOCATN'>Toronto</span><!-- UW_CO_JOBDTL_VW_UW_CO_WORK_LOCATN -->
</DIV></td>
</tr>
<tr>
<td height='1'></td>
<td colspan='2' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_AVAIL_OPENGSlbl'><span  class='PSEDITBOXLABEL' >Available Openings:</span> </DIV></td>
</tr>
<tr>
<td height='16'></td>
<td  valign='top' align='right'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_AVAIL_OPENGS'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_AVAIL_OPENGS'>5</span><!-- UW_CO_JOBDTL_VW_UW_CO_AVAIL_OPENGS -->
</DIV></td>
</tr>
</table>
</td></tr>
</table>
</DIV></td>
</tr>
<tr>
<td height='10' colspan='14'></td>
</tr>
<tr>
<td height='1' colspan='2'></td>
<td colspan='4' rowspan='3'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_DESCRlbl'><span  class='PSEDITBOXLABEL' >Disciplines:</span> </DIV></td>
</tr>
<tr>
<td height='16' colspan='2'></td>
<td colspan='8'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_DESCR'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_DW_UW_CO_DESCR'>ENG-Computer, ENG-Electrical, ENG-Software</span><!-- UW_CO_JOBDTL_DW_UW_CO_DESCR -->
</DIV></td>
</tr>
<tr>
<td height='27' colspan='2'></td>
<td colspan='8' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_DESCR100'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_DW_UW_CO_DESCR100'>ENG-Systems Design, MATH-Computer Science</span><!-- UW_CO_JOBDTL_DW_UW_CO_DESCR100 -->
</DIV></td>
</tr>
<tr>
<td height='1' colspan='2'></td>
<td colspan='4' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_DESCR_100lbl'><span  class='PSEDITBOXLABEL' >Levels:</span> </DIV></td>
</tr>
<tr>
<td height='27' colspan='2'></td>
<td colspan='8'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_DW_UW_CO_DESCR_100'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_DW_UW_CO_DESCR_100'>Junior, Intermediate, Senior</span><!-- UW_CO_JOBDTL_DW_UW_CO_DESCR_100 -->
</DIV></td>
</tr>
<tr>
<td height='1' colspan='2'></td>
<td colspan='4' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_OD_DV2_UW_CO_NAMElbl'><span  class='PSEDITBOXLABEL' >Hiring Process Support:</span> </DIV></td>
<td colspan='3'></td>
<td colspan='2' rowspan='3'  valign='top' align='left'>
<DIV id='win1divUW_CO_OD_DV2_UW_CO_NAME2lbl'><span  class='PSEDITBOXLABEL' >Work Term Support:</span> </DIV></td>
</tr>
<tr>
<td height='27' colspan='2'></td>
<td colspan='3' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_OD_DV2_UW_CO_NAME'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_OD_DV2_UW_CO_NAME'>Ross,Colin</span><!-- UW_CO_OD_DV2_UW_CO_NAME -->
</DIV></td>
<td colspan='3' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_OD_DV2_UW_CO_NAME2'><span  class='PSEDITBOX_DISPONLY' id='UW_CO_OD_DV2_UW_CO_NAME2'>Bromley,Stephanie</span><!-- UW_CO_OD_DV2_UW_CO_NAME2 -->
</DIV></td>
</tr>
<tr>
<td height='1' colspan='2'></td>
<td colspan='4' rowspan='2'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_SUMMARYlbl'><span  class='PSEDITBOXLABEL' >Comments:</span> </DIV></td>
</tr>
<tr>
<td height='31' colspan='2'></td>
<td colspan='8'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_SUMMARY'><span  class='PAERRORTEXT' id='UW_CO_JOBDTL_VW_UW_CO_JOB_SUMMARY'>&nbsp;</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_SUMMARY -->
</DIV></td>
</tr>
<tr>
<td height='36' colspan='3'></td>
<td colspan='4'  valign='top' align='left'>
<DIV id='win1div$ICField22'><span  class='PAPAGETITLE' id='$ICField22'>Job Description</span>
</DIV></td>
</tr>
<tr>
<td height='264' colspan='4'></td>
<td colspan='10'  valign='top' align='left'>
<DIV id='win1divUW_CO_JOBDTL_VW_UW_CO_JOB_DESCR'><span  class='PSTEXT' id='UW_CO_JOBDTL_VW_UW_CO_JOB_DESCR'>Location: 116 Sheppard Ave W, Toronto, ON M2N1M5
<br />
<br />Summary	3
<br />60 Education Labs is a premiere online education company located at Toronto and Kitchener in Ontario, Canada and at San Jose, California in United States of America. We use our state of the art proprietary Digital Learning Platform that incorporates audio, video, smart-board technologies for interactions over the internet. For more information, visit our product web site: www.Yuja.com
<br />
<br />360 Education Labs is hiring talented Software Developers for our Toronto office to design and implement our latest product called YuJa.com that aims to alter the way lectures are delivered in universities and colleges allowing simultaneous delivery of lectures to the in-class and over the internet audiences using our proprietary multimedia environment and learning management system. Lectures are captured and uploaded to the cloud in real-time. Our Digital Learning Platform can be used by corporations for training and general team collaboration and also by university Professors and TAs during lectures, tutorials and office hours. Users can independently access the tool for working collaboratively on their
<br />assignments and projects from their respective homes, offices or any place with internet connectivity. Yuja.com is free to use for individuals. Try it out today.
<br />
<br />Salary will match the qualifications and experience of the candidates. For the right candidate, pay is generous and competitive.
<br />
<br />Responsibilities
<br />- Full stack development of YuJa.com multimedia platform, including automatic lecture and lab capture using camera, Google Glass (like), or GoPro cameras and microphone mesh
<br />- All phases of design and development of hardware and software for lecture capture device
<br />- Design and development of web portal of YuJa.com for managing corporate and academic user accounts and social learning management system.
<br />
<br />Required Skills
<br />1) Strong software design and development skills with Java, Windows, Linux, and iOS
<br />2) Ability to recognize software problems and develop creative solutions within a fast-paced environment
<br />3) Programming experience with Java (J2EE), JBoss web server, Java Server Pages (JSP), Java Servlets, and Eclipse
<br />4) Relevant experience with mobile software development including iOS and Android platforms
<br />5) MySQL database experience including Java connectivity through JDBC
<br />6) Experience in designing web-based portals using HTML, Javascript, XML, CSS technologies, and other Web 2.0 tools.
<br />7) Experience with Adobe Air including developing Flash-based client-server applications
<br />8) Excellent verbal and written English communication skills
<br />
<br />Other Desirable Skills:
<br />1) Building distributed software systems including some experience with network protocols - HTTP, HTTPS, and TCP-IP
<br />2) Industry or project experience with audio/video streaming technologies
<br />3) Experience working with both Windows Server and Linux-based server systems
<br />
<br />Compensation And Benefits Information
<br />Salary will match the qualifications and experience of the candidates. For the right candidate, pay is generous and competitive.
<br />
<br />Career Development And Training
<br />Senior R &amp; D staff will provide guidance.</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_DESCR -->
</DIV></td>
</tr>
</table>
</DIV></td></tr>
</table>
<DIV id='win1divPSPANELTABLINKS'><table><tr><td nowrap='nowrap' class='PSHYPERLINK' >
Job Details |
<a name='#ICPanel1' class='PSHYPERLINK' dir="ltr" href="javascript: submitAction_win1(document.win1,'#ICPanel1');" tabindex='10000'>Employer Profile</a>
</td></tr></table>
</DIV></DIV><div id='DetachDiv' height=0 width=0 frameborder=0></div>
</form>
<a name='ICLastAnchor_win1'></a>
<div id='popupDragFrame' class='popupDragFrame'>&nbsp;</div>
<!-- Mouse-over popup Begin -->
<table id='win1MOpopupContainer' width='20' border='0' cellpadding='0' cellspacing='0' style='display:none; position:absolute; top:0; left:0;' onMouseOver="MOpopupObj_win1.StartPopup('win1MOpopupContainer', '');" onMouseOut="MOpopupObj_win1.StopPopup();"><tr>
<td id='win1MOpopupInner' height='25' width='20' align='left' valign='top' class='MOBGImage'>
<div id='win1MOdivpopupFrame' tabindex='-1' onclick='MOpopupObj_win1.SetFocusFlag(false);' style='overflow:auto; width:20px; height: 60px; padding:8px; box-shadow:0 0 5px #000000; background-color:white; border: 1px solid #666666;'>test</div></td>
</tr>
</table>
<!-- Mouse-over popup End  -->

<!-- Embedded Help popup Begin -->
<div id='HelppopupDiv_win1' style='display:none; position:absolute; top:0; left:0'>t</div>
<div id='HelpDragFrame_win1' class='popupDragFrame'>&nbsp;</div><table id='HelppopupContainer_win1' width='20' border='0' cellpadding='0' cellspacing='0' style='opacity:1; display:none; position:absolute; top:0; left:0' >
<tr>
<td id='HelppopupInner_win1' class='HelppopupInner' align='left' valign='top' style='position:absolute;z-Index:302;'>
<div id='HelppopupTitleBar_win1' class='HelppopupTitleBar' style='width:341px'><div id='HelppopupTitleBarLeftImage'></div><div id='HelppopupTitleBarMiddle_win1' style='width:333px' class='HelppopupTitleBarMiddle' dir='ltr'>
<table>
<td id='HelppopupTitle_win1' style='width:290px; cursor: move;'><span class='PTPOPUP_TITLE'>Help</span></td>
<td style='width:45px'><img id='#HELPPOPUPCLOSE' style='cursor:pointer' title='Close' alt='Close' align='right' onclick='HelppopupObj_win1.StopPopup("win1");' src='/cs/ES/cache/85305/PT_PORTAL_IC_CLOSE_1.gif'/></td>
</table>
</div><div id='HelppopupTitleBarRightImage'></div></div><div id='HelpdivpopupFrame_win1' class='MOBGImage HelpdivpopupFrame' tabindex='-1' onclick='HelppopupObj_win1.SetFocusFlag(false);' style='border: 1px #bcbaba solid; padding:12px; overflow:auto;'>test</div><div id='HelppopupShadow' class='popupShadow' style='position:absolute;z-index:-1;'><div id='HelppopupShadowTopRightCorner' class='popupShadowTopRightCorner' style='height:10px;'>&nbsp;</div><div id='HelppopupShadowTop' class='popupShadowTop' >&nbsp;</div><div id='HelppopupShadowBottom' class='popupShadowBottom' style='height:10px'><div id='HelppopupShadowBottomLeftCorner' class='popupShadowBottomLeftCorner' style='height:10px;width:10px'>&nbsp;</div><div id='HelppopupShadowBottomMiddle' class='popupShadowBottomMiddle' style='height:10px;'>&nbsp;</div><div id='HelppopupShadowBottomRightCorner' class='popupShadowBottomRightCorner' style='height:10px;width:10px'>&nbsp;</div></div></div></td>
</tr>
</table>
<!-- Embedded Help popup End  -->
<div id='pt_fakeBC' style='display:none'><ul></ul></div><div id='ptus_universalSrch' style='display:none;'><span>Default Local Node:</span><input type='text' readonly='readonly' name='ptus_defaultlocalnode' id='ptus_defaultlocalnode' value='UW_CCPR' /><br /><span>DbName:</span><input type='text' readonly='readonly' name='ptus_dbname' id='ptus_dbname' value='CCPR' /><br /><span>Portal:</span><input type='text' readonly='readonly' name='ptus_portal' id='ptus_portal' value='EMPLOYEE' /><br /><span>Node:</span><input type='text' readonly='readonly' name='ptus_node' id='ptus_node' value='WORK' /><br /><span>WorkCenter Id:</span><input type='text' readonly='readonly' name='ptus_workcenterid' id='ptus_workcenterid' value='' /><br /><span>Url:</span><input type='text' readonly='readonly' name='ptus_componenturl' id='ptus_componenturl' value='https://jobmine.ccol.uwaterloo.ca/psp/ES_1/EMPLOYEE/WORK/c/UW_CO_STUDENTS.UW_CO_JOBDTLS.GBL' /><br /></div></body>
<script language='JavaScript'>
var bCleanHtml = true;
var bDefer = true;
document.deferFldArr_win1 = new Array();
document.hiddenFldArr_win1 =new Array('ICType','ICElementNum','ICStateNum','ICAction','ICXPos','ICYPos','ResponsetoDiffFrame','TargetFrameName','FacetPath','ICFocus','ICSaveWarningFilter','ICChanged','ICResubmit','ICSID','ICActionPrompt','ICFind','ICAddCount','ICAPPCLSDATA');
document.chgFldArr_win1 = new Array();
var bCDATA = false;
var bLoadCompleted = true;
</script></html>
`;

console.log(parseJobHtml);

expect(parseJobHtml(body)).to.eql({
  jobId: '00303969',
  employerName: '360 Education Labs Inc',
  jobTitle: 'Software Developer',
  workLocation: 'Toronto',
  level: 'Junior, Intermediate, Senior',
  description: `Location: 116 Sheppard Ave W, Toronto, ON M2N1M5

Summary	3
60 Education Labs is a premiere online education company located at Toronto and Kitchener in Ontario, Canada and at San Jose, California in United States of America. We use our state of the art proprietary Digital Learning Platform that incorporates audio, video, smart-board technologies for interactions over the internet. For more information, visit our product web site: www.Yuja.com

360 Education Labs is hiring talented Software Developers for our Toronto office to design and implement our latest product called YuJa.com that aims to alter the way lectures are delivered in universities and colleges allowing simultaneous delivery of lectures to the in-class and over the internet audiences using our proprietary multimedia environment and learning management system. Lectures are captured and uploaded to the cloud in real-time. Our Digital Learning Platform can be used by corporations for training and general team collaboration and also by university Professors and TAs during lectures, tutorials and office hours. Users can independently access the tool for working collaboratively on their
assignments and projects from their respective homes, offices or any place with internet connectivity. Yuja.com is free to use for individuals. Try it out today.

Salary will match the qualifications and experience of the candidates. For the right candidate, pay is generous and competitive.

Responsibilities
- Full stack development of YuJa.com multimedia platform, including automatic lecture and lab capture using camera, Google Glass (like), or GoPro cameras and microphone mesh
- All phases of design and development of hardware and software for lecture capture device
- Design and development of web portal of YuJa.com for managing corporate and academic user accounts and social learning management system.

Required Skills
1) Strong software design and development skills with Java, Windows, Linux, and iOS
2) Ability to recognize software problems and develop creative solutions within a fast-paced environment
3) Programming experience with Java (J2EE), JBoss web server, Java Server Pages (JSP), Java Servlets, and Eclipse
4) Relevant experience with mobile software development including iOS and Android platforms
5) MySQL database experience including Java connectivity through JDBC
6) Experience in designing web-based portals using HTML, Javascript, XML, CSS technologies, and other Web 2.0 tools.
7) Experience with Adobe Air including developing Flash-based client-server applications
8) Excellent verbal and written English communication skills

Other Desirable Skills:
1) Building distributed software systems including some experience with network protocols - HTTP, HTTPS, and TCP-IP
2) Industry or project experience with audio/video streaming technologies
3) Experience working with both Windows Server and Linux-based server systems

Compensation And Benefits Information
Salary will match the qualifications and experience of the candidates. For the right candidate, pay is generous and competitive.

Career Development And Training
Senior R &amp; D staff will provide guidance.`,
  noAvailableOpenings: 5
});
  });
});
