import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";


// Define response data type


// Email validation schema


// Subscription handler function
export async function POST(
request: any) {
  // 1. Validate email address
  const emailValidation = await request.json().catch((error: Error)=>{
   
    return NextResponse.json({message: 'Failure @ server: '+ error.message}, {status: 500})
  });
  
  

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY;
  const API_SERVER = process.env.NEXT_PUBLIC_MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;
type Data = {
  email_address: string,
  status: string,
  merge_fields?:{
    FNAME?: string,
    PHONE?: string,
  }
  tag?:string[]
}
  // 4. Prepare request data
  const data: Data = {
    email_address: emailValidation.email,
    status: "subscribed",
    
  };
  if(emailValidation.name){
    data.merge_fields = {
      FNAME: emailValidation.name,
      PHONE: emailValidation.phone
    }
    data.tag = [emailValidation['company name']]
  }

  // 5. Set request headers
  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `api_key ${API_KEY}`,
    },
  };

  // 6. Send POST request to Mailchimp API
  try {
    const response = await axios.post(url, data, options);
    if (response.status == 200) {
      return NextResponse.json({code: 200, message: "Awesome! You have successfully subscribed!" }, {status: 201});
    }
  } catch (error) {
  
    if (axios.isAxiosError(error)) {
      console.error(
        `${error.response?.status}`,
        `${error.response?.data.title}`,
        `${error.response?.data.detail}`
      );

      if (error.response?.data.title == "Member Exists") {
        return NextResponse.json({
          code: 401,
          error: "Uh oh, it looks like this email's already subscribed🧐",
        }, {status: 401});
      }
    }

    return NextResponse.json({
      code: 500,
      error:
        "Oops! There was an error subscribing you to the newsletter. Please email me at ogbonnakell@gmail.com and I'll add you to the list.",
    }, {status: 500});
  }
};

