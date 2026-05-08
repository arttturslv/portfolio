/** @format */

"use server";

import { headers } from "next/headers";
import { ContactMyselfService } from "../app/api/contact/service";

export interface ContactMe {
  senderName: string;
  senderEmail: string;
  subject: string;
  senderIp?: string;
}

interface sendContactActionResponse {
  success: boolean;
  error?: string;
}

export async function sendContactAction(
  values: ContactMe,
): Promise<sendContactActionResponse> {
  const headerList = await headers();
  const forwarded = headerList.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0] : "IP não encontrado";

  try {
    await ContactMyselfService({ ...values, senderIp: ip });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Ocorreu um erro no servidor. Tente novamente mais tarde.",
    };
  }
}
