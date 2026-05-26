/** @format */

import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import GalleryItem, { IGalleryItem } from "../../../models/gallery-item";

export async function GET(req: Request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);

    const limit = searchParams.get("limit");
    const items = limit
      ? await GalleryItem.find().limit(Number(limit)).sort({ date: -1 })
      : await GalleryItem.find().sort({ date: -1 });

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Erro ao buscar gallery items:", error);
    return NextResponse.json(
      { error: "Erro ao buscar gallery items" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body: Partial<IGalleryItem> = await req.json();

    if (!body.date || !body.type || !body.src || !body.name) {
      return NextResponse.json(
        { error: "Campos obrigatórios: date, type, src, name" },
        { status: 400 }
      );
    }

    const item = await GalleryItem.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar gallery item:", error);
    const message =
      error instanceof Error ? error.message : "Erro desconhecido";
    return NextResponse.json(
      { error: "Erro ao criar gallery item", details: message },
      { status: 500 }
    );
  }
}
