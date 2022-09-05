import dbConnect from "../../../util/mongodb";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  // Connect to dbConnect
  await dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status.json({ message: err.message });
    }
  }
  if (method === "PUT") {
    // update product
    try {
      const product = await Product.findByIdAndUpdate(id, req.body, {
        new: true,
      }); //new:true returns the most updated version
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
  if (method === "DELETE") {
    // delete product
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json("The product has been deleted!");
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
}
