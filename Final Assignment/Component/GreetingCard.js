import React from 'react'

function GreetingCard(props){
    return (
        <div>
            <center>
                <h2>Welcome to the React Example of props. Props is used to send / transfer data from parent to all child Components.</h2>
                <b><p style={
                    {
                        fontSize:30,
                        backgroundColor:'orange',
                        alignItems:'center'
                        
                    }
                }>{props.data} -- USE OF PROPS HERE</p></b>
            </center>
        </div>
    )
}

export default GreetingCard