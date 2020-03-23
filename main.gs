function getData(id, sheetName) {
  var sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  var rows = sheet.getDataRange().getValues();
  var keys = rows.splice(0, 1)[0];
  return rows.map(function(row) {
    var obj = {}
    row.map(function(item, index) {
      obj[keys[index]] = item;
    });
    return obj;
  });
}

function doPost(e) {
  var func = 'MasujimaRyohei';
  var data = getData(PropertiesService.getScriptProperties().getProperty("IMPORTANT_ID"), 'MyApi');
  return ContentService.createTextOutput(func + '(' + JSON.stringify(data, null, 2) + ')')
  .setMimeType(ContentService.MimeType.JAVASCRIPT);
}