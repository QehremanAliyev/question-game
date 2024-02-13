const start = document.querySelector('#start')
const exit = document.querySelector('#exit')
start.onclick = function () {
    document.querySelector('#first-page').style.display = 'none'
    document.querySelector('#second-page').style.display = 'block'
}
exit.onclick = function () {
    window.close()
}

const suallar = [
    {
        sual: 'Highest capacity of the storage are -',
        cavablar: [
            {
                cavab: 'Terabyte',
                dogrudurmu: false
            },
            {
                cavab: 'Yottabyte',
                dogrudurmu: true
            },
            {
                cavab: 'Exabyte',
                dogrudurmu: false
            },
        ]
    },
    {
        sual: '1 Kilobyte is equal to -',
        cavablar: [
            {
                cavab: ' 800 Bits',
                dogrudurmu: false
            },
            {
                cavab: ' 800 Bits',
                dogrudurmu: false
            },
            {
                cavab: ' 8000 Bits',
                dogrudurmu: true
            },
        ]
    },
    {
        sual: 'Multimedia contains?',
        cavablar: [
            {
                cavab: 'Audio',
                dogrudurmu: false
            },
            {
                cavab: 'Video',
                dogrudurmu: false
            },
            {
                cavab: 'Both',
                dogrudurmu: true
            },
        ]
    },
    {
        sual: 'Which key of the keyboard is mainly used to cancel the program?',
        cavablar: [
            {
                cavab: 'Enter Key',
                dogrudurmu: false
            },
            {
                cavab: 'Esc Key',
                dogrudurmu: true
            },
            {
                cavab: 'Tab Key',
                dogrudurmu: false
            },
        ]
    },
    {
        sual: ' In the context of the Internet, what is the full form of MAN?',
        cavablar: [
            {
                cavab: 'Metropolitan Area Network',
                dogrudurmu: true
            },
            {
                cavab: 'Master Area Network',
                dogrudurmu: false
            },
            {
                cavab: 'Massive Area Network',
                dogrudurmu: false
            },
        ]
    }
]


function changeProgressBar() {
    const percentage = 100 * (index / suallar.length)
    document.querySelector('.prog-bar').style.width = percentage + '%'
}

let index = 0
let correctAnswer = 0
function showQuestion() {
    const sual = suallar[index]
    document.querySelector("#suallar").innerHTML = sual.sual
    for (let i = 0; i < sual.cavablar.length; i++) {
        document.querySelector('.variant' + (i + 1)).style.backgroundColor = '#343a40'
        const btn = document.querySelector('.answer' + (i + 1))
        btn.innerHTML = sual.cavablar[i].cavab
        btn.onclick = function () {
            if (sual.cavablar[i].dogrudurmu) {
                document.querySelector('.variant' + (i + 1)).style.backgroundColor = 'green'
                correctAnswer++
                console.log(correctAnswer)
            } else {
                document.querySelector('.variant' + (i + 1)).style.backgroundColor = 'red'
            }
            setTimeout(next, 1000)
            setTimeout(changeProgressBar, 1000)
        }
    }

}

function next() {
    index++
    const number = document.querySelector('#suall')
    number.innerHTML = `Question ${index + 1}`
    if (index > suallar.length - 1) {
        number.innerHTML = `Question 1`
        index = 0
        document.querySelector('.variant1').style.backgroundColor = '#343a40'
        document.querySelector('.variant2').style.backgroundColor = '#343a40'
        document.querySelector('.variant3').style.backgroundColor = '#343a40'
        document.querySelector('#first-page').style.display = 'block'
        document.querySelector('#second-page').style.display = 'none'
        const result = document.querySelector('#p1')
        result.innerHTML = `Total points : ${(correctAnswer * 100) / suallar.length}%`
    } else {
        showQuestion()
    }
}
showQuestion()