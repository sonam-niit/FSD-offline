import React, { type ReactNode } from "react";

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean,
    msg: string
}

class ErrorBoundry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, msg: "" };
    }
    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, msg: error.message }
    }
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Error Cought: ", error)
        console.log("Error Info: ", errorInfo)
    }
    render() {
        if (this.state.hasError) {
            return (<>
                <h2>Something Went Wrong</h2>
                <h3>{this.state.msg}</h3>
            </>)
        }
        return this.props.children;
    }
}

export default ErrorBoundry;