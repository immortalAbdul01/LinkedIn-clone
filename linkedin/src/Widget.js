import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widget() {
    const newsArticle = (heading, subtitle) => (
        <div className='widget_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className="wigets_articleRight">
                <h4>
                    {heading}
                </h4>
                <p>
                    {subtitle}
                </p>
            </div>

        </div>
    )



    return (
        <div className='widget'>
            <div className="widgets_header">
                <h2>LinkedIn news</h2>
                <InfoIcon />

            </div>
            {newsArticle("Dr.Drake Rumoray dies", "character of Dr.Drake Rumoray played by Joey tribbinai from the famous show Days of our lives has been died by falling down from the elevator ")}
        </div>
    )
}

export default Widget
