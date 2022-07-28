
const wordlists = {
    3: [
        'Ufa',
        'Man',
        'Pau'
    ],
    4: [
        'Keiv',
        'Oslo',
        'Omsk',
        'Reno',
        'Erie',
        'Yuma',
        'Mesa',
        'Rome',
        'Waco',
        'Cork',
        'Fuji',
        'Giza',
        'Jena',
        'Kofu',
        'Lima',
        'Nice',
        'Orsk',
        'Palu',
        'Qufu',
        'Suez',
        'Tula',
        'York',
        'Zama'
    ],
    5: [
        'China',
        'India',
        'Omaha'

    ],
    6: [
        'Boston',
        'Bangor',
        'Panama'
    ]
}

export function getWordlist(length: number = 4): string[] {
    const validWords = wordlists[length]
    if (!validWords) {
        throw new Error(`No wordlist for length ${length}`)
    }
    return randShuffle(validWords)
}

export function isValidGuess(word: string, guess: string): boolean {
    return word.includes(guess)
}

function randShuffle(arr: string[]): string[] {
    const copy = arr.slice()
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        const temp = copy[i]
        copy[i] = copy[j]
        copy[j] = temp
    }
    return copy
}