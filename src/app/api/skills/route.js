import { NextResponse } from 'next/server';
import skills from '../../../data/skills.json';

export async function GET(request) {
  return NextResponse.json(skills);
}