import * as React from 'react';

export type IErrorBoundaryProps = { children?: React.ReactNode };
export type IErrorBoundaryState = { hasError: boolean };

export class ErrorBoundary extends React.PureComponent<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  public state: IErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    } else {
      return this.props.children;
    }
  }
}
