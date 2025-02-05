import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [],
};

export const middleware: NextMiddleware = (request: NextRequest) => {
  return NextResponse.next();
};
