import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Günlük Sayaç', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it('başlangıçta 0 gösterir ve boş durum ekranını render eder', () => {
    render(<App />);
    expect(screen.getByText('0')).toBeInTheDocument();
    expect(screen.getByText('Henüz hiçbir kayıt yok. Başlamak için butona dokunun.')).toBeInTheDocument();
  });

  it('Artır butonuna tıklayınca sayacı arttırır', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Artır'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Azalt butonuna tıklayınca sayacı azaltır', () => {
    render(<App />);
    // Re-query button after each click because screen may switch between BosDurum and AnaSayfa
    fireEvent.click(screen.getByLabelText('Artır'));
    fireEvent.click(screen.getByLabelText('Artır'));
    fireEvent.click(screen.getByLabelText('Azalt'));
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('Sıfırla butonuna tıklayınca sayacı sıfırlar', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Artır'));
    fireEvent.click(screen.getByLabelText('Artır'));
    fireEvent.click(screen.getByLabelText('Artır'));
    fireEvent.click(screen.getByLabelText('Sıfırla'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('negatif değere düşebilir', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Azalt'));
    fireEvent.click(screen.getByLabelText('Azalt'));
    expect(screen.getByText('-2')).toBeInTheDocument();
  });

  it('localStorage içinde sayaç değerini saklar', () => {
    render(<App />);
    fireEvent.click(screen.getByLabelText('Artır'));
    fireEvent.click(screen.getByLabelText('Artır'));
    expect(localStorage.getItem('daily-counter')).toBe('2');
  });

  it('sayfa yeniden yüklenince localStorage değerini geri yükler', () => {
    localStorage.setItem('daily-counter', '7');
    render(<App />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('sıfırla localStorage anahtarını kaldırır', () => {
    localStorage.setItem('daily-counter', '5');
    render(<App />);
    fireEvent.click(screen.getByLabelText('Sıfırla'));
    expect(localStorage.getItem('daily-counter')).toBeNull();
  });
});
