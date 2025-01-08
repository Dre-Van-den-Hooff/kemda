export async function GET() {
  const data = { message: 'Hello from server' };
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
