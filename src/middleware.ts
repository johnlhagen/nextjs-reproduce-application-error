import { NextMiddleware, NextRequest, NextResponse } from "next/server";

/**
 * The middleware does nothing in this example.
 * Adding middleware breaks /b page
 */

export const config = {
  matcher: [
    {
      source: "/b",
    },
  ],
};

export const middleware: NextMiddleware = (request: NextRequest) => {
  return NextResponse.next();
};
