import { useEffect, useState } from 'react'
import './App.css'

interface CardState {
    value: string;
    isChecked: boolean;
}

const lines: string[] = [
    'Zere benen',
    'Nee nee nee',
    'Buurt zorg',
    'Hoef niet meer',
    'Zie niemand',
    'Kom nergens',
    'Rinus',
    'Zonne bloem',
    'Hulp',
    'Was',
    'Plek hoofd',
    'Zeker geen',
    'Rollator',
    'Planten',
    'Kerst',
    'Wanneer vrij',
    'Vogel voer',
    'Buren',
    'Klaver jassen',
    'Van der Wal',
    'Bets',
    'Jenever',
    'Opladen scoot mobiel',
    'Corona',
    'Bood schappen'
];

function App() {

    const [cards, setCards] = useState<CardState[][]>([])

    const shuffleArray = (array: string[]): string[] => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }

        return array
    }


    const fillCard = () => {
        const curArr = shuffleArray([...lines])
        const newArr: CardState[][] = []

        for (let i = 0; i < 5; i++) {
            newArr.push([])
            for (let j = 0; j < 5; j++) {
                const randomWord = curArr.pop()
                newArr[i].push({
                    value: (randomWord) ? randomWord : '',
                    isChecked: false
                })
            }
        }

        console.log(newArr)
        setCards(newArr)
    }

    useEffect(() => {
        fillCard()
    }, []);

    return (
        <>
            <h1>Bingo</h1>
            {cards.map((row, rowIndex) => {
                return <div className="container-row">
                    {row.map((x, xIndex) => {
                        return <div
                            className={`card-container ${x.isChecked ? 'checked' : ''}`}
                            onClick={() => {
                                const copy = cards
                                copy[rowIndex][xIndex] = {
                                    value: x.value,
                                    isChecked: !x.isChecked
                                }

                                setCards([...copy])
                            }}
                        >
                            {x.value}
                        </div>
                    })}
                </div>
            })}
        </>
    )
}

export default App
