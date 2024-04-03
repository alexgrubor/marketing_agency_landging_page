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


export async function PATCH( 
  req: Request,
  {
    params,
  }: {
    params: {
      jobId: string;
    };
  }) {

  const jobId = params.jobId; 
  const requestBody = await req.json(); 

  const client = new Client({
      connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();

    
    const fieldsToUpdate = Object.keys(requestBody);
    let query = 'UPDATE jobs SET ';
    const values = []; 

    for (let i = 0; i < fieldsToUpdate.length; i++) {
      const field = fieldsToUpdate[i];
      query += `${field} = $${i + 1}, `;
      values.push(requestBody[field]); 
    }

    query = query.slice(0, -2);
    query += ' WHERE job_id = $' + (values.length + 1); 
    values.push(jobId); 

    const result = await client.query(query, values);

    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job updated successfully' });

  } catch (error) {
    console.error('Error updating job:', error);
    return NextResponse.json({ message: 'Error updating job' }, { status: 500 });
  } finally {
    await client.end();
  }
}


export async function DELETE( 
  req: Request,
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

    const query = `DELETE FROM jobs WHERE job_id = $1`; 
    const values = [jobId];

    const result = await client.query(query, values);

    if (result.rowCount === 0) {
      return NextResponse.json({ message: 'Job not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Job deleted successfully' });

  } catch (error) {
    console.error('Error deleting job:', error);
    return NextResponse.json({ message: 'Error deleting job' }, { status: 500 });
  } finally {
    await client.end();
  }
}


