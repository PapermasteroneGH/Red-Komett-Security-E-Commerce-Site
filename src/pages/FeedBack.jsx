

function FeedBack() {
    
    return(
        <>
            <div id="feedback-div">
                <form method="get">
                    <div id="feedback-type">
                        <input type="checkbox">
                            Product
                        </input>
                        <input type="checkbox">
                            Service
                        </input>
                    </div>
                    <div>
                        <label id="improvements">
                            What can you see being improved in our services?
                        </label>
                        <input type="radio" for="improvements">
                            Formality
                        </input>
                        <input type="radio">
                            
                        </input>
                        <input type="radio">
                            System Opt
                        </input>
                    </div>

                    <input 
                    type="textarea"
                    >
                    </input>
                    <input
                    type="submit"
                    ></input>
                </form>
            </div>
        </>
    )
}

export default FeedBack