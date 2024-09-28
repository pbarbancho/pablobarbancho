import { NextResponse } from 'next/server';
import experience from '../../../data/experience.json';

export async function GET(request) {
  return NextResponse.json(experience);
}