/** @format */

import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Project from "../../../models/project";

export async function GET(req: Request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const limit = searchParams.get("limit");

    // Se 'limit' for definido, converte para número, senão pega todos
    const projects = limit
      ? await Project.find().limit(Number(limit))
      : await Project.find();

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar projetos:", error);
    return NextResponse.json(
      { error: "Erro ao buscar projetos" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    if (!body.title || !body.description || !body.images || !body.techStack) {
      return NextResponse.json(
        { error: "Campos obrigatórios: title, description, images, techStack" },
        { status: 400 }
      );
    }

    const project = await Project.create(body);

    return NextResponse.json(project, { status: 201 });
  } catch (error: any) {
    console.error("Erro ao criar projeto:", error);
    return NextResponse.json(
      { error: "Erro ao criar projeto", details: error.message },
      { status: 500 }
    );
  }
}
