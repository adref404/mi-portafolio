import { NextRequest, NextResponse } from "next/server";
import { getProjects } from "@/lib/queries";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tag = searchParams.get("tag") ?? undefined;
  const q = searchParams.get("q") ?? undefined;

  const projects = await getProjects(tag, q);
  return NextResponse.json(projects);
}