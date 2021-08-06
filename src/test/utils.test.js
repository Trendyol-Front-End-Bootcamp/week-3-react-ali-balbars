import { capitalize,  linkToName, nameToLink} from '../utils.js';

describe('test capitalize function', () => {
    it('should make string first letter capitalized', () => {
        const str = 'test'
        const result = capitalize(str)
        expect(result).toBe('Test')
    })
    
    it('should return empty string when passing undefined', () => {
        let str;
        const result = capitalize(str)
        expect(result).toBe('')
    })

})

describe('test getFormattedName function', () => {
    it('should return formatted link name', () => {
        const linkName = 'rick-sanchez'
        const result = linkToName(linkName)
        expect(result).toBe('Rick Sanchez')
    })

    it('should return empty string when passing undefined', () => {
        let linkName;
        const result = linkToName(linkName)
        expect(result).toBe('')
    })
})
