let styles = [
    {
        name: 'color',
        value: 'red'
    },
    {
        name: 'font-size',
        value: '16px'
    },
    {
        name: 'text-align',
        value: 'center'
    },
    {
        name: 'text-decoration',
        value: 'none'
    }
]

function applayStyle(styles, text){
    let stylesString = ''
    styles.forEach(style => {
        stylesString += `${style.name}: ${style.value};`
    })

    document.write(`<p style="${styleString}">${text}</p>`)
}

applayStyle(styles, 'Some Text')