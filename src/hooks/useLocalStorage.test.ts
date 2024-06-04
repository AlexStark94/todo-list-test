import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from './useLocalStorage';

describe('useLocalStorage hook', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should initialize with the initial value', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [storedValue] = result.current;

    expect(storedValue).toBe('initialValue');
  });

  it('should retrieve an existing value from localStorage', () => {
    localStorage.setItem('testKey', JSON.stringify('existingValue'));
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [storedValue] = result.current;

    expect(storedValue).toBe('existingValue');
  });

  it('should update the value in localStorage', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [, setValue] = result.current;

    act(() => {
      setValue('newValue');
    });

    const [storedValue] = result.current;
    expect(storedValue).toBe('newValue');
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
  });

  it('should handle JSON parse errors and return the initial value', () => {
    localStorage.setItem('testKey', 'invalidJSON');
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));
    const [storedValue] = result.current;

    expect(storedValue).toBe('initialValue');
  });
});
