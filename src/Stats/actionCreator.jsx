export const actionType = {
  ADD_TRANS: 'ADD_TRANS',
};

export function addNewTransaction(type, date, amount, icon) {
  return {
    type: actionType.ADD_TRANS,
    data: {
      type, date, amount, icon,
    },
  };
}
