import {Router} from 'express';

const router = Router();

router.get('/', (req, res)=> {
    return res.json({
        msg: "Welcome to the Moon Gallery"
    })
})

export default router;