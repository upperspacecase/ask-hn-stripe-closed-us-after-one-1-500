export async function POST(req: Request) {
  const body = (await req.json()) as { email?: unknown };
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email.includes("@")) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const record = { event: "signup", email, at: new Date().toISOString() };
  console.log(JSON.stringify(record));

  const webhook = process.env.SIGNUP_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(record),
    });
  }

  return Response.json({ ok: true });
}
