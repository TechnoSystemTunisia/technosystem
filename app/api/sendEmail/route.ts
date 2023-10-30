import { sendEmail } from '@/lib/email';
import { type NextRequest, type NextResponse } from 'next/server'
 
export async function POST(request: NextRequest) {
  const { emailData } = await request.json();
  try {
    const data = await sendEmail(
        emailData.email,
        emailData.subject,
        emailData.firstName,
        `<html>
            <body>
                <h1>Hello, New Request:</h1>
                <p>First Name: ${emailData.firstName}</p>
                <p>Phone Email: ${emailData.email}</p>
                <p>Phone Number: ${emailData.phone}</p>
                <p>Message: ${emailData.message}.</p>
            </body>
        </html>`  
    ,
    ) 
    return Response.json({
        status: 200,
        body: "email Sent"
      })
  } catch (error) {
    return Response.json({
        status: 500,
        body: `ERROR SENDING EMAIL ${error}`
      })
  }
}