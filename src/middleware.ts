import { NextMiddleware, NextRequest, NextResponse } from "next/server";

/**
 * The middleware does nothing in this example.
 * Adding middleware breaks /b page
 */

export const config = {
  matcher: [
    {
      source: "/rewrite-to-b",
    },
  ],
};

const rewritesMap = [["/rewrite-to-b", "/b"]];

export const middleware: NextMiddleware = (request: NextRequest) => {
  if (request.nextUrl.pathname === rewritesMap[0][0]) {
    NextResponse.rewrite(new URL(rewritesMap[0][1], request.url));
  }
  return NextResponse.next();
};
