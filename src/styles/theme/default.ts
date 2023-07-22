export const defaultTheme = {
    background: '#1A1A1A', // background
    'background-secondary': '#262626', // Input/Menu
    fontColor: '#F2F2F2', // font 
    fontColorSecondary: '#808080', // Completed task 
    fontColorButton: '#F2F2F2',
    hoverDanger: '#E25858', // Hover delete 
    active: '#4EA8DE', // Active/Hover 
    button: ' #1E6F9F', //Button
    svgColorIcon: '#ffff33'
}

export const lightTheme = {
    background: '#F3F3F3',
    'background-secondary': '#D9D9D9',
    fontColor: '#000',
    fontColorSecondary: '#525252',
    fontColorButton: '#F2F2F2',
    hoverDanger: '#F00000',
    active: '#0000e6',
    button: ' #0000cc ',
    svgColorIcon: '#0000a3'
}

const size = {
    sm: '525px',
    md: '768px',
}

export const device = {
    smartphone: `(max-width: ${size.sm})`,
    tablet: `(max-width: ${size.md})`

}