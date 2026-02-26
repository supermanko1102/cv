"use client";

import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Unhandled UI error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <main className="mx-auto mt-8 max-w-2xl rounded border border-red-200 bg-red-50 p-4 text-red-900">
          Something went wrong while rendering this page.
        </main>
      );
    }

    return this.props.children;
  }
}
