import { prisma } from "@/lib/prisma"; 
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userName, userPassword } = await req.json();

  if (!userName || !userPassword) {
    return NextResponse.json(
      { message: "Missing username or password" },
      { status: 400 }
    );
  }

  const userCreds = await prisma.users.findUnique({
    where: { username: userName },
  });

  if (!userCreds) {
    return NextResponse.json(
      { message: "Invalid Credentials" },
      { status: 401 }
    );
  }

  const isValid = await bcrypt.compare(userPassword, userCreds.password_hash);

  if (isValid) {
    return NextResponse.json(
      { message: "Logged in as Admin", lastLogin: userCreds.last_login },
      { status: 200 }
    );
  }

  return NextResponse.json({ message: "Invalid Credentials" }, { status: 401 });
}
