import cors from 'cors';

const corsMiddleware = cors({
  origin: 'https://crudbrunomernstack.netlify.app',
  optionsSuccessStatus: 200,
});

export default async function verify(req:any, res:any, next:any){
    await corsMiddleware(req!, res!, next!);

    res.json({"message": "hello"})
}