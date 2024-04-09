import { NextRequest, NextResponse } from "next/server";
import { Client } from "pg";

export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new NextResponse("Unauthorized", { status: 401 });
  }
  const id = params.id;
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  try {
    await client.connect();
    const query = `DELETE FROM contact_submissions WHERE id = $1`;
    const values = [id];
    await client.query(query, values);
    return NextResponse.json({ message: "Form deleted" });
  } catch (error) {
    console.error("Error deleting form:", error);
    return NextResponse.json(
      { message: "Error deleting form" },
      { status: 500 }
    );
  } finally {
    await client.end();
  }
}
