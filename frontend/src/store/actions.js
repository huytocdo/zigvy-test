export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';

export const countUp = () => {
  return {
    type: COUNT_UP
  }
}

export const countDown = () => {
  return {
    type: COUNT_DOWN
  }
}