let vegetables = [
    "agurkas",
    "pomidoras",
    "salieras",
    "bulvė",
    "morka",
    "moliūgas",
    "brokolis",
    "paprika",
    "artišokas",
]

function randomWord() {
    return vegetables[Math.floor(Math.random() * vegetables.length)]
}

export { randomWord }