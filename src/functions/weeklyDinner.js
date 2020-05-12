require('dotenv').config();
const Airtable = require('airtable');

exports.handler = (event, context, callback) => {
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base("appTMXs7iFPHJNJei");

  base("DinnerPlan").select({
    maxRecords: 7,
    view: "Grid view"
  }).firstPage((err, records)=>{
    let payload = [];
    records.forEach(record=>{
      let recPaylod = {
        "day": record.get('Weekday'),
        "dinner": record.get('Dinner'),
        "img": record.get('Image')
      }
      payload = [...payload, recPaylod];
    })

    return callback(null, {
      body: JSON.stringify(payload),
      statusCode: 200,
    });
  })
}