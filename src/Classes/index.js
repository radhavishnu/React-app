import './index.css'

function Classes(){
    const color="blue"
    const dangerous=true;
    return(
        // <div>
        //     <h2> Classes</h2>
        //     <div className='wd-bg-yellow wd-fg-black wd-padding-10px'>
        //         Yellow Backgraound
        //     </div>
        //     <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
        //         Blue Backgraound
        //     </div>
        //     <div className='wd-bg-red wd-fg-black wd-padding-10px'>
        //         Red Backgraound
        //     </div>
        // </div>
        // <div>
        //     <h2> Classes</h2>
        //     <div className= {`wd-bg-${color} wd-fg-black wd-padding-10px`}> 
        //     Dynamic color </div>
        // </div>
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous ? 'wd-bg-red':'wd-bg-green'} wd-fg-black wd-padding-10px`}>
                dangerous Backgraound
            </div>
            <div className= {`wd-bg-${color} wd-fg-black wd-padding-10px`}> 
         Dynamic color </div>

        </div>

    )
}
export default Classes