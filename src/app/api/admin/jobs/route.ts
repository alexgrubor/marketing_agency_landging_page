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

