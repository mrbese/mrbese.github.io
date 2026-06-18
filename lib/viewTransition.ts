// Shared queue of resolvers for in-flight View Transitions.
// TransitionLink starts a transition and parks a resolver here; the
// RouteTransitionWatcher drains them once the new route has painted, which
// is the moment the browser captures the "new" snapshot and cross-fades.
export const pendingTransitions: Array<() => void> = [];
