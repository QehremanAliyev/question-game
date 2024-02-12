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

let index = 0;
function showQuestion() {
    const sual = suallar[index];
    document.querySelector("#suallar").innerHTML=sual.sual;
    document.querySelector("#first-answer").innerHTML=cavablar
}

function next () {

}