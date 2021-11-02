import React from "react";
import FanImage from "./FanImage";

// JTG: use Windows localStorage for data? 
const fanWorksList = [
    {
        id: 0,
        category: [],
        mainUrl: "https://cuartoretorno.tumblr.com/post/157078671622/buffi-1997",
        imageUrl: "https://64.media.tumblr.com/3c767c2c04b0c694c682c3f4ccad03aa/tumblr_ol6n04axGz1sfj28do1_640.jpg",
    },
    {
        id: 1,
        category: ["buffy"],
        mainUrl: "https://henartorinos.tumblr.com/post/157569101143/022217-my-friend-abellairia-did-a-buffy-fan",
        imageUrl: "https://64.media.tumblr.com/d0456100da4d1c17c4d4adf52c65e957/tumblr_ols3pqWX5e1sns0n3o1_500.jpg"
    },
    {
      id: 2,
      category: ["buffy"],
      mainUrl: "https://da-imaginarium.tumblr.com/post/158326990031/11-buffy-you-know-youre-getting-old-when-all",
      imageUrl: "https://64.media.tumblr.com/a7a14b3520bfbb9f7481fadbf898e52c/tumblr_omq3zwNaP21qdtql4o1_1280.jpg"
    },
    {
      id: 3,
      category: ["buffy"],
      mainUrl: "https://aaronminier.tumblr.com/post/157580280582/buffy-the-vampire-slayer",
      imageUrl: "https://64.media.tumblr.com/7c949912d19a74cce06a231f2dde0176/tumblr_olsl75mHVE1qbckzno1_1280.jpg"
    },
    {
      id: 4,
      category: ["buffy"],
      mainUrl: "https://bevinbrand.tumblr.com/post/158334369093/buffys-pilot-turned-20-the-other-day-felt-like",
      imageUrl: "https://64.media.tumblr.com/8c7e1d210f471fbceefc09f7b46c4c06/tumblr_omqdp8KRY61to9od8o1_1280.jpg"
    },
    {
      id: 5,
      category: [],
      mainUrl: "https://littleotter73.tumblr.com/post/172293800955/usuallyonlywater-im-five-by-five-here-b",
      imageUrl: "https://64.media.tumblr.com/5c70f28effa13387172f094280572ba2/tumblr_inline_p6573s86WV1qfjtkn_540.png"
    },
    {
      id: 6,
      category: [],
      mainUrl: "https://wolveswithhats.tumblr.com/post/136285142761/i-saw-their-production-of-giselle-in-1890-i",
      imageUrl: "https://64.media.tumblr.com/a593498ab7330eb90af974dbfe137a23/tumblr_o06xg8CPc91qloogjo1_1280.jpg"
    },
    {
      id: 7,
      category: ["buffy", "poster"],
      mainUrl: "https://tikimachine.tumblr.com/post/113880033017/heres-a-buffy-the-vampire-slayer-poster-i",
      imageUrl: "https://64.media.tumblr.com/ef72f06684b691bba34c92d21bb5fb0c/tumblr_nld63o57Z81uqsvq2o1_640.png"
    },
    {
      id: 8, 
      category: ["buffy"],
      mainUrl: "https://mirandakat.tumblr.com/post/126691561804/in-every-generation",
      imageUrl: "https://64.media.tumblr.com/6e7fbac902936788d092993967b32031/tumblr_nt39zrdmGH1qf9tbao1_500.jpg"
    },
    {
      id: 9,
      category: [],
      mainImage: "https://tikimachine.tumblr.com/post/158840395362/working-into-the-wee-hours-trying-to-finish-this",
      imageUrl: "https://64.media.tumblr.com/3e209f5b277375e6dc98a714713faab0/tumblr_oneqfqsOH21uqsvq2o1_1280.jpg"
    },
    {
      id: 10, 
      category: ["buffy"],
      mainImage: "https://silverspike.tumblr.com/post/159461066020/my-shoulder-angel-by-hedgehogbeeblebrox",
      imageUrl: "https://64.media.tumblr.com/71f1bcff5ee88ca4fe3d7ef7418a0c6c/tumblr_oo9e8kZK1l1qh99rio1_500.png"
    },
    {
      id: 11,
      category: [],
      mainImage: "https://restfield.tumblr.com/post/154678205595/not-thinking-about-buffy-made-for",
      imageUrl: "https://64.media.tumblr.com/d77353c5c7301fadb624d8082ad298b4/tumblr_oiekldNIQo1tzwe9zo1_500.jpg"
    },
    {
      id: 12,
      category: [],
      mainImage: "https://silverspike.tumblr.com/post/156991188140/stuntdiva-silverspike-only-the-good",
      imageUrl: "https://64.media.tumblr.com/tumblr_mad3mj4eSp1qh99rio1_500.jpg"
    },
    {
      id: 13,
      category: [],
      mainImage: "https://buffyvore.tumblr.com/image/109093261335",
      imageUrl: "https://64.media.tumblr.com/3116b0f772e06d799db6bcf8b67955e3/tumblr_nhkky8IFVm1rwwmnyo1_640.jpg"
    },
    {
      id: 14,
      category: [],
      mainImage: "https://0tterp0p.tumblr.com/post/80312652247/slumber-party-scoobies",
      imageUrl: "https://64.media.tumblr.com/5ec872c28df428fac70091627f191e35/tumblr_n2tcokgzHz1r99yw5o1_1280.jpg"
    },
    {
      id: 15, 
      category: [],
      mainImage: "https://feliciacraft.tumblr.com/post/158986621157/this-boy-hoo-manmmm-does-he-lov-that-slayer",
      imageUrl: "https://64.media.tumblr.com/17f308e0c919b3ba043d4b586e4dd0f0/tumblr_onj57kGO8i1u6pni3o1_1280.jpg"
    },
    {
      id: 16,
      category: [],
      mainImage: "https://henartorinos.tumblr.com/post/155941511198/150117-request-from-my-friend-iriaabella",
      imageUrl: "https://64.media.tumblr.com/9da895f6b748c821f9acb82a74225ff2/tumblr_ojvfb8sUM41sns0n3o1_500.jpg"
    },
    {
      id: 17,
      category: [],
      mainImage: "https://dkdraws.tumblr.com/post/159689320076/heres-to-20-years-of-slaying-3",
      imageUrl: "https://64.media.tumblr.com/eb0393145ac2485aafdc2d6d0e4a3321/tumblr_ookmi40qPk1qiohazo1_1280.png"
    },
    {
      id: 18,
      category: [],
      mainImage: "https://thesanityclause.tumblr.com/post/21335808067/welp",
      imageUrl: "https://64.media.tumblr.com/tumblr_m2ox3t3VIi1qm2i8co1_500.jpg"
    },
    {
      id: 19,
      category: [],
      mainImage: "https://www.deviantart.com/terrymooreart/art/Willow-364208126",
      imageUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/92b6e414-a97d-4c50-a764-6732e1c9f0e4/d60u8se-b3f6a27b-fdef-4842-9603-48bfedf8cbc6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzkyYjZlNDE0LWE5N2QtNGM1MC1hNzY0LTY3MzJlMWM5ZjBlNFwvZDYwdThzZS1iM2Y2YTI3Yi1mZGVmLTQ4NDItOTYwMy00OGJmZWRmOGNiYzYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ebhIevr9YHSpsSVLg4ukb2L-C7cgMpxgZNB0HzAux8I"
    },
    {
      id: 20,
      category: [],
      mainImage: "https://naimly.tumblr.com/post/171451689754/willow",
      imageUrl: "https://64.media.tumblr.com/320db7f5bf05dbdf8d244fcb3b623681/tumblr_p4xy7vQPR21sgoq2xo1_500.png"
    },
    {
      id: 21,
      category: ["buffy"],
      mainImage: "https://sibyllinesketchblog.tumblr.com/post/164567713508/buffy-is-my-childhood-i-never-draw-her-but-she",
      imageUrl: "https://64.media.tumblr.com/6c1bf0a8da56279dea4e82bceb1ac737/tumblr_ov7ehpR0hQ1qmekzjo1_500.jpg"
    },
    {
      id: 22, 
      category: [],
      mainImage: "https://iriaabella.tumblr.com/post/174509094768",
      imageUrl: "https://64.media.tumblr.com/1a422fa0b89cf7f0b61728d4d73ae0b8/tumblr_p9prq1xfa91shhc8so1_r2_500.png"
    }
];

