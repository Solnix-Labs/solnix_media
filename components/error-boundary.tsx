'use client'
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error boundary caught an error:', error, errorInfo);

        // You can log to an error reporting service here
        if (typeof window !== 'undefined' && 'gtag' in window) {
            // @ts-expect-error gtag is a global function added by Google Analytics
            window.gtag('event', 'exception', {
                description: error.toString(),
                fatal: false,
            });
        }
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="flex min-h-[400px] flex-col items-center justify-center p-8 text-center">
                    <div className="max-w-md space-y-4">
                        <h2 className="text-2xl font-semibold text-destructive">
                            Oops! Something went wrong
                        </h2>
                        <p className="text-muted-foreground">
                            We apologize for the inconvenience. An unexpected error occurred while loading this section.
                        </p>
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <details className="mt-4 text-left">
                                <summary className="cursor-pointer text-sm font-medium">
                                    Error Details (Development Only)
                                </summary>
                                <pre className="mt-2 overflow-auto rounded bg-muted p-2 text-xs">
                                    {this.state.error.toString()}
                                </pre>
                            </details>
                        )}
                        <div className="flex gap-2 justify-center">
                            <Button onClick={this.handleReset} variant="outline">
                                Try Again
                            </Button>
                            <Button onClick={() => window.location.reload()}>
                                Reload Page
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
} 