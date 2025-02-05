import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    {
      source:
        "/((?!images|svgs|icons|fonts|static|_next|manifest.json|favicon-*[32x32]*.*|[\\d\\w/.]*.css.*).*)",
    },
  ],
};

export const middleware: NextMiddleware = (request: NextRequest) => {
  return NextResponse.next();
};
