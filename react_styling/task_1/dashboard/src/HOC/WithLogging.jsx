import React from "react";

/**
 * WithLogging HOC
 * - Logs on mount and unmount
 * - displayName: WithLogging(<NAME>)
 * - <NAME> = Wrapped.displayName || Wrapped.name || "Component"
 */
function WithLogging(WrappedComponent) {
  const name =
    WrappedComponent?.displayName || WrappedComponent?.name || "Component";

  class WithLoggingHOC extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  WithLoggingHOC.displayName = `WithLogging(${name})`;
  return WithLoggingHOC;
}

export default WithLogging;
