import { NextResponse } from 'next/server';
import experience from '../../../data/experience.json';

export async function GET() {
  return NextResponse.json(experience);
}