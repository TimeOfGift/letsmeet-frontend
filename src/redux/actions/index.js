import { Index } from "../actionCreators";

const firstAction = () => (dispatchEvent) => {
  dispatchEvent({
    type: Index,
    payload: [arg, arg1],
  });
};

export { firstAction };
