import React from "react";

function FanImage (props) {
    return (
            <div className="col-sm my-2">
              <div className="card col-sm" style={{width: "18rem" }}>
                <a href={props.image.mainUrl}>
                <img src={props.image.imageUrl} className="card-img-top" alt="..." />
                </a>
                <div className="card-body" style={{"textAlign":"center"}}>
                    <p>{props.image.id}</p>
                    <button type="button" className="btn btn-primary" id={props.image.id} onClick={props.onHide}>Hide</button>
                </div>
              </div>
            </div>
    )
}

export default FanImage;