export async function GET() {
  return new Response(
    JSON.stringify({
      data: [
        {
          id: 1,
          name: "John Doe",
          email: " [email protected]",
          phone: "08123456789",
          address: "123, Main Street, Lagos",
          total: 1000,
          status: "pending",
        },
      ],
    })
  );
}
