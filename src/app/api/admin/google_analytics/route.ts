import { google } from "googleapis";
import {NextRequest, NextResponse} from "next/server";

const analyticsReporting = google.analyticsreporting("v4");

export async function GET(req:NextRequest, res:NextResponse) {
  try {
    // 1. Authentication
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS ?? ""),
      scopes: ["https://www.googleapis.com/auth/analytics.readonly"],
    });

    if (!process.env.GA_PROPERTY_ID) {
      throw new Error("GA_PROPERTY_ID environment variable is missing.");
    }

    // 3. API Request 
    const propertyId = process.env.GA_PROPERTY_ID
    
    
    const request = {
      viewId: propertyId, 
      dateRanges: [{ startDate: '7daysAgo', endDate: 'today' }],
      metrics: [{ expression: 'ga:sessions' }],  
      dimensions: [{ name: 'ga:country' }],
    };

    // 4. Execute API Call
    const response = await analyticsReporting.reports.batchGet({
      auth,
      requestBody: { reportRequests: [request] },
    });

    // 5. Data Handling
    if (!response.data.reports || !response.data.reports[0]) {
        return NextResponse.json({
            status: 500,
            message: "No data found",
        });
    }

    const reports = response.data.reports[0];
    const visits = reports?.data?.rows?.[0]?.metrics?.[0]?.values?.[0] ?? 0; 
    const countriesData = reports?.data?.rows?.map((row: any) => ({
        country: row.dimensions?.[0],
        visits: row.metrics?.[0]?.values?.[0] ?? 0, 
    }));

    // 6. Successful Response
    
    return NextResponse.json({
      status: 200,
      data: {
        visits,
        countriesData,
      },
    });

    } catch (error: any) {
        console.error(error);
        const statusCode = error.response?.status || 500;
        
        return NextResponse.json({
            status: statusCode,
            message: error.message,
        });
}
}