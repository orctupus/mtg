'use strict'
module.exports = function(req, res, next){
    let text = req.body.text
    let card = text.substr(text.indexOf(" ") + 1);;
    var botPayload = {
        text : card
    };

    // avoid infinite loop
    if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
    } else {
    return res.status(200).end();
    }
});