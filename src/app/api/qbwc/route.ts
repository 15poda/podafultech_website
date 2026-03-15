import { NextRequest, NextResponse } from 'next/server';

/**
 * QuickBooks Web Connector SOAP implementation.
 * QBWC requires specific SOAP methods to be present.
 */

const SOAP_NS = 'http://developer.intuit.com/';

export async function POST(req: NextRequest) {
  const xml = await req.text();
  
  // Extract the method name from the SOAP envelope
  const methodNameMatch = xml.match(/<[^:]+:?(\w+)\s*[^>]*>/);
  const methodName = methodNameMatch ? methodNameMatch[1] : '';

  let responseBody = '';

  switch (methodName) {
    case 'authenticate':
      // Basic auth mock - in production, verify UserName and Password from the XML
      responseBody = `
        <authenticateResponse xmlns="${SOAP_NS}">
          <authenticateResult>
            <string>test-session-ticket-123</string>
            <string></string> <!-- Valid path to company file, empty means currently open file -->
          </authenticateResult>
        </authenticateResponse>`;
      break;

    case 'sendRequestXML':
      // This is where we send qbXML to QuickBooks.
      // Requesting CompanyQuery to test the connection.
      const qbXML = `<?xml version="1.0" ?>
        <?qbxml version="13.0"?>
        <QBXML>
          <QBXMLMsgsRq onError="stopOnError">
            <CompanyQueryRq></CompanyQueryRq>
          </QBXMLMsgsRq>
        </QBXML>`;
      
      responseBody = `
        <sendRequestXMLResponse xmlns="${SOAP_NS}">
          <sendRequestXMLResult><![CDATA[${qbXML}]]>/sendRequestXMLResult>
        </sendRequestXMLResponse>`;
      break;

    case 'receiveResponseXML':
      // QuickBooks sends back the result of our query here.
      // Return 100 to indicate we are done.
      responseBody = `
        <receiveResponseXMLResponse xmlns="${SOAP_NS}">
          <receiveResponseXMLResult>100</receiveResponseXMLResult>
        </receiveResponseXMLResponse>`;
      break;

    case 'closeConnection':
      responseBody = `
        <closeConnectionResponse xmlns="${SOAP_NS}">
          <closeConnectionResult>Success</closeConnectionResult>
        </closeConnectionResponse>`;
      break;

    case 'connectionError':
      responseBody = `
        <connectionErrorResponse xmlns="${SOAP_NS}">
          <connectionErrorResult>done</connectionErrorResult>
        </connectionErrorResponse>`;
      break;

    case 'getLastError':
      responseBody = `
        <getLastErrorResponse xmlns="${SOAP_NS}">
          <getLastErrorResult>No error</getLastErrorResult>
        </getLastErrorResponse>`;
      break;

    default:
      return new NextResponse('Method Not Found', { status: 404 });
  }

  const soapEnvelope = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        ${responseBody}
      </soap:Body>
    </soap:Envelope>`;

  return new NextResponse(soapEnvelope, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
    },
  });
}

// QBWC sometimes sends a GET request to check if the service is alive
export async function GET() {
  return new NextResponse('PODAfultech QBWC Service is running.', { status: 200 });
}
