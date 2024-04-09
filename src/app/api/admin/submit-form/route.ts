import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";


export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    await client.connect();

    const result = await client.query(
      `INSERT INTO contact_submissions (
            name, 
            first_name, 
            last_name, 
           email, 
            company, 
            website, 
            company_stage, 
            interested_in, 
            budget, 
            message, 
            how_did_you_hear
        ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11
        ) RETURNING id;`,
      [
        formData.name,
        formData.first_name,
        formData.last_name,
        formData.email,
        formData.company,
        formData.website,
        formData.company_stage,
        formData.interested_in,
        formData.budget,
        formData.message,
        formData.how_did_you_hear,
      ]
    );
    await client.end();

    return NextResponse.json({
      message: "Form submitted successfully",
      id: result.rows[0].id,
    });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Form submission failed" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
  await client.connect();

  const res = await client.query("SELECT * FROM contact_submissions");

  await client.end();

  return NextResponse.json(res.rows);
}
