import { render, screen } from '@testing-library/react';
import { afterEach, expect, test, vi } from 'vitest';
import App from './App';

afterEach(() => vi.restoreAllMocks());

test('muestra el estado vacío', async () => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: true, json: async () => [] });
  render(<App />);
  expect(await screen.findByText('Todavía no hay gastos.')).toBeTruthy();
});

test('muestra el estado de error', async () => {
  vi.spyOn(globalThis, 'fetch').mockResolvedValue({ ok: false });
  render(<App />);
  expect(await screen.findByRole('alert')).toBeTruthy();
});
