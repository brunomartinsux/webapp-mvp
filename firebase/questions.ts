import { firestore } from './initClient'
import { DocumentData } from '@firebase/firestore-types'

const createSimulate = async () => {
    let responseArray: DocumentData[] = []

    const snapshot = await firestore.collection('questions').limit(80).get()
    snapshot.docs.forEach( docs => {
        let questionData = docs.data()
        questionData.id = docs.id
        responseArray.push(questionData)
    })

    return responseArray
}

export { createSimulate }