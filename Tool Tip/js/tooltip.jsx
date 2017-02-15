class Tooltip extends React.Component{
    constructor(props){
        super(props) //The super keyword is used to call functions on an object's parent.
        this.state = {opacity: false}
        this.toggle = this.toggle.bind(this) // a function call that is bound
    }
    toggle(){
        var tooltip = ReactDOM.findDOMNode(this)
        this.setState({
            opacity: !this.state.opacity,
            top: tooltip.offsetTop,
            left: tooltip.offsetLeft,
            
        })
    }
    render(){
        const style = {
        zIndex: (this.state.opacity) ? 1000 : -1000,
        opacity: +this.state.opacity, // + is used to convert boolean to binary conversion as opacity = 1 not boolean
        top: (this.state.top || 0) + 20,
        left: (this.state.left || 0) -30
        }
        return (
        <div style={{display: 'inline'}}>
        <span style={{color: 'blue'}}
        onMouseEnter={this.toggle}
        onMouseOut={this.toggle}>
        {this.props.children} {/*every thing written as text*/}
        
        </span>
        <div className="tooltip bottom" style={style} role="tooltip"> 
        <div className="tooltip-arrow"></div> 
        <div className="tooltip-inner">
        {this.props.text} 
        </div>
        </div>
        </div>
        )
    }
}


//////// rendering/////////////////
ReactDOM.render(
<div>
<Tooltip text="sometimes styled React.js or ReactJS">React</Tooltip>
is an open-source JavaScript library 
for building user interfaces. It is maintained by  <Tooltip text="a social network">Facebook</Tooltip> ,<Tooltip text="a social network">Instagram</Tooltip>
 and a community of individual developers and corporations.
</div>
,
document.getElementById('app')
)