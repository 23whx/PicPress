export async function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/favicon.webp",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}


