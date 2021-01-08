/*requirment--Create a Nodemailer transporter using either SMTP  transport mechanism.
Set up message options (who sends what to whom).
Deliver the message object using the sendMail() method of your previously created transporter.
SMTP is the main transport in Nodemailer for delivering messages-
let transporter = nodemailer.createTransport(options[, defaults]) , where options – is an object that defines connection data
defaults – is an object that is going to be merged into every message object. This allows you to specify shared options, 
for example to set the same from address for every message*/

const nodemailer = require('nodemailer');

// declare variables,

var fromMail = 'chandanilodhi2014@gmail.com';
var toMail = 'gsudhanshu12@gmail.com';
var subject = 'Hello World';
var body = "Hi, In this tough time" ;
var tranporter = nodemailer.createTransport({      //transporter object
service: 'gmail',
auth: {
    user: 'chandanilodhi2014@gmail.com' ,
    pass: 'Chandani@123'                 // write correct password
}
});

// set up message options

 var mailOptions ={
    from: fromMail,
    to: toMail,
suject: subject,
text: body
};

//send email--now deliver the mail options to the sendMail method of transport object created previously:
 
tranporter.sendMail(mailOptions, (error, res) => {
if (error) {
    console.log(error);
}
console.log(res);
});

/*var fromMail = 'chandanilodhi2014@gmail.com';
var toMail = 'gsudhanshu12@gmail.com';
var subject = 'Hello World';
var body = "Hi, In this tough time" ;

var mailOptions ={
    from: fromMail,
    to: toMail,
suject: subject,
text: body
};
return new Promise((resolve, reject)=>{
    var tranporter = nodemailer.createTransport({      //transporter object
        service: 'gmail',
        auth: {
            user: 'chandanilodhi2014@gmail.com', // Your email id
            pass: 'Chandani@123' // Your password
        }
        })
        });

let reponse = true;

tranporter.sendMail(mailOptions, function(error, info){

    if (error){
        console.log( 'error:' +error);

        reject(false);
    }
    else {
        console.log('Email sent: ' + info.response);
        resolve(true);
     }
});
*/