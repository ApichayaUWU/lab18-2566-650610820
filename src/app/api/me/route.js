import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Apichaya INkhiewsai",
    studentId: "650610820",
  });
};
