import confidentGirlImage from './images/confident_girls_foundation.jpg';
import breastCancerImage from './images/breast_cancer_foundation.png';
import beyondBlueImage from './images/beyond_blue.jpg';
import netballAustImage from './images/netball_australia.png';
import netballRulesImage from './images/netballrules.png';
import netballCoachImage from './images/thenetballcoach.png';

function Community() {
  return (
    <div className='Community'>
    <section id ="community"/>
    <h1 style={{ color: "#a18525" }}>Community</h1>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <tbody>
          <tr>
            <td style={{ padding: '20px' }}>
              <h2>Charity </h2>
              <p><b>Confident Girls Foundation</b></p>
              <a href="https://netball.com.au/confident-girls-foundation" target="_blank" rel="noopener noreferrer">
                <img src={confidentGirlImage} alt="Confident Girls Foundation" />
              </a>
              <p><b>Beyond Blue</b></p>
              <a href="https://www.beyondblue.org.au/" target="_blank" rel="noopener noreferrer">
                <img src={beyondBlueImage} alt="Beyond Blue" />
              </a>
              <p><b>National Breast Cancer Foundation</b></p>
              <a href="https://nbcf.org.au/" target="_blank" rel="noopener noreferrer">
                <img src={breastCancerImage} alt="National Breast Cancer Foundation" />
              </a>
            </td>
            <td style={{ padding: '20px' }}>
              <h2>Netball Sites</h2>
              <p><b>Netball Australia</b></p>
              <a href="https://netball.com.au/" target="_blank" rel="noopener noreferrer">
                <img src={netballAustImage} alt="National Breast Cancer Foundation" />
              </a>
              <p><b>Netball Rules</b></p>
              <a href="https://netball.com.au/rules-netball" target="_blank" rel="noopener noreferrer">
                <img src={netballRulesImage} alt="National Breast Cancer Foundation" />
              </a>
              <p><b>Coaching, Training and Tips</b></p>
              <a href="https://thenetballcoach.com/" target="_blank" rel="noopener noreferrer">
                <img src={netballCoachImage} alt="National Breast Cancer Foundation" />
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='back-to-top'>
      <a href="#navigation" className="back-to-top">Back to top</a>
      </div>
    </div>
  );
}

export default Community;