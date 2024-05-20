import { Request, Response, Router } from 'express'
import imageUpload from '../config/multer';
import { CarModel } from '../models/Car';
import { handleUpload } from '../config/cloudinary';

const router = Router();

router.get('/', async (_, res: Response) => {
    const cars = await CarModel.query();
    res.status(200).json({ message: "success", cars });
});

router.get('/:id', async (req: Request, res: Response) => {
    const car = await CarModel.query().findById(req.params.id);
    res.status(200).json({ message: "success", car });
});

router.post('/', imageUpload.single('image'), async (req: Request, res: Response) => {

    const { name, price, start_rent, finish_rent } = req.body;

    const bufferBase64: string | undefined = req.file?.buffer.toString("base64");
    const file: string = `data:${req.file?.mimetype};base64,${bufferBase64}`;

    const { secure_url } = await handleUpload(file);

    const car = await CarModel.query().insert({
        name,
        picture: secure_url,
        price,
        start_rent,
        finish_rent,
    })

    res.status(201).json({
        message: 'Car created',
        car
    })
});

router.put('/:id', imageUpload.single('image'), async (req: Request, res: Response) => {

    const { id } = req.params
    const { name, price, start_rent, finish_rent } = req.body;

    const bufferBase64: string | undefined = req.file?.buffer.toString("base64");
    const file: string = `data:${req.file?.mimetype};base64,${bufferBase64}`;

    const { secure_url } = await handleUpload(file);

    const car = await CarModel.query().findById(id).patch({
        name,
        picture: secure_url,
        price,
        start_rent,
        finish_rent,
        updated_at: new Date()
    }).returning('*')

    return res.status(200).json({
        message: 'success',
        car
    })

});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    await CarModel.query().deleteById(id)
    res.status(200).json({
        message: 'success',
    })
});


export default router
