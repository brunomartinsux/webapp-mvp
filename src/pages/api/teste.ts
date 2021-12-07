import { createSimulate } from '../../../firebase/questions'

export default async function handler(res: any) {

    const response = await createSimulate()

    res.json(response)
}