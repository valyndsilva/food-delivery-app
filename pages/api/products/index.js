import dbConnect from "../../../util/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res, next) {
  const { method } = req;

  // Connect to dbConnect
  await dbConnect();

  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (err) {
      res.status.json({ message: err.message });
    }
  }
  if (method === "POST") {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
