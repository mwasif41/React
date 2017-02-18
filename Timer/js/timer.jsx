class Timer extends React.Component {
  render() {
    if (this.props.timeLeft == null || this.props.timeLeft == 0)
      return <div/>
    return <h1>Time left: {this.props.timeLeft}</h1>
  }
}


class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time)
  }
  render() {
    return <button
      type="button"
      className='btn-default btn'
      onClick={()=>{this.props.startTimer(this.props.time)}}>
      {this.props.time} seconds
    </button>
  }
}

class TimerWrapper extends React.Component {
  constructor(props) {
    super(props)
            // timeLeft vo k kitna time bacha
        //timer vo jo set interval kar raha hy

    this.state =  {timeLeft: null, timer: null}
    this.startTimer = this.startTimer.bind(this)
  }
  startTimer(timeLeft) {
    clearInterval(this.state.timer)
    let timer = setInterval(() => {
      var timeLeft = this.state.timeLeft - 1
      if (timeLeft == 0) clearInterval(timer)
      this.setState({timeLeft: timeLeft})
    }, 1000)
    return this.setState({timeLeft: timeLeft, timer: timer})
  }
  render() {
    return (
      <div className="row-fluid">
        <div className="btn-group" role="group" >
          <Button time="5" startTimer={this.startTimer}/>
          <Button time="10" startTimer={this.startTimer}/>
          <Button time="15" startTimer={this.startTimer}/>
        </div>
        <Timer timeLeft={this.state.timeLeft}/>
      </div>
    )
  }
}


//////////// RENDERING /////////////////////

ReactDOM.render(
    <TimerWrapper/>,
    document.getElementById('timer-comp')    
)