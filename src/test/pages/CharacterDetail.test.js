import { render, screen, cleanup } from '@testing-library/react';
import CharacterDetail from '../../pages/CharacterDetail/CharacterDetail';
import getFormattedName from '../../pages/CharacterDetail/CharacterDetail.js';
import TestRenderer from 'react-test-renderer';

describe('CharacterDetail page tests', () => {

    beforeEach(() => {
        const match = {
            params: {
                name: 'rick-sanchez'
            }
        }

        render(<CharacterDetail match={match}/>)
    })
    // it('should renders correctly', () => {
    //     const match = {
    //         params: {
    //             name: 'rick-sanchez'
    //         }
    //     }

    //     render(<CharacterDetail match={match}/>)
    // })

    describe('', () => {
        it('should return deneme1', () => {
            const match = {
                params: {
                    name: 'rick-sanchez'
                }
            }

            const testRenderer = TestRenderer.create(<CharacterDetail match={match}/>);
            let testInstance = testRenderer.root;
            console.log('AAAAAAAA', characterDetailInstance.root);
            expect(testInstance.deneme()).toBe('deneme1');

        })

    })

})
