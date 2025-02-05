import { NextMiddleware, NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    {
      source: "/",
    },
    /*
     * Match all paths except for the ones starting with (using negative lookahead):
     * - images
     * - svgs
     * - icons
     * - fonts
     * - static
     * - _next internals (static files)
     * - manifest.json
     * - favicon.ico or favicon-32x32.png
     * - css maps e.g., 28e2661cefb77041.css.map
     */
    {
      source:
        "/((?!images|svgs|icons|fonts|static|_next|manifest.json|favicon-*[32x32]*.*|[\\d\\w/.]*.css.*).*)",
    },
  ],
};

export const middleware: NextMiddleware = (request: NextRequest) => {
  return NextResponse.next();
};
