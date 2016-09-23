module.exports = (htmlString) => {

	console.log(htmlString);

  const re = String.raw`.*<span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_JOB_ID'>(\d{8})</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_ID -->.*<span  class='PABOLDBLUETEXT' id='UW_CO_JOBDTL_DW_UW_CO_EMPUNITDIV'>(.*)</span><!-- UW_CO_JOBDTL_DW_UW_CO_EMPUNITDIV -->.*<span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_JOB_TITLE'>(.*)</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_TITLE -->.*<span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_WORK_LOCATN'>(.*)</span><!-- UW_CO_JOBDTL_VW_UW_CO_WORK_LOCATN -->.*<span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_VW_UW_CO_AVAIL_OPENGS'>(\d{1,3})</span><!-- UW_CO_JOBDTL_VW_UW_CO_AVAIL_OPENGS -->.*<span  class='PSEDITBOX_DISPONLY' id='UW_CO_JOBDTL_DW_UW_CO_DESCR_100'>(.*)</span><!-- UW_CO_JOBDTL_DW_UW_CO_DESCR_100 -->.*<span  class='PSTEXT' id='UW_CO_JOBDTL_VW_UW_CO_JOB_DESCR'>(.*)</span><!-- UW_CO_JOBDTL_VW_UW_CO_JOB_DESCR -->.*`;


  const reResult = new RegExp(re).exec(htmlString.replace(/\n/g, ''));

  return {
    jobId: reResult[1],
    employerName: reResult[2],
    jobTitle: reResult[3],
    workLocation: reResult[4],
    noAvailableOpenings: parseInt(reResult[5]),
    level: reResult[6],
    description: reResult[7].replace(/<br \/>/g, '\n')
  };
};
