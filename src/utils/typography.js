import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

const typography = new Typography({
    googleFonts: [
        {
            name: 'Pacifico',
            styles: [
                '400',
            ],
        },
        {
            name: 'Leckerli One',
            styles: [
                '400',
            ],
        },
        {
            name: 'Patua One',
            styles: [
                '400',
            ],
        },
        {
            name: 'Shrikhand',
            styles: [
                '400',
            ]
        },
        {
            name: 'Nanum Gothic',
            styles: [
                '400',
                '700',
                '800',
            ],
        },
    ],
    headerFontFamily: ['Leckerli One', 'cursive'],
    bodyFontFamily: ['Nanum Gothic', 'sans-serif'],
    bodyWeight: '400',
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        h4: {
            fontFamily: ['Patua One', 'cursive'].join(','),
            fontWeight: 500,
        },
        a: {
            fontFamily: ['Pacifico', 'cursive'].join(','),
        },
        footer: {
            fontSize: `small`,
        }
    }),
})

export const { scale, rhythm, options } = typography
export default typography
