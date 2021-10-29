import { Router } from 'express';
import config from '../config/index.config'
import Image from '../models/Image'
import AWS from 'aws-sdk';

const router = Router();

const spacesEndpoint = new AWS.Endpoint(config.Endpoint);

const s3 = new AWS.S3({
    endpoint: spacesEndpoint
})

router.get('/api/images', async (req, res) =>{
    const images = await Image.find();
    return res.json(images);
});
router.get('/api/images/:id', async (req, res) =>{
    const image = await Image.findById(req.params.id);
    return res.json(image);
});
router.post('/api/images/upload', async (req, res) =>{
    if (!req.files) return res.json({ msg: "No file found" });

    const image = req.files.file;

    try {
        const uploadObj = await s3.putObject({
            Bucket: config.BucketName,
            Body: image.data,
            ACL: 'public-read',
            Key: image.name
        }).promise()

        const imageUrl = `https://${config.BucketName}.${config.Endpoint}/${image.name}`;
        console.log(imageUrl);

        const imageModel = new Image({
            key: image.name,
            url: imageUrl,
            title: req.body.title
        })

        await imageModel.save();

        return res.json(imageModel);

    } catch (error) {
        console.log(error);
    }

    
});
router.delete('/api/images/:id', async (req, res) =>{
    const delImg = await Image.findByIdAndDelete(req.params.id);

    await s3.deleteObject({
        Bucket: config.BucketName,
        Key: delImg.key
    }).promise();

    return res.json(delImg);
});

export default router;