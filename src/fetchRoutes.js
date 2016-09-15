const ROUTELIST_URL = 'http://spreadsheet-parser.herokuapp.com/?id=1OgDtJt_hsVKOz03E59BV-HASxqv2eGiuL__KEQMaLT4';

export default fetch(ROUTELIST_URL)
.then((unparsedResults) => unparsedResults.json())
.then((parsedResults) => parsedResults.data);