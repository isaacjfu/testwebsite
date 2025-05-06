import valuesImage from '../resources/values1.jpg'
import valuesImage2 from '../resources/values2.jpg'
import valuesImage3 from '../resources/values3.jpg'
const Values = ({text}) => {
    return (
        <div class ='about-card'>
            <h2> {text.values.title} </h2>
            <div class = 'about-card-three'>
              <div class = 'about-card-three-card'>
                <div class = 'about-card-three-card-img-container'>
                  <img
                      src = {valuesImage}
                      class = 'about-card-three-card-img'
                    />
                </div>
                <div class = 'about-card-three-card-text-container'>
                  <h3> {text.values.sub1} </h3>
                  <p> {text.values.sub1content} </p>
                </div>
              </div>
              <div class = 'about-card-three-card'>
                <div class = 'about-card-three-card-img-container'>
                  <img
                      src = {valuesImage2}
                      class = 'about-card-three-card-img'
                    />
                </div>
                <div class = 'about-card-three-card-text-container'>
                  <h3> {text.values.sub2} </h3>
                  <p> {text.values.sub2content} </p>
                </div>
              </div>            
              <div class = 'about-card-three-card'>
                <div class = 'about-card-three-card-img-container'>
                  <img
                      src = {valuesImage3}
                      class = 'about-card-three-card-img'
                    />
                </div>
                <div class = 'about-card-three-card-text-container'>
                  <h3> {text.values.sub3} </h3>
                  <p> {text.values.sub3content} </p>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Values