import React from 'react'
import ImgsViewer from 'react-images-viewer'

class PortfolioContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    
    }

    closeViewer() {
        console.log('closed')
    }
    
    
    render() {
        return (
        
            <body>
        <section>
            <ImgsViewer 
            imgs={[
                { src: 'https://www.google.se/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png' }
            ]}
        /*     currImg={this.state.currImg}
        isOpen={this.state.viewerIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext} */
        onClose={this.closeViewer}
            />
        </section>
            </body>
        )
    }
}

    export default PortfolioContainer