import { render, screen, cleanup } from '@testing-library/react';
import CharacterDetail from '../../pages/CharacterDetail/CharacterDetail';
import getFormattedName from '../../pages/CharacterDetail/CharacterDetail.js';
import {create, act} from 'react-test-renderer';

describe('CharacterDetail page tests', () => {
    it('should renders correctly', () => {
        const match = {
            params: {
                name: 'rick-sanchez'
            }
        }

        render(<CharacterDetail match={match}/>)
    })

    describe('', () => {
        it('', () => {
            // methods.capitalize()

        })

    })

})
