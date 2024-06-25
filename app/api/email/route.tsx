import { NextResponse } from 'next/server'
const {google} = require('googleapis')
const nodemailer = require('nodemailer');
const refreshToken = process.env.NEXT_PUBLIC_REFRESH_TOKEN
    const clientSecret =process.env.NEXT_PUBLIC_CLIENT_SECRET
    const redirectUri = process.env.NEXT_PUBLIC_REDIRECT_URI
    const clientID = process.env.NEXT_PUBLIC_CLIENT_ID
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
    
   

export async function POST(request: any){
  const {name, email, phone, message} = await request.json()
 
   
    
    try {
      const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectUri)
      oAuth2Client.setCredentials({refresh_token: refreshToken})
      console.log('here')
      const accessToken =  await new Promise((resolve, reject) => {
        oAuth2Client.getAccessToken((err:any, token:string) => {
          if (err) {
            console.log("*ERR: ", err)
            reject();
          }
          resolve(token); 
        });
      });
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          type:'OAuth2',
          user: username,
          clientID: clientID,
          clientSecret: clientSecret,
          refreshToken: refreshToken,
          accessToken: accessToken
        },
      });
      const mail = await transporter.sendMail({
          from: username,
          to: myEmail,
          replyTo: email,
          subject: `Loris Media client message from ${email}`,
          html: `
          <p>Name: ${name} </p>
          <p>Phone: ${phone} </p>
          <p>Email: ${email} </p>
          <p>Message: ${message} </p>
          `,
      })

      
      return NextResponse.json({ message: "Success: email was sent" })

  } catch (error) {
      console.log(error)
      NextResponse.json({ message: "COULD NOT SEND MESSAGE" }, {status:500})
  }
    

  }