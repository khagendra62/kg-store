import express from "express" 	
import { deleteProduct, getProducts, postProduct, putProduct } from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts)

router.post("/", postProduct); 

// console.log(process.env.MONGO_URI)

router.put("/:id", putProduct)

router.delete("/:id", deleteProduct)

export default router;