type optionsGame = 'PIEDRA ✊' | 'PAPEL ✋' | 'TIJERAS ✌️';
export const options: optionsGame[]=['PIEDRA ✊', 'PAPEL ✋', 'TIJERAS ✌️'];

type userInfo = {
    name: string,
    score: number
}
export const infoUser: userInfo[]=[{
    name: '',
    score: 0
}];

export const infoPc: userInfo[]=[{
    name: 'maquina',
    score: 0
}];