import { Index } from "../action-creators";

const firstAction = () => (dispatchEvent) => {
  dispatchEvent({
    type: Index,
    payload: [arg, arg1],
  });
};

export { firstAction };
