// Union
type NoobDeveloper = {
    name: string,
};

type JuniorDeveloper = {
    name: string,
    expertise: string,
    experience: number
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Modon',
    expertise: 'Javascript',
    experience: 5
}

// Intersection
type NoobPlayer = {
    name: string,
}

type JuniorPlayer = NoobPlayer & {
    expertise: string,
    experience: number
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
    level: 'junior' | 'mid' | 'senior'
}

const newPlayer: NoobDeveloper | JuniorPlayer = {
    name: 'Sajid',
    expertise: 'Football',
    experience: 2
}

const player: NextLevelDeveloper = {
    name: 'Sajid',
    expertise: 'Football',
    experience: 2,
    leadershipExperience: 1,
    level: 'mid'
}