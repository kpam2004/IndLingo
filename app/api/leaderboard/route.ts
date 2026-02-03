import { NextResponse } from 'next/server'
import { getAllUsers } from '@/lib/server'

export async function GET() {
  try {
    const users = await getAllUsers(); // [{ name, xp }]
    const sorted = users.sort((a, b) => b.xp - a.xp);
    return NextResponse.json(sorted);
  } catch (error) {
    const err = error as Error;
    console.error('Leaderboard API error:', err);
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 });
  }
}