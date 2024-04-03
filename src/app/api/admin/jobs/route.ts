import {NextRequest, NextResponse} from "next/server";
import { Client } from "pg";

export async function GET (request: NextRequest){
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
        rejectUnauthorized: false
        }
    });
    
    await client.connect();
    
    const res = await client.query('SELECT * FROM jobs');
    await client.end();
    
    return NextResponse.json(res.rows);

    
}

export async function POST(
    req: Request
  ) {
    const requestBody = await req.json();
  
    const client = new Client({
      connectionString: process.env.DATABASE_URL,
    });
  
    try {
      await client.connect();
  
      const query = `
        INSERT INTO jobs (
          title,
          company_intro,
          responsibilities,
          requirements,
          benefits,
          contact_person,
          contact_email,
          status
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING job_id  
      `;
      const values = [
        requestBody.title,
        requestBody.company_intro,
        requestBody.responsibilities,
        requestBody.requirements,
        requestBody.benefits,
        requestBody.contact_person,
        requestBody.contact_email,
        requestBody.status || 'open' 
      ];
  
      const result = await client.query(query, values);
      const newJobId = result.rows[0].job_id;
  
      return NextResponse.json({ jobId: newJobId }, { status: 201 });
  
    } catch (error) {
      console.error('Error creating job:', error);
      return NextResponse.json({ message: 'Error creating job' }, { status: 500 });
    } finally {
      await client.end();
    }
  }
  