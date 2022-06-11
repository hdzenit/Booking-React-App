import './featured.css';

export default function Featured() {
    return (
        <>
            <div className='featured'>
                <div className="featuredItem">
                    <img src="https://www.ictours.hr/wp-content/uploads/2020/02/sarajevo-grad-vjecnog-optimizma-1-dio-636978405965420606-1_870_490.jpeg" alt="" className='featuredImg' />
                    <div className='featuredTitles'>
                        <h1>Sarajevo</h1>
                        <h2>123 proporties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://i.pinimg.com/550x/df/76/39/df76390e22f31bdadec64bb0f5181376.jpg" alt="" className='featuredImg' />
                    <div className='featuredTitles'>
                        <h1>Mostar</h1>
                        <h2>456 proporties</h2>
                    </div>
                </div>
                <div className="featuredItem">
                    <img src="https://visitmycountry.net/bosnia_herzegovina/bh/images/stories/aktuelnosti/2015/31.03/vodopad-jajce-11.jpg" alt="" className='featuredImg' />
                    <div className='featuredTitles'>
                        <h1>Jajce</h1>
                        <h2>789 proporties</h2>
                    </div>
                </div>
            </div>
        </>
    )
}
