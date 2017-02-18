var Menu = React.createClass({

     render: function(){
     var menus= ['HOME','GALLARY','ABOUT US','CONTACT US'];

        return React.DOM.div(
        null,
        menus.map((value,index)=>{
            return React.DOM.div(
            {key: index},
            React.createElement(Link, {label: value})
            );
        })
        );
     }

 });
 

var Link = React.createClass({
    render:function(){
        const url = "/"+this.props.label.toLowerCase().trim().replace(' ','-');
        return React.DOM.div(
                null,
                React.DOM.a(
                {href: url},
                this.props.label
                ),
                React.DOM.br()
        );
    }
});

 
 
 //////////////// menu rendering/////////////////////
 ReactDOM.render(
     React.createElement(Menu,
     { className: menu}
     ),
     document.getElementById("menu")
        );