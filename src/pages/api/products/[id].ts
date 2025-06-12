import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = Number(req.query.id);

  if (req.method === "GET") {
    const product = await prisma.product.findUnique({ where: { id } });
    res.json(product);
  } else if (req.method === "PUT") {
    const { name, price, description, image } = req.body;
    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        price: parseFloat(price),
        description,
        image,
      },
    });
    res.json(product);
  } else if (req.method === "DELETE") {
    await prisma.product.delete({ where: { id } });
    res.json({ message: "Deleted" });
  }
}
