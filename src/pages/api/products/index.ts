import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany();
    res.json(products);
  } else if (req.method === "POST") {
    const { name, price, description, image } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        price: parseFloat(price),
        description,
        image,
      },
    });
    res.json(product);
  }
}
