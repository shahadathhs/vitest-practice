import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('useCounter Hook', () => {
  const setup = () => renderHook(() => useCounter());

  it('should initialize count to 0', () => {
    const { result } = setup();
    expect(result.current.count).toBe(0);
  });

  it('should increment the count', () => {
    const { result } = setup();
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement the count', () => {
    const { result } = setup();
    act(() => {
      result.current.increment();
      result.current.decrement();
    });
    expect(result.current.count).toBe(0);
  });

  it('should reset the count', () => {
    const { result } = setup();
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(0);
  });
});