class FanWorks extends React.Component {
  state = {
    allItems: [],
    displayItems: [],
  }

  constructor (props) {
    super(props);
    this.state.displayItems = fanWorksList.map (this.mapImages);
    this.state.allItems = this.state.displayItems;
  }

    onHide = (e) => {
      this.setState ((prevState) => {
        const newItems = prevState.displayItems.filter (item => item.key !== e.target.id);
        return {displayItems: newItems};
      })
    }

    mapImages = (image) => {
      return ( <FanImage key={image.id} image={image} onHide={this.onHide} />);
    }

    // Assumption: categories are stored as lower-case letters
    onSearch = () => {
      if (!this._searchCondition.value || !this._searchCondition.value.length)
      {
        alert ("Empty search condition; showing all results");
        this.onShowAll ();
      }
      else {
        const searchCondition = this._searchCondition.value.toLowerCase();
        this.setState((prevState) => {
          const filteredItems = prevState.displayItems.filter (item => item.props.image.category.includes(searchCondition));
          return {displayItems: filteredItems};
        })
      }
    }

    onShowAll = () => {
      this.setState ({displayItems: this.state.allItems});
    }

  render = () => {
    return (
      <div>
          <div className="input-group my-2" style={{width: "25rem" }}>
            <input type="search" ref={input => this._searchCondition = input} className="form-control rounded mr-2" placeholder="Search" aria-label="Search"
            aria-describedby="search-addon" />
            <button type="button" className="btn btn-outline-primary mr-2" onClick={this.onSearch}>Search</button>
            <button type="button" className="btn btn-outline-primary" onClick={this.onShowAll}>Show All</button>
          </div>
        <div className="container">
          <div className="row">
          {this.state.displayItems? this.state.displayItems : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default FanWorks;