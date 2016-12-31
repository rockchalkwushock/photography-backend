export const loadState = () => {
  try {
    const auth = localStorage.getItem('giveMeThatIdea.auth'); // eslint-disable-line
    if (auth === null) return undefined;
    return JSON.parse(auth);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const auth = JSON.stringify(state);
    localStorage.setItem('giveMeThatIdea.auth', auth); // eslint-disable-line
  } catch (err) {
    console.log(err);
  }
};
