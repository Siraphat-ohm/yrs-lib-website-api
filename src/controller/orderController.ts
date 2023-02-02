import { Request, Response } from "express";
import { Order } from "../entity/Order";


const handleOrder = async(req:Request, res:Response, next:Function) => {
    try {
        const data = await Order.find()
        res.json(data).status(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(404);
    }
}

export default { handleOrder };