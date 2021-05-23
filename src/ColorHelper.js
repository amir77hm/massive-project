import chroma from "chroma-js";

function ColorHelper(oldPalette) {
    const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]
    const newPalette = {
        paletteName: oldPalette.paletteName,
        id: oldPalette.id,
        emoji: oldPalette.emoji,
        colors: {}
    }

    for (const level of levels) {
        newPalette.colors[level] = []
    }

    for (const color of oldPalette.colors) {
        const scale = getScale(color.color, 10).reverse()
        for (const i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
            })
        }
    }
    return newPalette;
}

function getScale(hexColor, numOfColor) {
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numOfColor)
}

function getRange(hexColor) {
    const end = '#fff'
    return [chroma(hexColor).darken(1.4).hex(), hexColor, end]
}

export default ColorHelper
