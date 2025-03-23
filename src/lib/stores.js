import { writable } from 'svelte/store';

const initial = typeof window !== 'undefined' ? 
  localStorage.getItem('darkMode') === 'true' : 
  false;

export const darkMode = writable(initial);

if (typeof window !== 'undefined') {
  darkMode.subscribe(value => {
    localStorage.setItem('darkMode', value);
  });
}