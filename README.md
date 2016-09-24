##How do I use this?

1. Create a file called `src/scripts/sensitiveConfig.json`, in which you create a JSON object with some attributes:
<dl>
<dt>headers</dt><dd>A set of HTTP headers that let you surf JobMine. Get them from your browser's network inspector.</dd>
<dt>idList</dt><dd>A list of job IDs, one per line</dd>
</dl>
1. Run this:
  ```
  node src/index.js
  ```
1. In another terminal run this:
  ```
  node src/scripts/driver.js > output
  ```
1. Take `output` and bulk import into a database under your control, such as a local Elasticsearch instance. (In fact, if you
don't plan to use Elasticsearch, you should edit `driver.js` to make the output format suitable.) An elasticsearch mapping is 
included at `src/es/jobs.mapping`.
