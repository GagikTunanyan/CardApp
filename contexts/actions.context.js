import { createContext } from 'react';

export const Actions = createContext({
    addCard: () => ({}),
    sortCard: () => ({}),
    sorted: false,
    clear: () => ({})
})