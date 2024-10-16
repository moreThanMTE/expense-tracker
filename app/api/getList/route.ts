'use server'
import db from "@/app/sql.mjs"

export async function GET() {
  return new Response('hello getList')
}

export async function POST() {
  try {
    const items = db.prepare("SELECT * FROM expense_items").all();
    return new Response(JSON.stringify(items), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
    // 在这里可以处理 body 数据
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}