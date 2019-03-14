const se_scraper = require('./../index.js');

let config = {
    search_engine: 'baidu',
    debug: false,
    verbose: false,
    keywords: ['cat', 'mouse'],
    num_pages: 2,
    output_file: 'examples/results/baidu.json',
};

function callback(err, response) {
    if (err) { console.error(err) }
    console.dir(response, {depth: null, colors: true});
}

se_scraper.scrape(config, callback);