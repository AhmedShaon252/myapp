import React from 'react'

class Clock extends React.Component{
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        const { date, locale } = this.state;
        return (
            <div>
                <h1>
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1>
                {locale === 'bn-BD' ?(
                    <button onClick={this.handleClick} locale="en-US">
                        Click here to English
                    </button>
                ):(
                    <button onClick={this.handleClick} locale="bn-BD">
                        Click here to Bangla
                    </button>
                )}
                
            </div>
        );
    }
}
export default Clock