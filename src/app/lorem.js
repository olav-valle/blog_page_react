import { LoremIpsum } from 'lorem-ipsum'

export const lorem = new LoremIpsum(
    {
        sentencesPerParagraph: {
            max: 8,
            min: 3
        },
        wordsPerSentence: {
            max: 15,
            min: 1
        }
    }
)