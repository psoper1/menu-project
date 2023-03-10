function Footer() {
    return (
        <>
        <footer id='footer' className="text-white text-center text-lg-start">    
    <div className="container p-4">      
      <div className="row mt-4">       
        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">About</h5>
          <p>
            Hello! My name is Keith! When I'm not playing basketball, I'm loving POTATOES!
          </p>
          <p>
            Come to Keiths' Potatoes and enjoy some nice gourmet SPUDS.
          </p>
          <div className="mt-4">           
          </div>
        </div>       
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <div className="form-outline form-white mb-4">           
          </div>
          <ul className="fa-ul">
            <li className="mb-3">
              <span className="fa-li"><i className=""></i></span><span className="ms-2"><h4>Find me in Potato Island, CT </h4></span>
            </li>
            <li className="mb-3">
              <span className="fa-li play-ball"><i className=""></i></span><span className="ms-2"><a href="https://www.espn.com/mens-college-basketball/player/_/id/55243/keith-downing">I play ball</a></span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className=""></i></span><span className="ms-2"></span>
            </li>
          </ul>
        </div>        
        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
          <h5 className="text-uppercase mb-4">Opening hours</h5>
          <table className="table text-center text-white">
            <tbody className="fw-normal">
              <tr>
                <td>Mon - Thu:</td>
                <td>9am - 10pm</td>
              </tr>
              <tr>
                <td>Fri - Sat:</td>
                <td>9am - 12am</td>
              </tr>
              <tr>
                <td>Sunday:</td>
                <td>9am - 9pm</td>
              </tr>
            </tbody>
          </table>
        </div>        
      </div>     
    </div>  
    <div className="text-center p-3">
      © 2023 Copyright:
      <a className="text-white" href="https://github.com/psoper1">Potato Man</a>
    </div>
    
  </footer>
        </>
    )
};

export default Footer;