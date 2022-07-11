const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWellcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'valisteto@gmail.com',
        subject: 'Wellcome! This is chicho Valio email',
        text: `Pishi toq email bache. Love to have you ${name} <3`
    })
}

const emailCancelention = (email, name) => {
    sgMail.send({
        to: email,
        from: 'valisteto@gmail.com',
        subject: 'Nice having you, can you tell us why did you delete your account?',
        text: `See you again. Loved to have you ${name} <3`
    })
}

module.exports = {
    sendWellcomeEmail,
    emailCancelention
}

// const msg = {
//   to: 'valisteto@gmail.com', 
//   from: 'valisteto@gmail.com', 
//   subject: 'This is chicho Valio email',
//   text: 'Pishi toq email bache',
//   html: '<strong>Chicho valio machka</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })

