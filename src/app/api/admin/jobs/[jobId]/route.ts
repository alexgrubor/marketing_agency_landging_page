import {NextRequest, NextResponse} from "next/server";
import { Client } from "pg";

export async function GET(  req: Request,
  {
    params,
  }: {
    params: {
      jobId: string;
    };
  }) {
   
    

    const jobId = params.jobId; 
  

    const client = new Client({
        connectionString: process.env.DATABASE_URL,
      });
    
      try {
        await client.connect();
    
        const query = `SELECT * FROM jobs WHERE job_id = $1`; 
        const values = [jobId];
    
        const result = await client.query(query, values);
    
        if (result.rows.length === 0) {
          return NextResponse.json({ message: 'Job not found' }, { status: 404 });
        }
    
        const job = result.rows[0];
        return NextResponse.json(job);
    
      } catch (error) {
        console.error('Error fetching job:', error);
        return NextResponse.json({ message: 'Error fetching job' }, { status: 500 });
      } finally {
        await client.end();
      }
}




