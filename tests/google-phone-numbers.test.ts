// https://www.youtube.com/watch?v=PIeiiceWe_w

// convert words into the mapped numeric equiv
function convertLettersToNumbers(words: string[]): Record<string, string> {
    const letterMap = {'abc': 2, 'def': 3, 'ghi': 4, 'jkl': 5, 'mno': 6, 'pqrs': 7, 'tuv': 8, 'wxyz': 9}

    function l2n(letter: string): number {
        const keys = Object.keys(letterMap)
        for(let i=0; i<keys.length; i++) {
            if (keys[i].includes(letter)) {
                return letterMap[keys[i]]
            }
        }
        throw "letter not found"
    }

    const numbers: Record<string, string> = {}
    words.forEach(word => {
        numbers[word] = word.split('').map((letter: string) => {
            return l2n(letter)
        }).join('')
    })
    return numbers
}

it("should find some of the words", () => {
    const phoneNumber = "3662277"
    const words = ["foo", "bar", "baz", "foobar", "emo", "cap", "car", "cat"]
    const numbers = convertLettersToNumbers(words)

    const received: Record<string, boolean> = {}
    Object.keys(numbers).forEach((key: string) => {
        received[key] = phoneNumber.includes(numbers[key])
    })

    const expected = ["foo", "bar", "foobar", "emo", "cap", "car"]
    expected.forEach(val => {
        expect(received[val]).toBeTruthy()
    })
})