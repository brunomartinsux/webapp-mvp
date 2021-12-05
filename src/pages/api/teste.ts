import { createSimulate } from '../../../firebase/questions'

export default async function handler(req: Request, res: any) {

    const response = await createSimulate()

    res.json(response)
}