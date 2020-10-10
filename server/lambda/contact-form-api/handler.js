/* eslint-disable @typescript-eslint/no-var-requires */
const aws = require('aws-sdk')
const ses = new aws.SES()
const myEmail = process.env.EMAIL; // myEmail is the email address you enabled in AWS SES in the AWS Console
const myDomain = process.env.DOMAIN; // add the domain of your website or '*' if you want to accept requests from any domain

function generateResponse(code, payload) {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': myDomain,
            'Access-Control-Allow-Headers': 'x-requested-with',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(payload)
    }
}

function generateError(code, err) {
    console.log(err)
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': myDomain,
            'Access-Control-Allow-Headers': 'x-requested-with',
            'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(err.message)
    }
}

function generateEmailParams(body) {
    const { name, business, email, message, staticDesign, dynamicDesign, cmsDesign, customDesign, staticHosting, dynamicHosting } = JSON.parse(body);

    return {
        Source: myEmail,
        Destination: { ToAddresses: [myEmail] },
        ReplyToAddresses: [email],
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: `You received a message from ${myDomain}!\n\n
                        Name: ${name}\n
                        Business: ${business}\n
                        Email: ${email}\n
                        Subjects: \n- staticDesign: ${staticDesign ? staticDesign + ', ' : ''}\n- dynamicDesign: ${dynamicDesign ? dynamicDesign + ', ' : ''}\n- cmsDesign ${cmsDesign ? cmsDesign + ', ' : ''}\n- customDesign ${customDesign ? customDesign + ', ' : ''}\n- staticHosting ${staticHosting ? staticHosting + ', ' : ''}\n- dynamicHosting ${dynamicHosting ? dynamicHosting + ', ' : ''}\n
                        Message: \n${message}`
                }
            },
            Subject: {
                Charset: 'UTF-8',
                Data: `You received a message from ${myDomain}!`
            }
        }
    }
}

module.exports.sendJSON = async (event) => {
    try {
        const emailParams = generateEmailParams(event.body)
        const data = await ses.sendEmail(emailParams).promise()
        return generateResponse(200, data)
    } catch (err) {
        return generateError(500, err)
    }
}
